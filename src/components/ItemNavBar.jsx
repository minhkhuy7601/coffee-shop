import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

let styles = {
  buttonStyle: {
    width: "100%",
    padding: "15px 0",
    margin: "5px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    textTransform: "uppercase",
  },
};

const ItemNavBar = ({ name, active, path }) => {
  return (
    <Link
      to={path}
      style={{
        textDecoration: "none",
        color: "#532E1C",
        width: "95%",
      }}
    >
      <Button
        variant="contained"
        color={active ? "greenDark" : "green"}
        style={styles.buttonStyle}
        sx={active ? { color: "#fff" } : { color: "primary.main" }}
      >
        {name}
      </Button>
    </Link>
  );
};

export default ItemNavBar;
