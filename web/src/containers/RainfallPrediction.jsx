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
import { Form } from 'components/rainfallPrediction/Form';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styles from './RainfallPrediction.module.css';
import { sampleCode } from './code';

export function RainfallPrediction() {
  const [results, setResults] = useState([]);
  const [openCode, setOpenCode] = useState(false);

  const onResult = result => {
    setResults([result, ...results]);
  };
  return (
    <Container className={styles.container}>
      {/* <div className={styles.topBar}> */}
      {/*  <Button */}
      {/*    variant="outlined" */}
      {/*    color="primary" */}
      {/*    target="_blank" */}
      {/*    href="https://github.com/Deepak13245/fuel-co2-regression" */}
      {/*  > */}
      {/*    <i className="fab fa-github fa-2x" /> */}
      {/*    <span className={styles.github}>GitHub</span> */}
      {/*  </Button> */}
      {/*  <Button */}
      {/*    variant="outlined" */}
      {/*    color="primary" */}
      {/*    target="_blank" */}
      {/*    href="https://www.kaggle.com/jsphyg/weather-dataset-rattle-package" */}
      {/*  > */}
      {/*    <i className="fab fa-kaggle fa-2x" /> */}
      {/*    <span className={styles.github}>Kaggle Dataset</span> */}
      {/*  </Button> */}
      {/*  <Button */}
      {/*    variant="outlined" */}
      {/*    color="primary" */}
      {/*    target="_blank" */}
      {/*    href="https://raw.githubusercontent.com/Deepak13245/fuel-co2-regression/master/models/model.m5" */}
      {/*  > */}
      {/*    <i className="fa fa-download fa-2x" /> */}
      {/*    <span className={styles.github}>Download Model</span> */}
      {/*  </Button> */}
      {/*  <Button */}
      {/*    variant="outlined" */}
      {/*    color="primary" */}
      {/*    onClick={() => setOpenCode(!openCode)} */}
      {/*  > */}
      {/*    <i className="fa fa-code fa-2x" /> */}
      {/*    <span className={styles.github}>Sample Code</span> */}
      {/*  </Button> */}
      {/* </div> */}
      <h1 className={styles.h1}>Predicting Rainfall Tomorrow in Australia</h1>
      <div className={styles.form}>
        <Form onResult={onResult} />
      </div>
      {results.length > 0 && (
        <TableContainer className={styles.table} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Location</TableCell>
                <TableCell>MinTemp</TableCell>
                <TableCell>MaxTemp</TableCell>
                <TableCell>Rainfall</TableCell>
                <TableCell>WindGustDir</TableCell>
                <TableCell>WindGustSpeed</TableCell>
                <TableCell>Humidity9am</TableCell>
                <TableCell>Humidity3pm</TableCell>
                <TableCell>Pressure9am</TableCell>
                <TableCell>Pressure3pm</TableCell>
                <TableCell>RainToday</TableCell>
                <TableCell>Month</TableCell>
                <TableCell>Prediction</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((result, index) => (
                <TableRow key={index}>
                  <TableCell>{result.Location}</TableCell>
                  <TableCell>{result.MinTemp}</TableCell>
                  <TableCell>{result.MaxTemp}</TableCell>
                  <TableCell>{result.Rainfall}</TableCell>
                  <TableCell>{result.WindGustDir}</TableCell>
                  <TableCell>{result.WindGustSpeed}</TableCell>
                  <TableCell>{result.Humidity9am}</TableCell>
                  <TableCell>{result.Humidity3pm}</TableCell>
                  <TableCell>{result.Pressure9am}</TableCell>
                  <TableCell>{result.Pressure3pm}</TableCell>
                  <TableCell>{result.RainToday}</TableCell>
                  <TableCell>{result.Month}</TableCell>
                  <TableCell>{result.result === 1 ? 'Yes' : 'No'}</TableCell>
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
