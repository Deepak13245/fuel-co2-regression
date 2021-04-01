import React from 'react';
import {
  Button, Grid, MenuItem
} from '@material-ui/core';
import { Field, Formik } from 'formik';
import { Select, TextField } from 'formik-material-ui';
import Api from 'api';
import PropTypes from 'prop-types';
import SnackBar from 'services/snackbar';
import {
  fuelType, getInitialValues, schema, transmissionMode, vehicleClass
} from './utils';
import styles from './Form.module.css';

export function Form({ onResult }) {
  const onSubmit = async (values, helpers) => {
    try {
      helpers.setSubmitting(true);
      const [result] = await Api.predictC02([values]);
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
            <Grid className={styles.margin} container spacing={4}>
              <Grid item xs={12} md={4}>
                <Field
                  name="Vehicle Class"
                  component={Select}
                  fullWidth
                  label="Vehicle Class"
                >
                  {vehicleClass.map(({ label, value }) => (
                    <MenuItem key={value} value={value}>{label}</MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  name="Fuel Type"
                  component={Select}
                  fullWidth
                  label="Fuel Type"
                >
                  {fuelType.map(({ label, value }) => (
                    <MenuItem key={value} value={value}>{label}</MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  name="TransmissionMode"
                  component={Select}
                  fullWidth
                  label="Transmission Mode"
                >
                  {transmissionMode.map(({ label, value }) => (
                    <MenuItem key={value} value={value}>{label}</MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={6} md={4}>
                <Field
                  name="Engine Size(L)"
                  component={TextField}
                  fullWidth
                  label="Engine Size(L)"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <Field
                  name="Cylinders"
                  component={TextField}
                  fullWidth
                  label="Cylinders"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <Field
                  name="Gears"
                  component={TextField}
                  fullWidth
                  label="Gears"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <Field
                  name="Fuel Consumption City (L/100 km)"
                  component={TextField}
                  fullWidth
                  label="Fuel Consumption City (L/100 km)"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <Field
                  name="Fuel Consumption Hwy (L/100 km)"
                  component={TextField}
                  fullWidth
                  label="Fuel Consumption Hwy (L/100 km)"
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
