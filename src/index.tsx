import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import '!style-loader!css-loader?modules=false!react-virtualized/styles.css';

import { createStore } from './stores/createStore';
import productsJson from '../products.json';
import { Catalog } from './components/Catalog';

const rootStore = createStore(productsJson);

const App = () => (
  <Provider store={rootStore}>
    <Catalog />
  </Provider>
);

const container = document.getElementById('container');
ReactDOM.render(<App />, container);
