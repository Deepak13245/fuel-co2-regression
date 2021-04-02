import React, { useState } from 'react';
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';
import { Form } from 'components/co2Prediction/Form';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styles from './CO2Prediction.module.css';
import { sampleCode } from './code';

export function CO2Prediction() {
  const [results, setResults] = useState([]);
  const [openCode, setOpenCode] = useState(false);

  const onResult = result => {
    setResults([result, ...results]);
  };
  return (
    <Container className={styles.container}>
      <div className={styles.topBar}>
        <Button
          variant="outlined"
          color="primary"
          target="_blank"
          href="https://github.com/Deepak13245/fuel-co2-regression"
        >
          <i className="fab fa-github fa-2x" />
          <span className={styles.github}>GitHub</span>
        </Button>
        <Button
          variant="outlined"
          color="primary"
          target="_blank"
          href="https://www.kaggle.com/debajyotipodder/co2-emission-by-vehicles"
        >
          <i className="fab fa-kaggle fa-2x" />
          <span className={styles.github}>Kaggle Dataset</span>
        </Button>
        <Button
          variant="outlined"
          color="primary"
          target="_blank"
          href="https://raw.githubusercontent.com/Deepak13245/fuel-co2-regression/master/models/model.m5"
        >
          <i className="fa fa-download fa-2x" />
          <span className={styles.github}>Download Model</span>
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setOpenCode(!openCode)}
        >
          <i className="fa fa-code fa-2x" />
          <span className={styles.github}>Sample Code</span>
        </Button>
      </div>
      <h1 className={styles.h1}>Predicting CO2 emission of vehicles</h1>
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
      <div className={styles.spacer}>&nbsp;</div>
      <p className={styles.disclaimer}>
        Disclaimer :-
        This is trained on a dataset which is only for educational purpose not intended to use in real world.
      </p>
      <Dialog open={openCode} maxWidth="md" fullWidth onClose={() => setOpenCode(!openCode)}>
        <DialogContent>
          <SyntaxHighlighter showLineNumbers language="python">
            {sampleCode}
          </SyntaxHighlighter>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            target="_blank"
            href="https://raw.githubusercontent.com/Deepak13245/fuel-co2-regression/master/models/model.m5"
          >
            <i className="fa fa-download fa-2x" />
            <span className={styles.github}>Download Model</span>
          </Button>
          <Button
            variant="contained"
            color="primary"
            target="_blank"
            href={`data:text/plain;charset=utf-8,${encodeURIComponent(sampleCode)}`}
            download="co2-prediction.py"
          >
            <i className="fa fa-code fa-2x" />
            <span className={styles.github}>Download Code</span>
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              navigator.clipboard.writeText(sampleCode);
            }}
          >
            <i className="fa fa-copy fa-2x" />
            <span className={styles.github}>Copy Code</span>
          </Button>
          <div className={styles.spacer}>&nbsp;</div>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => setOpenCode(!openCode)}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
