import React from 'react';
import { Chart, registerables } from 'chart.js';

import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';

Chart.register(...registerables);

function App() {
  return (
    <>
      <Routes/>

      <GlobalStyles />
    </>
  );
}

export default App;
