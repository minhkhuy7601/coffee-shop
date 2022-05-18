import { Box, Typography, Card } from "@mui/material";
import React from "react";

const ItemOrder = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "colorBeige1.main",
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        height: "175px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "90%",
          justifyContent: "space-between",
          borderColor: "greenMedium.main",
          borderBottom: "1px solid",
          p: "7px 0",
          color: "greenMedium.main",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>Bàn 01</Typography>
        <Typography sx={{ fontSize: "11px" }}>01-01-2022 12:10 PM</Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          color: "primary",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontWeight: 500 }}>
          Mã đơn: 12 2 asfsd 1321 3
        </Typography>
        <Typography sx={{ fontWeight: 500 }}>Số lượng: 1</Typography>
        <Typography sx={{ fontWeight: 500 }}>Nhân viên: Del</Typography>
      </Box>
    </Card>
  );
};

export default ItemOrder;
