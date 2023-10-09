import styled from "styled-components";
import { Menu } from "./Menu";

import { MdOutlineRecommend, MdPayment, MdLanguage } from "react-icons/md";
import { CgCommunity } from "react-icons/cg";

export const MenuSection = () => {
  return (
    <StyledSection>
      <StyledMenuContainer>
        <Menu icon={<MdOutlineRecommend />} href="recommend" nav="추천" />
        <Menu icon={<CgCommunity />} href="community" nav="커뮤니티" />
        <Menu icon={<MdPayment />} href="payment" nav="페이" />
        <Menu icon={<MdLanguage />} href="language" nav="언어" />
      </StyledMenuContainer>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  height: 50vh;
  background-color: #e4e7ee;
  position: relative;
  display: flex;
  justify-content: center;
`;

const StyledMenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 90%;
  height: 80%;
  top: -20%;
  position: absolute;
`;
