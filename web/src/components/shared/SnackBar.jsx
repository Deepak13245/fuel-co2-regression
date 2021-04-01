import React, { useEffect, useState } from 'react';
import { Alert } from '@material-ui/lab';
import { setCallbacks } from 'services/snackbar';
import styles from './SnackBar.module.css';

function SnackBar() {
  const [data, setData] = useState(null);

  let timer = null;

  function setMessage(msg, sev, timeout = 5000) {
    if (timer) {
      clearTimeout(timer);
    }

    setData({ severity: sev, message: msg });
    timer = setTimeout(() => {
      setData(null);
    }, timeout);
  }

  function clearMessage() {
    if (timer) {
      clearTimeout(timer);
    }
    setData(null);
  }

  useEffect(() => {
    setCallbacks(setMessage, clearMessage);
  }, [setData]);

  if (!data) {
    return null;
  }

  const { message, severity } = data;

  return (
    <div className={styles.root}>
      <Alert
        severity={severity}
        variant="filled"
        onClose={clearMessage}
        className={styles.center}
      >
        {message}
      </Alert>
    </div>
  );
}

export default SnackBar;
