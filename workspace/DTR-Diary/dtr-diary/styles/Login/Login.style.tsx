import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

export interface ILoginScreenStyleProps {
  statusbarHeight: number;
}

export const styles = (props: ILoginScreenStyleProps) =>
  StyleSheet.create({
    container: {
      height: "100%",
      paddingTop: props.statusbarHeight,
    },

    titleWrap: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },

    title: {
      fontSize: 40,
      fontFamily: "Gugi-regular",
      lineHeight: 50,
    },

    subTitle: {
      fontSize: 20,
      fontFamily: "Gugi-regular",
      lineHeight: 20,
    },
  });
