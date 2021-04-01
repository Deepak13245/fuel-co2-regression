import React, { useEffect, useState } from 'react';
import { setCallback } from 'services/loader';
import { Dialog, DialogContent } from '@material-ui/core';
import styles from './Loader.module.css';

function Loader() {
  const [show, setShow] = useState(false);
  let timer = null;
  const callback = val => {
    if (val === true) {
      if (timer) {
        clearTimeout(timer);
      }
      setShow(true);
      timer = setTimeout(() => {
        setShow(false);
      }, 30 * 1000);
    } else {
      if (timer) {
        clearTimeout(timer);
      }
      setShow(false);
    }
  };

  useEffect(() => {
    setCallback(callback);
  }, [setShow]);

  if (!show) {
    return null;
  }

  return (
    <Dialog
      open={true}
      disableBackdropClick={true}
      disableEscapeKeyDown={true}
    >
      <DialogContent>
        <div className={styles.container}>
          <i className="fa fa-2x fa-spin fa-spinner" />
          <div>
            Please Wait
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Loader;
