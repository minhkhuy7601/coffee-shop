import {
  createStyles,
  createTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#532E1C",
    },
    second: {
      main: "#DFD8B7",
      light: "#0F0F0F",
    },
    gray: {
      main: "#EFEEEE",
    },
    green: {
      main: "#BFCBA8",
    },
    greenDark: {
      main: "#56776C",
    },
    colorGreenOpacity: {
      main: "rgba(91,138,114,0.2)",
    },
    colorGreenOpacity1: {
      main: "rgba(91,138,114,0.8)",
    },
    colorYellow: {
      main: "#F7FF93",
    },
    greenMedium: {
      main: "#464F41",
    },

    colorGreen2: {
      main: "#DFEEEA",
    },
    colorBeige: {
      main: "#FFF2D9",
    },
    colorBeige1: {
      main: "#EEEBDD",
    },
    colorGreen1: {
      main: "#5B8A72",
    },
    colorWhite: {
      main: "#ffffff",
    },

    colorOrange: {
      main: "#EA8025",
    },
    colorRed: {
      main: "#D83737",
    },
    colorGray: {
      main: "#C4C4C4",
    },
    colorGray1: {
      main: "#E6E6E6",
    },
    colorBlue: {
      main: "#7DACE2",
    },
    colorBlue1: {
      main: "#5D8BF4",
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Layout />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
