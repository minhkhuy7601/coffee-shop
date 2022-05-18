import { Box } from "@mui/material";
import React from "react";

const Section = ({ children }) => {
  return (
    <Box
      sx={{
        p: "10px",
        height: "91vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};

export default Section;
