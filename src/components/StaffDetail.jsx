import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const StaffDetail = () => {
  const id = useSelector((state) => state.staff.idStaffSelected);
  const listStaff = useSelector((state) => state.staff.listStaff);
  const [infoStaff, setInfoStaff] = useState("");

  useEffect(() => {
    const getStaffDetail = () => {
      if (id && listStaff.length) {
        const info = listStaff.find((item) => item.idStaff === +id);
        setInfoStaff(info);
      }
    };
    getStaffDetail();
  }, [id, infoStaff]);

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
        label="Nhân viên"
        variant="outlined"
        sx={{ width: "80%", mt: "20px" }}
        size="small"
        value={infoStaff.staffName}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        sx={{ width: "80%", mt: "20px" }}
        size="small"
        value={infoStaff.email}
      />
      <TextField
        id="outlined-basic"
        label="Số điện thoại"
        variant="outlined"
        sx={{ width: "80%", mt: "20px" }}
        size="small"
        value={infoStaff.phoneNumber}
      />
      {/* <TextField
        id="outlined-basic"
        label="Chức vụ"
        variant="outlined"
        sx={{ width: "80%", mt: "20px" }}
        size="small"
      /> */}

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

export default StaffDetail;
