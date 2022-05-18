import React from "react";
import Section from "../components/Section";

import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import { Grid } from "@mui/material";
import Pagination from "../components/Pagination";
import SearchCategory from "../components/SearchCategory";
import ItemOrder from "../components/ItemOrder";
import ItemOrderDetail from "../components/ItemOrderDetail";
import ModalPayment from "../components/ModalPayment";

const listBreadcrumbs = [{ name: "Đơn hàng", path: "/orderManagement" }];
const listCategory = ["Đơn mới", "Đã xác nhận", "Đã thanh toán"];

const OrderManagement = () => {
  return (
    <Section>
      <BreadcrumbsComponent listData={listBreadcrumbs} />
      <ModalPayment />

      {/* Category  */}
      <Grid container spacing={1} sx={{ mt: "5px" }} alignItems="center">
        <Grid item md={8}>
          <SearchCategory listCategory={listCategory} />
        </Grid>
        <Grid item md={4}>
          <Pagination />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={1}
        sx={{ flexGrow: 1, mt: "5px" }}
        alignItems="center"
      >
        <Grid item md={8} sx={{ height: "100%" }}>
          <Grid container spacing={1}>
            <Grid item md={4}>
              <ItemOrder />
            </Grid>
            <Grid item md={4}>
              <ItemOrder />
            </Grid>
            <Grid item md={4}>
              <ItemOrder />
            </Grid>
            <Grid item md={4}>
              <ItemOrder />
            </Grid>
            <Grid item md={4}>
              <ItemOrder />
            </Grid>
            <Grid item md={4}>
              <ItemOrder />
            </Grid>
            <Grid item md={4}>
              <ItemOrder />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} sx={{ height: "100%" }}>
          <ItemOrderDetail />
        </Grid>
      </Grid>
    </Section>
  );
};

export default OrderManagement;
