import { BrowserRouter as Router } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

const Main = lazy(() => import('layouts/MainContainer'));

function Container() {
  return (
    <Router>
      <Suspense fallback={<div>Loading ...</div>}>
        <Main />
      </Suspense>
    </Router>
  );
}

export default Container;
