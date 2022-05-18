import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../api/authApi";

const styles = {
  typographyTitle: {
    textTransform: "uppercase",
    fontWeight: 750,
    fontSize: "1.2rem",
    letterSpacing: "2px",
  },

  iconButton: {
    position: "relative",
  },

  boxProper: {
    position: "absolute",
    width: "100px",
    height: "50px",
    top: "100%",
    right: 0,
    bgcolor: "colorWhite.main",
    border: "1px solid",
    borderColor: "colorGreen1.main",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99,
    borderRadius: 1,
    "&:before": {
      content: "''",
      position: "absolute",
      bgcolor: "colorWhite.main",
      width: "10px",
      height: "10px",
      top: 0,
      right: 20,
      border: "1px solid",
      borderBottom: "none",
      borderRight: "none",
      borderColor: "colorGreen1.main",
      transform: "rotate(45deg) translateY(-80%)",
    },
  },
};

const Header = ({ staffName }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openLogout, setOpenLogout] = useState(false);

  const handleOpenLogout = () => {
    setOpenLogout((prev) => !prev);
  };

  const handleLogout = () => {
    logoutUser(dispatch, navigate);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="second" elevation={0}>
        <Toolbar sx={{ height: "8vh" }}>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Typography
              variant="h6"
              component="div"
              style={styles.typographyTitle}
              color="seconde.light"
              sx={{ mr: "7px" }}
            >
              lowland
            </Typography>
            <Typography
              variant="h6"
              component="div"
              style={styles.typographyTitle}
              color="primary"
            >
              coffee
            </Typography>
          </Box>
          <Typography color="inherit">{staffName}</Typography>
          <IconButton sx={styles.iconButton} onClick={handleOpenLogout}>
            <AccountCircleIcon />
            {openLogout ? (
              <Box sx={styles.boxProper}>
                <Button variant="contained" size="small" onClick={handleLogout}>
                  Log out
                </Button>
              </Box>
            ) : (
              ""
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
