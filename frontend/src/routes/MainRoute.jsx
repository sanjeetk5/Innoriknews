import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SingleItem from "../components/SingleItem";
import Singlesave from "../components/Singlesave";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";

const MainRoute = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />}/>
        <Route path="/save" element={<Singlesave/>} />
      </Routes>
    </>
  );
};

export default MainRoute;
