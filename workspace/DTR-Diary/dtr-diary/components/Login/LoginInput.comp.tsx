import { TextInput } from "react-native-gesture-handler";
import { IUserInputData } from "../../types/user";
import { LoginInputStyle } from "../../styles/Login/LoginInput.style";

export const LoginInput = (InputData: IUserInputData) => {
  return (
    <TextInput
      placeholder={InputData.placeholder}
      value={InputData.value}
      onChangeText={InputData.onChangeTextHandler}
      secureTextEntry={InputData.isPassword}
      style={LoginInputStyle.input}
    />
  );
};
