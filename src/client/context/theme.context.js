import {createMuiTheme} from '@material-ui/core/styles';

const themeContext = createMuiTheme ({
  palette: {
    primary: {
      main: '#146A20'
    },
    secondary: {
      main: '#F09218'
    },
  },
  header: {
    height: '60px'
  },
});

export default themeContext;
