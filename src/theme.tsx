import { createTheme } from "@material-ui/core/styles";
import red from '@material-ui/core/colors/red';

const theme = createTheme({
     palette: {
      primary: {
        main: "#6D42E8",
        contrastText: "#FFFFFF",
        dark: "#4c2ea2",
        light: "#8a67ec"

      },
      secondary: {
        main: "#fff",
        contrastText: "#262F36",
        light: "#ffffff",
        dark: "#b2b2b2"

      },
      error: {
        main: red.A400,
      },
      background: {
        default: "#fff",
      },
     },
     typography: {
      fontFamily: ["Open Sans, sans-serif"].join(','),
     }
  });

export default theme;
