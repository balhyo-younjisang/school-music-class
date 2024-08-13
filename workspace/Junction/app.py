from flask import Flask, request, jsonify
import joblib
import pandas as pd
import numpy as np
import os

app = Flask(__name__)

# Load the combined models dictionary
models_dict = joblib.load('models/combined_models.pkl')

# Extract models and encoders
model_flavor = models_dict['model_flavor']
model_time_period = models_dict['model_time_period']
scaler = models_dict['scaler']
le_food = models_dict['le_food']
le_taste = models_dict['le_taste']
le_cuisine = models_dict['le_cuisine']
le_category = models_dict['le_category']
le_meal_time = models_dict['le_meal_time']

# Helper functions
def preprocess_data(data):
    data['Food'] = le_food.transform(data['Food'])
    data['Taste'] = le_taste.transform(data['Taste'])
    data['Cuisine'] = le_cuisine.transform(data['Cuisine'])
    data['Category'] = le_category.transform(data['Category'])
    data['Meal Time'] = le_meal_time.transform(data['Meal Time'])
    data['Ingredient Classification'] = data['Ingredient Classification'].map({
        "Rice": 0, "Noodles": 1, "Bread": 2, "Meat": 3, "Vegetables": 4, "Pizza": 5, "Chicken": 6,
        "Snacks": 7, "Sashimi": 8, "Fast Food": 9, "Dessert": 10, "Fruit": 11, "Other": 12
    }).fillna(-1).astype(int)
    data['Type Classification'] = data['Type Classification'].map({
        "Chinese": 0, "Japanese": 1, "Western": 2, "Asian": 3, "Korean": 4, "Pizza": 5, "Chicken": 6,
        "Meat": 7, "Snacks": 8, "Sashimi": 9, "Fast Food": 10, "Dessert": 11, "Fruit": 12, "Other": 13
    }).fillna(-1).astype(int)
    return scaler.transform(data)

def get_user_data(user_id):
    user_data_file = f'user_data/user_{user_id}.csv'
    if os.path.exists(user_data_file):
        return pd.read_csv(user_data_file)
    else:
        return pd.DataFrame()

def save_user_data(user_id, df):
    user_data_file = f'user_data/user_{user_id}.csv'
    if not os.path.exists(user_data_file):
        df.to_csv(user_data_file, index=False)
    else:
        df.to_csv(user_data_file, mode='a', header=False, index=False)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        user_id = data.pop('user_id')
        df = pd.DataFrame([data])
        df_processed = preprocess_data(df)

        # Predict using the combined model
        flavor_pred = model_flavor.predict(df_processed)
        time_period_pred = model_time_period.predict(df_processed)

        flavor = le_taste.inverse_transform(flavor_pred)
        time_period = le_meal_time.inverse_transform(time_period_pred)

        return jsonify({
            'predicted_taste': flavor[0],
            'predicted_meal_time': time_period[0]
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/update', methods=['POST'])
def update():
    try:
        data = request.json
        user_id = data.pop('user_id')
        df = pd.DataFrame([data])

        # Save new data for the user
        save_user_data(user_id, df)

        # Load user data
        df_user = get_user_data(user_id)

        # If user data is available, update the model
        if not df_user.empty:
            df_user_processed = preprocess_data(df_user)
            X_user = df_user_processed
            y_flavor_user = df_user['Taste']
            y_time_period_user = df_user['Meal Time']

            # Update models (for simplicity, just retrain on the user's data)
            model_flavor.fit(X_user, y_flavor_user)
            model_time_period.fit(X_user, y_time_period_user)

            # Save the updated combined model
            models_dict = {
                'model_flavor': model_flavor,
                'model_time_period': model_time_period,
                'scaler': scaler,
                'le_food': le_food,
                'le_taste': le_taste,
                'le_cuisine': le_cuisine,
                'le_category': le_category,
                'le_meal_time': le_meal_time
            }
            joblib.dump(models_dict, 'models/combined_models.pkl')

        return jsonify({'status': 'Model updated successfully'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)