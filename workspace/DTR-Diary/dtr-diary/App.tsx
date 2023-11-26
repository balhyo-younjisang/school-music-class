import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./screens/Home.screen";
import { LoginScreen } from "./screens/Login.screen";
import { Logged, LoggedContext } from "./context/LoginContext";
import { useFonts } from "expo-font";

const ScreenStack = createStackNavigator();

export default function App() {
  let [fontLoaded] = useFonts({
    "Gugi-regular": require("./assets/fonts/Gugi-Regular.ttf"),
  });

  if (!fontLoaded) {
    return <></>;
  }

  const isLogged: Logged = {
    email: "",
    loggedIn: false,
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <LoggedContext.Provider value={isLogged}>
          <ScreenStack.Navigator>
            {!isLogged && (
              <ScreenStack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
            )}
            <ScreenStack.Screen name="Home" component={HomeScreen} />
          </ScreenStack.Navigator>
        </LoggedContext.Provider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
});
