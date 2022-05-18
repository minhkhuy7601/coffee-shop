import { Button, ButtonGroup, Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import imgCoffee from "../assets/img-coffee.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const ItemOrderProduct = () => {
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
          p: "5px 0",
          m: "0 15px",
          borderColor: "greenMedium.main",
          borderBottom: "1px solid",
        }}
      >
        Cà phê sữa đá
      </Typography>
      <Grid container spacing={0} sx={{ flexGrow: 1 }}>
        <Grid
          item
          md={3}
          sx={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            p: "0 5px",
          }}
        >
          <ButtonGroup
            variant="text"
            orientation="vertical"
            aria-label="text button group"
          >
            <Button variant="contained" color="green" sx={{ boxShadow: 0 }}>
              M
            </Button>
            <Button>L</Button>
            <Button>XL</Button>
          </ButtonGroup>
        </Grid>
        <Grid item md={5} sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              flexGrow: 1,
              backgroundImage: `url(${imgCoffee})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
          <Typography
            sx={{
              textAlign: "center",
              color: "colorOrange.main",
              fontWeight: 700,
            }}
          >
            18.000đ
          </Typography>
        </Grid>

        <Grid item md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // border: "1px solid red",
              justifyContent: "space-around",
              height: "100%",
              p: "0 5px",
            }}
          >
            <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
              Số lượng
            </Typography>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Button
                color="green"
                variant="contained"
                sx={{ minWidth: "20px", height: "30px", p: 0 }}
              >
                <ArrowLeftIcon />
              </Button>
              <Box
                sx={{
                  backgroundColor: "white",
                  height: "30px",
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                12
              </Box>
              <Button
                color="green"
                variant="contained"
                sx={{ minWidth: "20px", height: "30px", p: 0 }}
              >
                <ArrowRightIcon />
              </Button>
            </Box>
            <Button
              variant="contained"
              color="colorWhite"
              sx={{ border: 2, borderColor: "green.main" }}
            >
              Thêm
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ItemOrderProduct;
