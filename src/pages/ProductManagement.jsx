import { Grid } from "@mui/material";
import React from "react";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import SearchCategory from "../components/SearchCategory";
import Section from "../components/Section";
import Pagination from "../components/Pagination";
import { ItemProductWithOption } from "../components/ItemProduct";
import ItemProductDetail from "../components/ItemProductDetail";

const listBreadcrumbs = [
  { name: "quản lý sản phẩm", path: "/orderManagement" },
];

const listCategory = ["Tất cả", "Đồ ăn", "Nước uống"];
const ProductManagement = () => {
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
              <ItemProductWithOption />
            </Grid>
            <Grid item md={4}>
              <ItemProductWithOption />
            </Grid>
            <Grid item md={4}>
              <ItemProductWithOption />
            </Grid>
            <Grid item md={4}>
              <ItemProductWithOption />
            </Grid>
            <Grid item md={4}>
              <ItemProductWithOption />
            </Grid>
            <Grid item md={4}>
              <ItemProductWithOption />
            </Grid>
            <Grid item md={4}>
              <ItemProductWithOption />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} sx={{ height: "100%" }}>
          <ItemProductDetail />
        </Grid>
      </Grid>
    </Section>
  );
};

export default ProductManagement;
