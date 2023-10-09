import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = () => {
  /** 경로가 인자로 들어온 path로 시작하는지 확인 후 불리언 타입으로 리턴하는 함수 */
  const isActive = (path) => {
    return window.location.pathname.startsWith(path);
  };

  return (
    <StyledNav>
      <StyledNavItem to="/recommend" active={isActive("/recommend")}>
        추천
      </StyledNavItem>
      <StyledNavItem to="/community" active={isActive("/community")}>
        커뮤니티
      </StyledNavItem>
      <StyledNavItem to="/language" active={isActive("/language")}>
        언어
      </StyledNavItem>
      <StyledNavItem to="/payment" active={isActive("/payment")}>
        페이
      </StyledNavItem>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  height: 8vh;
  border-bottom: 2px solid #e4e7ee;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledNavItem = styled(Link)`
  color: ${(props) => (props.active ? "red" : "black")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;
