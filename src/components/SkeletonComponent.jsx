import { Card, Skeleton } from "@mui/material";
import React from "react";

const SkeletonTable = () => {
  return (
    <>
      <Skeleton animation="wave" sx={{ width: "100%", height: "50px" }} />
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{ width: "100%", height: "400px" }}
      />
    </>
  );
};

const SkeletonCardDetail = () => {
  const arrTemp = [...Array(5).keys()];
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
      }}
    >
      {arrTemp.map((item) => (
        <Skeleton animation="wave" sx={{ width: "80%", height: "60px" }} />
      ))}
    </Card>
  );
};

export { SkeletonTable, SkeletonCardDetail };
