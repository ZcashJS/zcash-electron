import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { configureStore } from './store/configure-store';
import Routes from './routes';
import './styles/main.scss';

const store = configureStore();
const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Routes />
    </HashRouter>
  </Provider>
);

ReactDOM.render(
  (<App />),
  document.getElementById('app'),
);
