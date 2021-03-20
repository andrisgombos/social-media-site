import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './components/store';
import { GlobalStyle } from './style/style'


ReactDOM.render(
    <Provider store={store}>
      <GlobalStyle />
        <App />
    </Provider>,
  document.getElementById('root')
);


