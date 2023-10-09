import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { MainPage } from "./pages/Main/Main";
import { RecommendPage } from "./pages/Recommend/Main";
import { LanguagePage } from "./pages/Language/Main";
import { NotFoundPage } from "./pages/NotFound/Main";
import { LoginPage } from "./pages/Auth/Login";
import { Text } from "./pages/Language/Text";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/auth">
          <Route path="/auth/login" element={<LoginPage />}></Route>
        </Route>
        <Route path="/recommend" element={<RecommendPage />} />
        <Route path="/language" >
          <Route path="" element={<LanguagePage />} />
          <Route path="/language/text" element={<Text />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
