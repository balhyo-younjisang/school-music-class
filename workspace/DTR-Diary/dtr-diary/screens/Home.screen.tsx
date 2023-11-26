import { View, StyleSheet, Text } from "react-native";
import CalendarStrip from "react-native-calendar-strip";

export const HomeScreen = () => {
  return (
    <View>
      <CalendarStrip
        scrollable
        style={{ height: 200, paddingTop: 20, paddingBottom: 10 }}
        calendarColor={"#EEEEEE"}
        calendarHeaderStyle={{ color: "black" }}
        dateNumberStyle={{ color: "black" }}
        dateNameStyle={{ color: "black" }}
        iconContainer={{ flex: 0.1 }}
      />
      <Text>aa</Text>
    </View>
  );
};
