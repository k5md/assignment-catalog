import * as React from 'react';
import ReactDOM from 'react-dom';
import { CatalogApp } from './containers/CatalogApp';
import '!style-loader!css-loader?modules=false!react-virtualized/styles.css';
import '!style-loader!css-loader?modules=false!antd/dist/antd.css';
// render react DOM
import { Provider } from 'mobx-react';
import { createStores } from './stores/createStore';

const rootStore = createStores();

export const App = () => (
  <Provider {...rootStore}>
    <CatalogApp />
  </Provider>
);

const container = document.getElementById('container');

const mount = () => {
  ReactDOM.render(<App />, container);
};

mount();