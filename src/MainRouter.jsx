import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import AdminManagement from "./pages/admin/adminManagement";
import CustomerManagement from "./pages/admin/customerManagement";
import Payment from "./pages/admin/payment";
//import MovieBook from "./pages/customer/movieBook";
import AddMovie from "./pages/admin/addMovie";
import Navbar from "./components/navbar";
import Registration from "./pages/customer/Registration";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin/movieadminmanagement" element={<AdminManagement />} />
        <Route path="/admin/customerManagement" element={<CustomerManagement />} />
        <Route path="/admin/payment" element={<Payment />} />
        {/* <Route path="/moviebook" element={<MovieBook />} /> */}
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </>
  );
};
export default MainRouter;
