import React from 'react';
import {
  Button, Grid
} from '@material-ui/core';
import { Field, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import Api from 'api';
import PropTypes from 'prop-types';
import SnackBar from 'services/snackbar';
import {
  getInitialValues, schema,
} from './utils';
import styles from './Form.module.css';

export function Form({ onResult }) {
  const onSubmit = async (values, helpers) => {
    try {
      helpers.setSubmitting(true);
      const [result] = await Api.predictRainfall([values]);
      onResult({ ...values, result });
    } catch (e) {
      SnackBar.showError(e);
    } finally {
      helpers.setSubmitting(false);
    }
    console.log(values);
  };

  return (
    <div>
      <Formik initialValues={getInitialValues()} validationSchema={schema} onSubmit={onSubmit}>
        {({ submitForm, isSubmitting }) => (
          <>
            <Grid container spacing={2}>
              <Grid item xs={6} md={3}>
                <Field
                  name="Location"
                  component={TextField}
                  fullWidth
                  label="Location"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <Field
                  name="MinTemp"
                  component={TextField}
                  fullWidth
                  label="MinTemp"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <Field
                  name="MaxTemp"
                  component={TextField}
                  fullWidth
                  label="MaxTemp"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <Field
                  name="Rainfall"
                  component={TextField}
                  fullWidth
                  label="Rainfall"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <Field
                  name="WindGustDir"
                  component={TextField}
                  fullWidth
                  label="WindGustDir"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <Field
                  name="WindGustSpeed"
                  component={TextField}
                  fullWidth
                  label="WindGustSpeed"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <Field
                  name="Humidity9am"
                  component={TextField}
                  fullWidth
                  label="Humidity9am"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <Field
                  name="Humidity3pm"
                  component={TextField}
                  fullWidth
                  label="Humidity3pm"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <Field
                  name="Pressure9am"
                  component={TextField}
                  fullWidth
                  label="Pressure9am"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <Field
                  name="Pressure3pm"
                  component={TextField}
                  fullWidth
                  label="Pressure3pm"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <Field
                  name="RainToday"
                  component={TextField}
                  fullWidth
                  label="RainToday"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <Field
                  name="Month"
                  component={TextField}
                  fullWidth
                  label="Month"
                  variant="outlined"
                  type="number"
                />
              </Grid>
            </Grid>
            <div className={styles.buttonContainer}>
              <Button
                disabled={isSubmitting}
                onClick={submitForm}
                className={styles.button}
                fullWidth
                variant="contained"
                color="primary"
              >
                Predict
              </Button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}

Form.propTypes = {
  onResult: PropTypes.func.isRequired,
};

Form.defaultProps = {};
