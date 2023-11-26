import { TouchableOpacity, Text } from "react-native";
import { IButtonProps } from "../types/component";

export const Button = (ButtonProps: IButtonProps) => {
  return (
    <TouchableOpacity
      onPress={ButtonProps.onPressHandler}
      style={ButtonProps.style}
    >
      <Text
        style={{
          fontFamily: "Gugi-regular",
        }}
      >
        {ButtonProps.text}
      </Text>
    </TouchableOpacity>
  );
};
