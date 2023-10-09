import styled from "styled-components";

export const Input = (props) => {
  return (
    <>
      <StyledLabel>{props.label}</StyledLabel>
      <StyledInput
        onChange={props.changeHandler}
        name={props.name}
        value={props.value}
        type={props.type}
      ></StyledInput>
    </>
  );
};

const StyledLabel = styled.label`
  font-size: 12px;
  margin-top: 15px;
`;

const StyledInput = styled.input`
  font-size: 20px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`;
