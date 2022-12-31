import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import web3Reducer from "./web3/reducer";

const rootReducer = combineReducers({
     web3: web3Reducer
  });
  
const middleware = [thunk];

const composeEnhancers = applyMiddleware(...middleware);
const configureStore = () => {
    return createStore(rootReducer, composeEnhancers);
  };

  const store = configureStore();

export default store;