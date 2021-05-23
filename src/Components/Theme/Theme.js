import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectThemeMode } from "../../Redux/theme/theme.selector";
import { grey } from "@material-ui/core/colors";

const Theme = ({ children, themeMode }) => {
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${themeMode})`);

  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Poppins"].join(","),
    },
    palette: {
      type: prefersDarkMode ? "dark" : "light",
      action: { active: prefersDarkMode ? grey[50] : "#001833" },
      primary: {
        main: prefersDarkMode ? grey[50] : "#001833",
      },
      text: {
        primary: prefersDarkMode ? grey[50] : "#001833",
      },
      background: {
        paper: prefersDarkMode ? grey[900] : grey[50],
        default: prefersDarkMode ? grey[900] : grey[50],
      },
    },
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: prefersDarkMode ? "#333" : "#fff",
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const mapStateToProps = createStructuredSelector({
  themeMode: selectThemeMode,
});

export default connect(mapStateToProps)(Theme);
