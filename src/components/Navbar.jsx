import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ItemNavBar from "./ItemNavBar";

import { useSelector } from "react-redux";

const listItemNavBar = [
  {
    power: "",
    right: "",
    name: "Đơn hàng",
    path: "/orderManagement",
  },
  {
    power: "",
    right: "",
    name: "Tra cứu công thức",
    path: "/recipe",
  },
  {
    power: "",
    right: "",
    name: "Ghi nhận đơn hàng",
    path: "/orderProduct",
  },
  {
    power: "",
    right: "",
    name: "Quản lý sản phẩm",
    path: "/productManagement",
  },
  {
    power: "",
    right: "",
    name: "Quản lý khách hàng",
    path: "/customerManagement",
  },
  {
    power: "",
    right: "",
    name: "Quản lý nhân viên",
    path: "/staffManagement",
  },
  {
    power: "",
    right: "",
    name: "Quản lý chức vụ",
    path: "/positionManagement",
  },
  {
    power: "",
    right: "",
    name: "Quản lý kho",
    path: "/storageManagement",
  },
  {
    power: "",
    right: "",
    name: "Thống kê",
    path: "/statisticalManagement",
  },
];

const Navbar = () => {
  const currenPathName = window.location.pathname;
  const [itemActive, setItemActive] = useState(0);

  useEffect(() => {
    const item = listItemNavBar.find((item) => item.path === currenPathName);
    setItemActive(item);
  }, [currenPathName]);
  return (
    <Box
      sx={{
        backgroundColor: "gray.main",
        display: "flex",
        minHeight: "90vh",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {listItemNavBar.map((item, index) => (
        <ItemNavBar
          key={index}
          name={item.name}
          active={item.path === itemActive?.path}
          path={item.path}
        />
      ))}
    </Box>
  );
};

export default Navbar;
