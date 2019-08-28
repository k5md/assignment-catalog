import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import '!style-loader!css-loader?modules=false!react-virtualized/styles.css';

import { createStore } from './stores/createStore';
import productsJson from '../products.json';
import { CatalogApp } from './containers/CatalogApp';

const rootStore = createStore(productsJson);

const App = () => (
  <Provider {...rootStore}>
    <CatalogApp />
  </Provider>
);

const container = document.getElementById('container');
ReactDOM.render(<App />, container);
