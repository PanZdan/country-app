import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <Provider store={store}>
      <div>
        <h1>Inicjalizacja projektu</h1>
        <DevTools/>
      </div>
    </Provider>,
    document.getElementById('root')
);