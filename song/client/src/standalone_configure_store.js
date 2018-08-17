import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const configureStore = (mainReducer, initialState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    mainReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}

export default configureStore;