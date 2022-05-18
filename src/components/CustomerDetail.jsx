import { Box, Button, Card, Chip, TextField, Typography } from "@mui/material";
import React from "react";

const CustomerDetail = ({ customerDetail }) => {
  console.log(customerDetail);
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        border: "2px solid",
        borderColor: "greenDark.main",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          mt: "10px",
        }}
      >
        <Typography
          sx={{ textTransform: "uppercase", fontWeight: "bold", flexGrow: 1 }}
        >
          chi tiết thông tin
        </Typography>

        <Button variant="outlined" size="small" color="colorRed">
          Xóa
        </Button>
      </Box>
      <TextField
        id="outlined-basic"
        label="Khách hàng"
        variant="outlined"
        sx={{ width: "80%", mt: "20px" }}
        size="small"
        value={customerDetail?.customerName}
      />
      <TextField
        id="outlined-basic"
        label="Số điện thoại"
        variant="outlined"
        sx={{ width: "80%", mt: "20px" }}
        size="small"
        value={customerDetail?.phoneNumber}
      />
      <Box sx={{ display: "flex", width: "80%" }}>
        <Chip label="Số đơn hàng: 1" sx={{ mt: "20px", mr: "10px" }} />
        <Chip
          variant="outlined"
          label={`Điểm tích lũy: ${customerDetail?.point}`}
          sx={{ mt: "20px" }}
        />
      </Box>
      <Box sx={{ display: "flex", mt: "30px" }}>
        <Button variant="outlined" color="greenDark" sx={{ mr: "20px" }}>
          Xem chi tiết
        </Button>
        <Button variant="contained" color="green">
          Lưu thay đổi
        </Button>
      </Box>
    </Card>
  );
};

export default CustomerDetail;
