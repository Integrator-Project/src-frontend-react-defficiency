import React from 'react';
import { Chart, registerables } from 'chart.js';

import Layout from './components/Layout';

import GlobalStyles from './styles/GlobalStyles';

Chart.register(...registerables);

function App() {
  return (
    <>
      <Layout/>

      <GlobalStyles />
    </>
  );
}

export default App;
