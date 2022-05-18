import { Box, Grid, IconButton, Skeleton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import CustomerDetail from "../components/CustomerDetail";
import Section from "../components/Section";
import StaffDetail from "../components/StaffDetail";
import TableData from "../components/TableData";
import {
  SkeletonCardDetail,
  SkeletonTable,
} from "../components/SkeletonComponent";

import SearchIcon from "@mui/icons-material/Search";

import staffApi from "../api/staffApi";
import { useDispatch, useSelector } from "react-redux";

const listBreadcrumbs = [{ name: "quản lý nhân viên", path: "" }];

const StaffManagement = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.login?.currentUser);
  const dataStaff = useSelector((state) => state.staff);
  const [staffDetail, setStaffDetail] = useState(null);

  const listDefineContent = [
    {
      title: "Tên nhân viên",
      key: "staffName",
    },
    {
      title: "Email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      key: "phoneNumber",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert("sdf");
  };

  useEffect(() => {
    if (currentUser) {
      staffApi.getListStaff(dispatch, currentUser.token);
    }
  }, []);
  useEffect(() => {
    if (dataStaff.listStaff) {
      const staff = dataStaff.listStaff.find(
        (item) => dataStaff.listStaff.idStaffSelected === item.idStaff
      );
      setStaffDetail(staff);
    }
  }, [dataStaff]);
  return (
    <Section>
      <BreadcrumbsComponent
        listData={listBreadcrumbs}
        buttonAdd={"Thêm nhân viên mới"}
      />
      <Grid container spacing={1} sx={{ mt: "10px" }}>
        <Grid item md={8}>
          <Box
            component="form"
            onSubmit={handleSearch}
            sx={{ position: "relative" }}
          >
            <TextField
              id="outlined-basic"
              label="Tìm kiếm..."
              fullWidth
              variant="outlined"
              size="small"
              sx={{ mb: 1 }}
            />
            <IconButton
              type="submit"
              size="small"
              sx={{
                position: "absolute",
                top: "50%",
                right: 4,
                transform: "translateY(-60%)",
                bgcolor: "colorWhite.main",
              }}
            >
              <SearchIcon />
            </IconButton>
          </Box>
          {dataStaff.isFetching ? (
            <SkeletonTable />
          ) : (
            <TableData
              listData={dataStaff.listStaff}
              idSelected={dataStaff.idStaffSelected}
              defineContent={listDefineContent}
              setIdSelector={staffApi.selectStaffRequest}
              typeData={"Staff"}
            />
          )}
        </Grid>
        <Grid item md={4}>
          {dataStaff.isFetching ? (
            <SkeletonCardDetail />
          ) : (
            <StaffDetail staffDetail={staffDetail} />
          )}
        </Grid>
      </Grid>
    </Section>
  );
};

export default StaffManagement;
