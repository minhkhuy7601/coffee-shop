import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import CustomerManagement from "./CustomerManagement";
import OrderManagement from "./OrderManagement";
import OrderProduct from "./OrderProduct";
import ProductManagement from "./ProductManagement";
import Recipe from "./Recipe";
import StaffManagement from "./StaffManagement";

const Layout = () => {
  let navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.login.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
    if (window.location.pathname === "/") {
      navigate("/recipe");
    }
  }, []);
  return (
    <>
      <Header staffName={currentUser?.staffName} />
      <Grid container spacing={0}>
        <Grid item md={2}>
          <Navbar />
        </Grid>
        <Grid item md={10}>
          <Routes>
            <Route path="/recipe" element={<Recipe abc="asd" />} />
            <Route path="/orderManagement" element={<OrderManagement />} />
            <Route path="/orderProduct" element={<OrderProduct />} />
            <Route path="/productManagement" element={<ProductManagement />} />
            <Route
              path="/customerManagement"
              element={<CustomerManagement />}
            />
            <Route path="/staffManagement" element={<StaffManagement />} />
          </Routes>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
