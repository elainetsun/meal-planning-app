import { createMuiTheme } from '@material-ui/core/styles';

//Info on palette here: https://material-ui.com/customization/palette

const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        padding: 5
      }
    },
    MuiTypography: {
      h6: {
        fontSize: 18,
        fontWeight: 500
      },
    },
    MuiTableCell: {
      root:{
        padding: 0,
        '@media (min-width: 600px)': {
          padding:"8px 16px 8px 16px"
        }
      },
     
    },
    MuiToolbar: {
      regular:{
        minHeight: 45,
        '@media (min-width: 600px)': {
          minHeight: 45
        }
      },
      gutters: {
        paddingLeft: 0,
        '@media (min-width: 600px)': {
          paddingLeft: 0
        }
      }
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
