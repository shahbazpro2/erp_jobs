import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  overrides: {
    MuiButton: {
      disableElevation: {
        borderRadius: "7px",
        fontSize: "17px",
        letterSpacing: "-0.5px",
        padding: "7px 35px",
        textTransform: "unset",
      },
    },
  },
  palette: {
    primary: {
      main: "#473BF0",
    },
    secondary: {
      main: "#161C2D",
    },
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
  },
});

export default theme;
