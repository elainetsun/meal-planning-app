import { createMuiTheme } from '@material-ui/core/styles';

//Info on palette here: https://material-ui.com/customization/palette

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h6: {
        fontSize: 16,
      },
    }
  },
  palette: {
    primary: {
      main: '#6457A6'
    },
    secondary: {
      main: '#214198'
    }
  }
});

export default theme;
