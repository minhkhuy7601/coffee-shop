import { Button, ButtonGroup } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import React from "react";

const Pagination = () => {
  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined button group"
      sx={{ width: "100%", display: "flex" }}
    >
      <Button
        variant="contained"
        sx={{ width: "25%", color: "colorWhite.main" }}
        color="greenMedium"
      >
        <ArrowLeftIcon />
      </Button>
      <Button sx={{ flexGrow: 1 }}>1/10</Button>
      <Button
        variant="contained"
        sx={{ width: "25%", color: "colorWhite.main" }}
        color="greenMedium"
      >
        <ArrowRightIcon />
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
