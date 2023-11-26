import { View } from "react-native";
import * as S from "../../styles/Login/LoginForm.style";
import { IUserInput } from "../../types/user";
import { LoginInput } from "./LoginInput.comp";
import { Button } from "../Button.comp";
import { LoginButtonStyle } from "../../styles/Login/LoginButton.style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParam } from "../../types/page";

interface LoginFormProps {
  userData: IUserInput;
  setUserData: React.Dispatch<React.SetStateAction<IUserInput>>;
}

export const LoginForm = ({ userData, setUserData }: LoginFormProps, {}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

  const EmailInputHandler = (text: string): void => {
    setUserData((prevState) => {
      return { ...prevState, email: text };
    });
  };

  const PasswordInputHandler = (text: string): void => {
    setUserData((prevState) => {
      return { ...prevState, password: text };
    });
  };

  const LoginButtonPressHandler = () => {
    // connect api

    navigation.navigate("Home");
  };

  return (
    <View style={S.styles.form}>
      <LoginInput
        placeholder="이메일을 입력해주세요"
        value={userData.email}
        onChangeTextHandler={EmailInputHandler}
        isPassword={false}
      />
      <LoginInput
        placeholder="비밀번호를 입력해주세요"
        value={userData.password}
        onChangeTextHandler={PasswordInputHandler}
        isPassword={true}
      />
      <Button
        text="로그인"
        onPressHandler={LoginButtonPressHandler}
        style={LoginButtonStyle.button}
      />
    </View>
  );
};
