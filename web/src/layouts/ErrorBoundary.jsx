import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';
import PropTypes from 'prop-types';
import {
  Dialog, DialogContent, DialogActions, Button
} from '@material-ui/core';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // eslint-disable-next-line no-unused-vars
  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error);
  }

  onClick = () => {
    document.location.reload();
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Dialog open={true} fullWidth>
          <DialogContent className="textCenter bold">
            Something went wrong.
          </DialogContent>
          <DialogActions>
            <Button
              color="secondary"
              variant="contained"
              fullWidth
              onClick={this.onClick}
            >
              Try again.
            </Button>
          </DialogActions>
        </Dialog>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ErrorBoundary;
