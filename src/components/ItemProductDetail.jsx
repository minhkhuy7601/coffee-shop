import {
  Box,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import React from "react";

import imgCoffee from "../assets/img-coffee.png";

const ItemProductDetail = () => {
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
          fontSize: "20px",
          fontWeight: 700,
          borderColor: "greenMedium",
          borderBottom: "1px solid ",
          width: "90%",
          p: "5px 0 ",
        }}
      >
        Bạc xỉu
      </Typography>
      <ButtonGroup
        variant="text"
        aria-label="text button group"
        sx={{ m: "10px 0" }}
      >
        <Button variant="contained" color="green">
          M
        </Button>
        <Button>L</Button>
        <Button>XL</Button>
      </ButtonGroup>

      <Box
        sx={{
          width: "200px",
          height: "200px",
          backgroundImage: `url(${imgCoffee})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <Typography
        sx={{ color: "primary.main", fontSize: "15px", fontWeight: "500" }}
      >
        Giá: 30.000 VNĐ
      </Typography>

      <Typography
        sx={{
          fontSize: ".9rem",
          fontWeight: "600",
          color: "primary.main",
          width: "80%",
        }}
      >
        Công thức
      </Typography>

      <List
        sx={{
          width: "80%",
          maxHeight: "180px",
          overflowY: "scroll",
        }}
        dense={true}
      >
        <ListItem>
          <ArrowCircleRightIcon fontSize="small" sx={{ mr: "10px" }} />
          <ListItemText primary="Inbox" secondary="lorem as asd " />
        </ListItem>
        <ListItem>
          <ArrowCircleRightIcon fontSize="small" sx={{ mr: "10px" }} />
          <ListItemText primary="Inbox" secondary="lorem as asd " />
        </ListItem>
        <ListItem>
          <ArrowCircleRightIcon fontSize="small" sx={{ mr: "10px" }} />
          <ListItemText primary="Inbox" secondary="lorem as asd " />
        </ListItem>
        <ListItem>
          <ArrowCircleRightIcon fontSize="small" sx={{ mr: "10px" }} />
          <ListItemText primary="Inbox" secondary="lorem as asd " />
        </ListItem>
      </List>
    </Box>
  );
};

export default ItemProductDetail;
