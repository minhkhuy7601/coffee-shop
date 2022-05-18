import { Button, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import CancelIcon from "@mui/icons-material/Cancel";

const listOrderCoffee = {
  title: "Coffee",
  listProduct: [
    {
      name: "Bạc xỉu",
      size: "L",
      quantity: 2,
      price: 18000,
    },
    {
      name: "Bạc xỉu",
      size: "L",
      quantity: 12,
      price: 20000,
    },
  ],
};

const ItemOrderProductDetail = () => {
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
      <Typography
        sx={{
          textTransform: "uppercase",
          fontWeight: 600,
          letterSpacing: "2px",
          m: "10px 0",
        }}
      >
        lowland coffee
      </Typography>
      <Box
        sx={{
          width: "90%",
          maxHeight: "400px",
          overflowY: "scroll",
          overflowX: "hidden",

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
        <ListOrder
          title={listOrderCoffee.title}
          listProduct={listOrderCoffee.listProduct}
        />
        <ListOrder
          title={listOrderCoffee.title}
          listProduct={listOrderCoffee.listProduct}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          m: "10px 0",
          width: "90%",
          justifyContent: "flex-start",
        }}
      >
        <Typography color="primary" sx={{ fontWeight: "600", mr: "20px" }}>
          Tổng tiền:
        </Typography>
        <Typography color="primary" sx={{ fontWeight: "600" }}>
          72.000đ
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="greenDark"
        sx={{ color: "colorWhite.main" }}
      >
        Xác nhận
      </Button>
    </Box>
  );
};

const ListOrder = ({ title, listProduct }) => {
  return (
    <Box sx={{ width: "100%", mb: "20px" }}>
      <Typography sx={{ fontWeight: 600, mb: "8px" }}>{title}</Typography>
      {listProduct.map((item) => (
        <Grid container spacing={1} alignItems="center" sx={{ width: "100%" }}>
          <Grid item md={5}>
            <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
              {item.name} ({item.size})
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Box sx={{ display: "flex" }}>
              <Button
                variant="contained"
                color="green"
                sx={{ minWidth: "20px", height: "20px", p: 0 }}
              >
                <ArrowLeftIcon />
              </Button>
              <Box
                sx={{
                  backgroundColor: "colorBeige.main",
                  width: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  m: "0 5px",
                }}
              >
                {item.quantity}
              </Box>
              <Button
                variant="contained"
                color="green"
                sx={{ minWidth: "20px", height: "20px", p: 0 }}
              >
                <ArrowRightIcon />
              </Button>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Typography sx={{ fontSize: "12px" }}>x {item.price}đ</Typography>
          </Grid>
          <Grid item md={1}>
            <IconButton size="small" color="colorRed">
              <CancelIcon />
            </IconButton>
          </Grid>
        </Grid>

        //     <Box
        //       sx={{ display: "flex", alignItems: "center", color: "primary.main" }}
        //     >
        //       <Typography sx={{ flexGrow: 1, fontSize: "14px", fontWeight: 400 }}>
        //         {item.name} ({item.size})
        //       </Typography>
        //       <Box sx={{ display: "flex" }}>
        //         <Button
        //           variant="contained"
        //           color="green"
        //           sx={{ minWidth: "20px", height: "20px", p: 0 }}
        //         >
        //           <ArrowLeftIcon />
        //         </Button>
        //         <Box
        //           sx={{
        //             backgroundColor: "colorBeige.main",
        //             width: "30px",
        //             display: "flex",
        //             justifyContent: "center",
        //             alignItems: "center",
        //             m: "0 5px",
        //           }}
        //         >
        //           {item.quantity}
        //         </Box>
        //         <Button
        //           variant="contained"
        //           color="green"
        //           sx={{ minWidth: "20px", height: "20px", p: 0 }}
        //         >
        //           <ArrowRightIcon />
        //         </Button>
        //       </Box>
        //       <Typography>x {item.price}đ</Typography>

        //   <IconButton size="small" color="colorRed">
        //     <CancelIcon />
        //   </IconButton>
        //     </Box>
      ))}
    </Box>
  );
};

export default ItemOrderProductDetail;
