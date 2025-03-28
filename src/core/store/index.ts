import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import request from '@core/middleware/request';
import relations from '@core/middleware/relations';
import rootReducer from '../reducers';

export const configureStore = () => {
  let composeEnhancers = compose;
  if ((__DEV__ || (window as any).mode === 'DEV') && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }
  const config = composeEnhancers(applyMiddleware(thunk, relations, request));
  return createStore(rootReducer, config);
};
