import styled from "styled-components";
import { Link } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink to="/">
        <VscMenu />
        <StyledNav>메뉴</StyledNav>
      </StyledLink>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  height: 7vh;
  background-color: #e4e7ee;
  border-top: 2px solid #c0c0c0;
  position: absolute;
  bottom: 0;
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledNav = styled.p`
  font-size: 4px;
`;
