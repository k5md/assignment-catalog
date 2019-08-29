import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog } from './components/Catalog';
import { StoreProvider } from './stores/createStore';
import '!style-loader!css-loader?modules=false!react-virtualized/styles.css';

const App = () => (
  <StoreProvider>
    <Catalog />
  </StoreProvider>
);

const container = document.getElementById('container');
ReactDOM.render(<App />, container);
