import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { HomePage, JoinPage, LoginPage, UserPage } from "./pages/index";
import "./app.css";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/*" element={<>a</>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
