import { StatusBar, Text, View } from "react-native";
import * as S from "../styles/Login/Login.style";
import { LoginForm } from "../components/Login/LoginForm.comp";
import { useState } from "react";
import { IUserInput } from "../types/user";

export const LoginScreen = () => {
  const LoginScreenStyleProps: S.ILoginScreenStyleProps = {
    statusbarHeight: StatusBar.currentHeight!,
  };

  const [userInput, setUserInput] = useState<IUserInput>({
    email: "",
    password: "",
  });

  return (
    <View style={S.styles(LoginScreenStyleProps).container}>
      <View style={S.styles(LoginScreenStyleProps).titleWrap}>
        <Text style={S.styles(LoginScreenStyleProps).title}>오감일기</Text>
        <Text style={S.styles(LoginScreenStyleProps).subTitle}>
          오늘의 감정을 기록하다
        </Text>
      </View>
      <LoginForm userData={userInput} setUserData={setUserInput} />
    </View>
  );
};
