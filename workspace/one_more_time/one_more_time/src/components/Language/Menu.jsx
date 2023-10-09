import styled from "styled-components";
import { Link } from "react-router-dom";

export const Menu = (props) => {
  return (
    <StyledItem to={props.href}>
      {props.icon}
      <StyledNav>{props.nav}</StyledNav>
    </StyledItem>
  );
};

const StyledItem = styled(Link)`
  width: 8rem;
  height: 8rem;
  border-radius: 1.8rem;
  border: 1px solid #dadada;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  flex-direction: column;
`;

const StyledNav = styled.p`
  font-size: 1rem;
  margin: 0px;
  font-weight: bold;
`;
