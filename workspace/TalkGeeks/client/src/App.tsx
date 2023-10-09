import React from "react";
import { SideNav } from "./components/sidenav";
import { Home } from "./routes/home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Home />
    </>
  );
}

export default App;
