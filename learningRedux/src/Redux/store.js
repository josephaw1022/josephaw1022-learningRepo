import { createStore, combineReducers } from "redux";
import submittedValueReducer from "./Reducers/submittedValueReducer";
import onMyOwnReducer from "./Reducers/onMyOwnReducer";

const allReducers = combineReducers({
  submittedValue: submittedValueReducer,
  onMyOwnValue: onMyOwnReducer,
});

export const initalState = {
  submittedValue: "Hello World",
  onMyOwnValue: 0,
};

export const store = createStore(allReducers, initalState);
