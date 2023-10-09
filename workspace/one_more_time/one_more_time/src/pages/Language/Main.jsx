import { Nav } from "../../components/Layout/Nav";
import styled from "styled-components";
import { Menu } from "../../components/Language/Menu";

import { RxText } from "react-icons/rx";
import { RiVoiceprintFill } from "react-icons/ri";
import { MdOutlineControlCamera } from "react-icons/md";
import { BiImport } from "react-icons/bi";

export const LanguagePage = () => {
  return (
    <>
      <Nav />
      <StyledContainer>
        <Menu icon={<RxText />} href="/language/text" nav="Text" />
        <Menu icon={<RiVoiceprintFill />} href="/language/voice" nav="Voice" />
        <Menu
          icon={<MdOutlineControlCamera />}
          href="/language/camera"
          nav="Camera"
        />
        <Menu icon={<BiImport />} href="/language/import" nav="Import" />
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
`;
