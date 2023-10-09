import styled from "styled-components";
import { Link } from "react-router-dom";

export const Menu = (props) => {
  return (
    <Link to={props.href}>
      <StyledMenu>
        <StyledIconCircle>{props.icon}</StyledIconCircle>
        <StyledNav>{props.nav}</StyledNav>
      </StyledMenu>
    </Link>
  );
};

const StyledMenu = styled.div`
  width: 40vw;
  height: 25vh;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #c0c0c0;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledIconCircle = styled.div`
  background-color: #dcdcdc;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: #2573b3;
`;

const StyledNav = styled.p`
  margin-top: 0.8rem;
  font-weight: bold;
`;
