import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Container from 'Container';
import ErrorBoundary from 'layouts/ErrorBoundary';
import SnackBar from 'components/shared/SnackBar';
import Loader from 'components/shared/Loader';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <ErrorBoundary>
          <Container />
          <SnackBar />
          <Loader />
        </ErrorBoundary>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
