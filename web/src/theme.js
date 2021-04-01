import { createMuiTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    fontFamily: 'Open Sans',
    htmlFontSize: 12,
    fontSize: 9
  }
});

export default theme;
