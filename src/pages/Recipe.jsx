import { Grid } from "@mui/material";
import React from "react";
import Section from "../components/Section";
import Pagination from "../components/Pagination";
import SearchCategory from "../components/SearchCategory";
import ItemProduct from "../components/ItemProduct";
import ItemProductDetail from "../components/ItemProductDetail";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";

const listBreadcrumbs = [{ name: "Công thức", path: "/recipe" }];
const listCategory = ["Tất cả", "Đồ ăn", "Nước uống"];

const Recipe = () => {
  return (
    <Section>
      <BreadcrumbsComponent listData={listBreadcrumbs} />
      {/* Category  */}
      <Grid container spacing={1} sx={{ mt: "5px" }} alignItems="center">
        <Grid item md={8}>
          <SearchCategory listCategory={listCategory} />
        </Grid>
        <Grid item md={4}>
          <Pagination />
        </Grid>
      </Grid>
      {/* Item product  */}

      <Grid
        container
        spacing={1}
        sx={{ flexGrow: 1, mt: "5px" }}
        alignItems="center"
      >
        <Grid item md={8} sx={{ height: "100%" }}>
          <Grid container spacing={1}>
            <Grid item md={4}>
              <ItemProduct />
            </Grid>
            <Grid item md={4}>
              <ItemProduct />
            </Grid>
            <Grid item md={4}>
              <ItemProduct />
            </Grid>
            <Grid item md={4}>
              <ItemProduct />
            </Grid>
            <Grid item md={4}>
              <ItemProduct />
            </Grid>
            <Grid item md={4}>
              <ItemProduct />
            </Grid>
            <Grid item md={4}>
              <ItemProduct />
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

export default Recipe;
