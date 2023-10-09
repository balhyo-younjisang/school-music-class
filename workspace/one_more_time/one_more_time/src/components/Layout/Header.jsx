import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <StyledContainer>
        <StyledTitle to="/">One More Time</StyledTitle>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 8vh;
  background-color: skyblue;
  display: flex;
`;

const StyledTitle = styled(Link)`
  color: white;
  align-self: center;
  margin: 0 auto;
  font-size: 18px;
`;
