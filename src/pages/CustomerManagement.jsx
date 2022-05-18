import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import CustomerDetail from "../components/CustomerDetail";
import Section from "../components/Section";
import TableData from "../components/TableData";

import customerApi from "../api/customerApi";
import {
  SkeletonCardDetail,
  SkeletonTable,
} from "../components/SkeletonComponent";

const listBreadcrumbs = [{ name: "quản lý khách hàng", path: "/recipe" }];

const listDefineContent = [
  {
    title: "Tên khách hàng",
    key: "customerName",
  },
  {
    title: "Số điện thoại",
    key: "phoneNumber",
  },
  {
    title: "Điểm tích lũy",
    key: "point",
  },
];

const CustomerManagement = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.login?.currentUser);
  const dataCustomer = useSelector((state) => state.customer);
  const [customerDetail, setCustomerDetail] = useState(null);

  useEffect(() => {
    if (currentUser) {
      customerApi.getListCustomer(dispatch, currentUser.token);
    }
  }, []);

  useEffect(() => {
    if (dataCustomer.listCustomer) {
      const customer = dataCustomer.listCustomer.find(
        (item) => dataCustomer.idCustomerSelected === item.idCustomer
      );
      setCustomerDetail(customer);
    }
  }, [dataCustomer]);
  return (
    <Section>
      <BreadcrumbsComponent listData={listBreadcrumbs} />
      <Grid container spacing={1} sx={{ mt: "10px" }}>
        <Grid item md={8}>
          {dataCustomer.isFetching ? (
            <SkeletonTable />
          ) : (
            <TableData
              listData={dataCustomer.listCustomer}
              idSelected={dataCustomer.idCustomerSelected}
              defineContent={listDefineContent}
              setIdSelector={customerApi.selectCustomerRequest}
              typeData={"Customer"}
            />
          )}
        </Grid>
        <Grid item md={4}>
          {dataCustomer.isFetching ? (
            <SkeletonCardDetail />
          ) : (
            <CustomerDetail customerDetail={customerDetail} />
          )}
        </Grid>
      </Grid>
    </Section>
  );
};

export default CustomerManagement;
