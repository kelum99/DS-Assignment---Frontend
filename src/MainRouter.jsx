import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import AdminManagement from "./pages/admin/adminManagement";
import CustomerManagement from "./pages/admin/customerManagement";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin/movieadminmanagement" element={<AdminManagement />} />
        <Route path="/admin/customerManagement" element={<CustomerManagement />} />
      
      
        
        

      </Routes>
    </>
  );
};
export default MainRouter;
