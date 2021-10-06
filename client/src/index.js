import React from 'react';
import ReactDOM from 'react-dom';
// in redux - 'provider' allows to use from anywhere. Need not be parent or child
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import './index.css';
import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
