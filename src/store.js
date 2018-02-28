/**
 * This is where we create our Redux store (application state), link
 * reducers for handling new states, enable redux dev tools and then
 * apply middleware.
 * what is Thunk? Thunk allows you to write action creators that return a
 * function instead of an action.
 */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const logger = createLogger();

const middleware = applyMiddleware(logger, thunk);

const store = createStore(reducers, composeWithDevTools(middleware));

export default store;
