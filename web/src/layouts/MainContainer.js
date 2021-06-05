import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CO2Prediction } from 'containers/CO2Prediction';
import { RainfallPrediction } from 'containers/RainfallPrediction';
import styles from './MainContainer.module.css';

function MainContainer() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.root}>
        <Switch>
          <Route path="/" exact>
            <CO2Prediction />
          </Route>
          <Route path="/rainfall" exact>
            <RainfallPrediction />
          </Route>
        </Switch>
      </div>
    </Suspense>
  );
}

export default MainContainer;
