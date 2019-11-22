import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from 'redux-logger';

const logger = createLogger();
const middleware = [logger, thunkMiddleware];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;