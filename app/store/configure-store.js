// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';
import loggerMiddleware from './middleware/logger';

export const history = createHistory();
const router = routerMiddleware(history);

export default function configureStore(initialState: Object) {
  let middleware;
  let enhancer;

  if (
    process.env.NODE_ENV !== 'production' ||
    process.env.NODE_ENV !== 'staging'
  ) {
    middleware = applyMiddleware(thunk, router, loggerMiddleware);
    enhancer = compose(
      middleware,
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    );
  } else {
    middleware = applyMiddleware(thunk, router);
    enhancer = compose(middleware);
  }

  return createStore(rootReducer, initialState, enhancer);
}
