import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SearchCategory = ({ listCategory }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {listCategory.map((category) => (
        <Button
          variant="contained"
          color="colorRed"
          sx={{ mr: "5px", color: "colorWhite.main" }}
        >
          {category}
        </Button>
      ))}

      <TextField
        label="Tìm kiếm..."
        variant="outlined"
        size="small"
        sx={{ flexGrow: 1 }}
      />
    </Box>
  );
};

export default SearchCategory;
