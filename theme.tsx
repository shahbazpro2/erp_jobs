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
    MuiStep: {
      horizontal: {
        alternativeLabel: {
          line: {
            borderStyle: 'dashed',
            borderWidth: '3px'
          }
        }
      }
    },
    MuiStepIcon: {
      root: {
        width: '40px',
        height: '40px',
        '&$completed': {
          color: '#318940',
          zIndex: 111
        },
        '&$active': {
          color: '#473BF0',
          zIndex: 111
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: '10px',
        height: '48px'
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
