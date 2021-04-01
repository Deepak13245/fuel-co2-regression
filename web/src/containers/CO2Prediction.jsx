import React, { useState } from 'react';
import {
  Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core';
import { Form } from 'components/co2Prediction/Form';
import styles from './CO2Prediction.module.css';

export function CO2Prediction() {
  const [results, setResults] = useState([]);

  const onResult = result => {
    setResults([result, ...results]);
  };
  return (
    <Container>
      <h1 className={styles.h1}>CO2 Prediction</h1>
      <div className={styles.form}>
        <Form onResult={onResult} />
      </div>
      {results.length > 0 && (
        <TableContainer className={styles.table} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Vehicle Class</TableCell>
                <TableCell>Fuel Type</TableCell>
                <TableCell>TransmissionMode</TableCell>
                <TableCell>Engine Size(L)</TableCell>
                <TableCell>Cylinders</TableCell>
                <TableCell>Gears</TableCell>
                <TableCell>Fuel Consumption City (L/100 km)</TableCell>
                <TableCell>Fuel Consumption Hwy (L/100 km)</TableCell>
                <TableCell>Prediction</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((result, index) => (
                <TableRow key={index}>
                  <TableCell>{result['Vehicle Class']}</TableCell>
                  <TableCell>{result['Fuel Type']}</TableCell>
                  <TableCell>{result.TransmissionMode}</TableCell>
                  <TableCell>{result['Engine Size(L)']}</TableCell>
                  <TableCell>{result.Cylinders}</TableCell>
                  <TableCell>{result.Gears}</TableCell>
                  <TableCell>{result['Fuel Consumption City (L/100 km)']}</TableCell>
                  <TableCell>{result['Fuel Consumption Hwy (L/100 km)']}</TableCell>
                  <TableCell>{result.result.toFixed(4)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}
