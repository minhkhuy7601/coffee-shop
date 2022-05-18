import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";

import imgCoffee from "../assets/img-coffee.png";

const ItemProduct = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "colorBeige.main",
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        height: "175px",
      }}
    >
      <Typography
        sx={{
          color: "greenMedium.main",
          fontSize: "1rem",
          fontWeight: "700",
          p: "7px 0",
          m: "0 20px",
          borderColor: "greenMedium.main",
          borderBottom: "1px solid",
        }}
      >
        Coffee Lorem ipsum dolor
      </Typography>
      <Box
        sx={{
          flex: 1,
          width: "100%",
          backgroundImage: `url(${imgCoffee})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
    </Card>
  );
};

export const ItemProductWithOption = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "colorBeige.main",
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        height: "175px",
      }}
    >
      <Typography
        sx={{
          color: "greenMedium.main",
          fontSize: "1rem",
          fontWeight: "700",
          p: "7px 0",
          m: "0 20px",
          borderColor: "greenMedium.main",
          borderBottom: "1px solid",
        }}
      >
        Coffee Lorem ipsum dolor
      </Typography>
      <Grid container sx={{ flexGrow: 1 }} spacing={1}>
        <Grid item md={7}>
          <Box
            sx={{
              height: "100%",
              backgroundImage: `url(${imgCoffee})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </Grid>
        <Grid
          item
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
            pr: "10px",
          }}
        >
          <Button
            variant="contained"
            color="colorWhite"
            size="small"
            sx={{
              boxShadow: 0,
              color: "greenMedium.main",
              borderRadius: "50px",
              border: "1px solid",
              borderColor: "greenMedium",
              mb: "5px",
            }}
          >
            Xem chi tiết
          </Button>
          <Button
            variant="contained"
            color="colorWhite"
            size="small"
            sx={{
              boxShadow: 0,
              color: "colorGreen1.main",
              borderRadius: "50px",
              border: "1px solid",
              borderColor: "colorGreen1.main",
              mb: "5px",
            }}
          >
            Chỉnh sửa
          </Button>
          <Button
            variant="contained"
            color="colorWhite"
            size="small"
            sx={{
              boxShadow: 0,
              color: "colorRed.main",
              borderRadius: "50px",
              border: "1px solid",
              borderColor: "colorRed.main",
              mb: "5px",
            }}
          >
            Xóa
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ItemProduct;
