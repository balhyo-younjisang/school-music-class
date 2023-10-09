import { Nav } from "../../components/Layout/Nav";
import { useRecoilState } from "recoil";
import { currentUserInfo } from "../../store/currentUserAtom";
import { Header } from "../../components/Recommend/Header";
import { ScrollRecommend } from "../../components/Recommend/ScrollRecommend";

export const RecommendPage = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserInfo);

  return (
    <>
      <Nav />
      <Header user={currentUser} />
      <ScrollRecommend />
    </>
  );
};
