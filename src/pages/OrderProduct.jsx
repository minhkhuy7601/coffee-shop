import React from "react";
import Section from "../components/Section";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import ItemOrderProductDetail from "../components/ItemOrderProductDetail";
import Pagination from "../components/Pagination";

import { Grid } from "@mui/material";
import SearchCategory from "../components/SearchCategory";
import ItemOrderProduct from "../components/ItemOrderProduct";

const listBreadcrumbs = [{ name: "ghi nhận đơn hàng", path: "/orderProduct" }];
const listCategory = ["Tất cả", "Đồ ăn", "Nước uống"];

const OrderProduct = () => {
  return (
    <Section>
      <BreadcrumbsComponent listData={listBreadcrumbs} />
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
              <ItemOrderProduct />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} sx={{ height: "100%" }}>
          <ItemOrderProductDetail />
        </Grid>
      </Grid>
    </Section>
  );
};

export default OrderProduct;
