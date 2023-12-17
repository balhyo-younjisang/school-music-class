import { Button, Flex, Input, Text, Alert, AlertIcon } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinPage = () => {
  const navigation = useNavigate();
  const inputFocusRef = useRef<HTMLInputElement>(null);
  const [inputUserData, setInputUserData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    inputFocusRef.current!.focus();
  }, []);

  const JoinHandler = () => {
    if (inputUserData.password !== inputUserData.confirmPassword) {
      setError("비밀번호를 다시 확인해주세요😥");
      return;
    }

    if (
      !inputUserData.id ||
      !inputUserData.password ||
      !inputUserData.confirmPassword
    ) {
      setError("모든 입력칸에 입력을 해주세요!");
      return;
    }

    navigation("/login");
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

  const changeInputConfirmPasswordHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputUserData((prevState) => {
      return { ...prevState, confirmPassword: e.target.value };
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
          NOSMO에 오신 걸 환영해요
        </Text>
        <Text fontSize={20} fontFamily="revert" fontWeight="bold">
          NOSMO는 당신의 금연을 위해 존재해요
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
        <Input
          placeholder="비밀번호를 확인해주세요"
          type="password"
          w={"300px"}
          value={inputUserData.confirmPassword}
          onChange={changeInputConfirmPasswordHandler}
        />
        <Button w={"300px"} onClick={JoinHandler}>
          회원가입
        </Button>
      </Flex>
    </>
  );
};

export default JoinPage;
