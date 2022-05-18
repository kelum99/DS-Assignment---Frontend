import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import AdminManagement from "./pages/admin/adminManagement";
import CustomerManagement from "./pages/admin/customerManagement";
import AddMovie from "./pages/admin/addMovie";
import Registration from "./pages/customer/customerRegistration";
import Stripe from "./pages/payment gateway/stripe";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/admin/movieadminmanagement"
          element={<AdminManagement />}
        />
        <Route
          path="/admin/customerManagement"
          element={<CustomerManagement />}
        />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/payment" element={<Stripe />} />
      </Routes>
    </>
  );
};
export default MainRouter;
