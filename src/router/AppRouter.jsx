import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import useAuthCalls from "../hooks/useAuthCalls";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";
import Search from "../pages/Search";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  const { userObserver } = useAuthCalls();
  useEffect(() => {
    userObserver();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Main />} />
        <Route path="/detail" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
