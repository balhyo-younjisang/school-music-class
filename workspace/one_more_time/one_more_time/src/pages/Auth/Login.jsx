import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import logo from "../../assets/logo.jpg";

import { Login } from "../../apis/auth";
import { Input } from "../../components/Auth/Login/Input";
import { currentUserInfo } from "../../store/currentUserAtom";
import { setItem } from "../../utils/storage";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState();
  const [currentUser, setCurrentUser] = useRecoilState(currentUserInfo);

  const onChangeHandler = (event) => {
    setUserInfo((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const submitHandler = async () => {
    setErrorMsg();
    const loginResult = await Login(userInfo.email, userInfo.password);

    if (!loginResult.data.userName) {
      setErrorMsg(loginResult.data);
    } else {
      const user = loginResult.data.userName;

      setCurrentUser(user);
      setItem("currentUser", currentUser);
      navigate("/");
    }
  };

  return (
    <StyledContainer>
      <StyledLogo src={logo} alt="Login Page Logo" />
      {errorMsg && <p>{errorMsg}</p>}
      <StyledInputContainer>
        <Input
          label="이메일"
          changeHandler={onChangeHandler}
          name="email"
          value={userInfo.email}
          type="email"
        />

        <Input
          label="비밀번호"
          changeHandler={onChangeHandler}
          name="password"
          value={userInfo.password}
          type="password"
        />
        <StyledButton onClick={submitHandler}>로그인</StyledButton>
        <StyledLink to="/auth/join">[회원가입]</StyledLink>
      </StyledInputContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  //   justify-content: space-evenly;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  margin: 10px 0;
`;

const StyledLogo = styled.img`
  width: 12rem;
  height: 10rem;
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 10vh;
`;

const StyledButton = styled.button`
  margin: 10px 0;
  border: none;
  padding: 10px;
  font-weight: bold;
  background-color: powderblue;
  color: white;
  border-radius: 5px;
`;

const StyledLink = styled(Link)`
  text-align: center;
  font-size: 15px;
  margin-top: 15px;
`;
