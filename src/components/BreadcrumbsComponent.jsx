import { Typography, Link, Breadcrumbs, Button } from "@mui/material";
import React from "react";

import { Link as RouteLink } from "react-router-dom";

const BreadcrumbsComponent = ({ listData, buttonAdd }) => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        p: "5px 10px",
        borderColor: "greenMedium",
        borderTop: "1px solid",
        borderBottom: "1px solid",
        display: "flex",
        alignItems: "center",
        textTransform: "uppercase",
        position: "relative",
      }}
    >
      {buttonAdd && (
        <Button
          variant="contained"
          size="small"
          color="greenDark"
          sx={{
            position: "absolute",
            color: "colorWhite.main",
            borderRadius: "50px",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
          }}
        >
          {buttonAdd}
        </Button>
      )}

      {listData.map((item, index) =>
        index === listData.length - 1 ? (
          <Typography
            key="index"
            color="text.primary"
            sx={{ fontWeight: "500" }}
          >
            {item.name}
          </Typography>
        ) : (
          <Link key="index" underline="hover" color="inherit">
            <RouteLink to={item.path}>{item.name}</RouteLink>
          </Link>
        )
      )}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
