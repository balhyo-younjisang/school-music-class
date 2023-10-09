import styled from "styled-components";
import { useEffect, useState } from "react";
import { getItem } from "../../utils/storage";

export const Header = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUserFromStorage = getItem("currentUser");
    const storedUser = props.user;

    setUser(storedUser || getUserFromStorage);
  }, [props.user]);

  return (
    <StyledHeader>
      <p>{`${user}님을 위한 추천입니다`}</p>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 8vh;
  margin: 0 15px;
  font-weight: bold;
`;
