import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
          fontSize: "17px",
          letterSpacing: "-0.5px",
          padding: "7px 35px",
          textTransform: "unset",

        },
        disableElevation: {
          borderRadius: "7px",
          fontSize: "17px",
          letterSpacing: "-0.5px",
          padding: "7px 35px",
          textTransform: "unset",
        },
        outlined: {
          borderRadius: "7px",
          fontSize: "17px",
          letterSpacing: "-0.5px",
          padding: "5px 35px",
          textTransform: "unset",
        }
      }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          width: '40px',
          height: '40px',
          fontWeight: 'bold',
          '&$completed': {
            color: '#318940',
            zIndex: 111
          },
          '&$active': {
            color: '#473BF0',
            zIndex: 111
          },
        },
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: 'white',
          borderRadius: '10px',
          height: '48px'
        },
        multiline: {
          height: '100%',
        }
      }
    }

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
    fontFamily: '"DM Sans", sans-serif'
  },

});

export default theme;
