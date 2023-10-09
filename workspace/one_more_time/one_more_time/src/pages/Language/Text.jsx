import styled from "styled-components";
import { useState } from "react";
import { Select } from "../../components/Language/Select";
import { BsArrowLeftRight } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { translate } from "../../apis/translate";

const LanguageOptions = [
  { value: "English", key: 1 },
  { value: "Korean", key: 2 },
];

export const Text = () => {
  const [enterContent, setEnterContent] = useState("English");
  const [translationContent, setTranslationContent] = useState("English");

  const [enterText, setEnterText] = useState("");
  const [translationText, setTranslationText] = useState("");

  const ChangeLangHandler = () => {
    const nowEnterContent = enterContent;
    const nowTranslationContent = translationContent;

    setEnterContent(nowTranslationContent);
    setTranslationContent(nowEnterContent);
  };

  const removeContentHandler = () => {
    setEnterText("");
  };

  const changeEnterTextHandler = (event) => {
    setEnterText(event.target.value);
  };

  const changeTranslationTextHandler = (event) => {
    setTranslationText(event.target.value);
  };

  const submitTextHandler = () => {
    const translateResult = translate(
      enterContent,
      translationContent,
      enterText
    );
  };

  return (
    <StyledContainer>
      <StyledSelectLangContainer>
        <Select
          Options={LanguageOptions}
          value={enterContent}
          setValue={setEnterContent}
        />
        <StyledArrow onClick={ChangeLangHandler}>
          <BsArrowLeftRight />
        </StyledArrow>
        <Select
          Options={LanguageOptions}
          value={translationContent}
          setValue={setTranslationContent}
        />
      </StyledSelectLangContainer>
      <StyledInputContainer>
        <StyledInputHead>
          <p>{enterContent}</p>
          <MdDelete onClick={removeContentHandler} />
        </StyledInputHead>
        <StyledInput
          placeholder="Enter text"
          value={enterText}
          onChange={changeEnterTextHandler}
        />
        <StyledButtonContainer>
          <StyledButton onClick={submitTextHandler}>Translate</StyledButton>
        </StyledButtonContainer>
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledInputHead>
          <p>{translationContent}</p>
        </StyledInputHead>
        <StyledInput
          placeholder="Translation"
          value={translationText}
          onChange={changeTranslationTextHandler}
        />
      </StyledInputContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledSelectLangContainer = styled.div`
  height: 6vh;
  width: 90%;
  border-radius: 20px;
  background-color: powderblue;
  box-shadow: 3px 3px 1px #7cc0c9;
  display: flex;
  justify-content: space-around;
`;

const StyledArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInputContainer = styled.div`
  background-color: powderblue;
  width: 90%;
  height: 30vh;
  border-radius: 10px;
  box-shadow: 3px 3px 1px #7cc0c9;
`;

const StyledInputHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  font-weight: bold;
  margin: 5px 20px;
`;

const StyledInput = styled.textarea`
  width: 97%;
  height: 65%;
  outline: none;
  border: none;
  background-color: inherit;
  font-size: 17px;
  font-family: "Segoe UI";
  font-weight: bold;
  resize: none;
  margin: 5px;
`;

const StyledButtonContainer = styled.div`
  height: 15%;
`;

const StyledButton = styled.button`
  color: white;
  background-color: purple;
  border: none;
  border-radius: 5px;
  padding: 5px;
`;
