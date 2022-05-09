import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import MovieBook from "./pages/customer/movieBook";
import AddMovie from "./pages/admin/addMovie";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/moviebook" element={<MovieBook />} />
        <Route path="/addmovie" element={<AddMovie />} />
      </Routes>
    </>
  );
};
export default MainRouter;
