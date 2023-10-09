import { useSearch } from "../../hooks/useSearch";
import styled from "styled-components";

import backgroundImage from "../../assets/images/background.jpg";

export const SearchSection = () => {
  const { searchKey, handleChange, handleSubmit } = useSearch();

  return (
    <StyledSection>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={searchKey}
          onChange={handleChange}
          name="search"
          placeholder="검색"
        />
      </StyledForm>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100%;
  height: 35vh;
  background-color: blue;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;

  &:focus {
    outline: none;
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;

const StyledInput = styled.input`
  border: none;
  height: 2.8rem;
  width: 90%;
  text-align: center;
  font-size: 18px;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #d6a8e9;
  }
`;
