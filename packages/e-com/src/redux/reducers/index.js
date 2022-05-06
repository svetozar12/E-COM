import { combineReducers } from "redux";
import setReducer from "./setReducer";
const rootReducer = combineReducers({
  setReducer,
});

const combReducers = (state, action) => {
  return rootReducer(state, action);
};

export default combReducers;
