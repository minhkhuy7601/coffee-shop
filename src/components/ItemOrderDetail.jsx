import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";

const listOrderCoffee = {
  title: "Coffee",
  listProduct: [
    {
      name: "Bạc xỉu",
      size: "L",
      quantity: 2,
    },
    {
      name: "Bạc xỉu",
      size: "L",
      quantity: 120,
    },
  ],
};

const listOrderFood = {
  title: "Food",
  listProduct: [
    {
      name: "Croissant Trứng Muối",
      size: "",
      quantity: 2,
    },
    {
      name: "Bánh Bông Lan Trứng Muối",
      size: "",
      quantity: 3,
    },
  ],
};

const ItemOrderDetail = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderColor: "colorGreen1",
        border: "2px solid",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          borderColor: "greenMedium",
          borderBottom: "1px solid ",
          width: "90%",
          p: "5px 0 ",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          Bàn 01
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 500,
          }}
        >
          01-01-2022 10:10 PM
        </Typography>
      </Box>
      <Typography
        sx={{
          width: "90%",
          fontWeight: 500,
          fontSize: "14px",
          color: "primary.main",
          mt: "10px",
        }}
      >
        Mã đơn: 123 12312 213
      </Typography>
      <Typography
        sx={{
          width: "90%",
          fontWeight: 500,
          fontSize: "14px",
          color: "primary.main",
        }}
      >
        Nhân viên: Del
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "2px",
          m: "20px 0",
        }}
      >
        lowland coffee
      </Typography>
      <Box
        sx={{
          width: "90%",
          maxHeight: "320px",
          overflowY: "scroll",
          borderRadius: "5px",
          border: "1px solid",
          borderColor: "green.main",
          p: "5px",
        }}
      >
        <ListOrder
          title={listOrderCoffee.title}
          listProduct={listOrderCoffee.listProduct}
        />
        <ListOrder
          title={listOrderCoffee.title}
          listProduct={listOrderCoffee.listProduct}
        />
      </Box>

      <Box sx={{ display: "flex", mt: "10px" }}>
        <Button
          variant="contained"
          sx={{ mr: "30px", color: "colorWhite.main" }}
          color="greenDark"
        >
          Xác nhận
        </Button>
        <Button variant="outlined" color="greenDark">
          Hủy
        </Button>
      </Box>
    </Box>
  );
};

const ListOrder = ({ title, listProduct }) => {
  return (
    <Box sx={{ width: "100%", mb: "20px" }}>
      <Typography sx={{ fontWeight: 600, mb: "8px" }}>{title}</Typography>
      {listProduct.map((item) => (
        <Grid
          container
          spacing={0}
          justifyContent="center"
          alignItems="center"
          sx={{
            color: "primary.main",
          }}
        >
          <Grid item md={8}>
            <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
              {item.name} ({item.size})
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
              {item.quantity}
            </Typography>
          </Grid>
          <Grid item md={1}>
            <IconButton aria-label="delete" size="small">
              <VisibilityIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default ItemOrderDetail;
