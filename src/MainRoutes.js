import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import RegisterPage from "./pages/RegisterPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} key={"/"} />
      <Route path="/register" element={<RegisterPage />} key={"/register"} />
      <Route path="/chat" element={<ChatPage />} key={"/chat"} />
    </Routes>
  );
};

export default MainRoutes;
