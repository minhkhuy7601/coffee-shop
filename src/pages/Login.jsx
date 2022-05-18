import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import React, { useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../api/authApi";

import ImageBG from "../assets/bg-coffee.jpg";

const styles = {
  paperContainer: {
    backgroundImage: `url(${ImageBG})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  boxLogin: {
    backgroundColor: "#fff",
    width: "35%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: "20px",
    borderRadius: "5px",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      width: "calc(100% - 10px)",
      height: "calc(100% - 10px)",
      top: "5px",
      left: "5px",
      border: "3px dashed",
      borderColor: "primary.main",
    },
  },

  typographyTitle: {
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: "1.6rem",
    letterSpacing: "4px",
  },

  textFieldLogin: {
    margin: "10px",
    width: "70%",
  },
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFetching = useSelector((state) => state.auth.login.isFetching);
  const messageFetching = useSelector((state) => state.auth.login.message);
  // console.log(messageFetching);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
    };
    loginUser(newUser, dispatch, navigate);
  };

  return (
    <Container maxWidth="xl" style={styles.paperContainer}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isFetching}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box component="form" sx={styles.boxLogin} onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            m: "20px 0 30px 0",
            borderBottom: "2px solid #BFCBA8",
          }}
        >
          <Typography
            component="h1"
            style={styles.typographyTitle}
            sx={{ color: "#0f0f0f", mr: "10px" }}
          >
            lowland
          </Typography>
          <Typography
            component="h1"
            style={styles.typographyTitle}
            sx={{ color: "#630000" }}
          >
            coffee
          </Typography>
        </Box>

        <TextField
          style={styles.textFieldLogin}
          label="Email"
          variant="outlined"
          fullWidth
          size="small"
          value={email}
          onChange={handleEmail}
        />
        <TextField
          style={styles.textFieldLogin}
          label="Password"
          variant="outlined"
          fullWidth
          size="small"
          type="password"
          value={password}
          onChange={handlePassword}
        />
        {messageFetching.length ? (
          <Typography sx={{ color: "colorRed.main", fontSize: 10 }}>
            {messageFetching}
          </Typography>
        ) : (
          ""
        )}
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          sx={{
            mt: "20px",
            mb: "10px",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          LOGIN
        </Button>
        <Link sx={{ fontSize: "1rem", fontStyle: "italic", cursor: "pointer" }}>
          Forgot password?
        </Link>
      </Box>
    </Container>
  );
};

export default Login;
