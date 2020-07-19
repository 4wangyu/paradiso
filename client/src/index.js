import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';

import App from './containers/App';
import './static/sass/style.scss';

const app = <App />;

ReactDOM.render(app, document.getElementById('app'));
