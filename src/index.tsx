import React from 'react';
import ReactDOM from 'react-dom';

import '!style-loader!css-loader?modules=false!react-virtualized/styles.css';
import App from './containers/App';

const container = document.getElementById('container');
ReactDOM.render(<App />, container);
