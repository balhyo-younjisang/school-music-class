import styled from "styled-components";

export const Select = ({ Options, value, setValue }) => {
  const onChangeHandler = (event) => {
    setValue(event.currentTarget.value);
  };

  return (
    <StyledSelect onChange={onChangeHandler} value={value}>
      {Options.map((item, index) => (
        <option key={item.key} value={item.value}>
          {item.value}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  border: none;
  outline: none;
  appearance: none; /* 화살표 없애기 공통*/
  -webkit-appearance: none; /* 화살표 없애기 for chrome*/
  -moz-appearance: none; /* 화살표 없애기 for firefox*/
  background-color: inherit;
  font-weight: bold;

  ::-ms-expand {
    /* 화살표 없애기 for IE10, 11*/
    display: none;
  }
`;
