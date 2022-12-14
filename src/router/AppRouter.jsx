import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import useAuthCalls from "../hooks/useAuthCalls";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";

const AppRouter = () => {
  const { userObserver } = useAuthCalls();
  useEffect(() => {
    userObserver();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
