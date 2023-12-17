import { Button, Flex, Input, Text, Alert, AlertIcon } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigation = useNavigate();
  const inputFocusRef = useRef<HTMLInputElement>(null);
  const [inputUserData, setInputUserData] = useState({
    id: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    inputFocusRef.current!.focus();
  }, []);

  const LoginHandler = () => {
    if (!inputUserData.id || !inputUserData.password) {
      setError("모든 입력칸에 입력을 해주세요!");
      return;
    }
    navigation("/");
  };

  const changeInputIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUserData((prevState) => {
      return { ...prevState, id: e.target.value };
    });
  };

  const changeInputPasswordHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputUserData((prevState) => {
      return { ...prevState, password: e.target.value };
    });
  };

  return (
    <>
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}
      <Flex
        alignItems="center"
        h="100vh"
        gap="20px"
        direction={"column"}
        justifyContent={"center"}
      >
        <Text fontSize={26} fontFamily="revert" fontWeight="bold">
          기다리고 있었어요!
        </Text>
        <Input
          ref={inputFocusRef}
          placeholder="아이디를 입력해주세요"
          type="text"
          w={"300px"}
          value={inputUserData.id}
          onChange={changeInputIdHandler}
        />
        <Input
          placeholder="비밀번호를 입력해주세요"
          type="password"
          w={"300px"}
          value={inputUserData.password}
          onChange={changeInputPasswordHandler}
        />
        <Button w={"300px"} onClick={LoginHandler}>
          로그인
        </Button>
        <Link to="/join">
          <Text fontSize={14} color="blue">
            회원가입하기!
          </Text>
        </Link>
      </Flex>
    </>
  );
};

export default LoginPage;
