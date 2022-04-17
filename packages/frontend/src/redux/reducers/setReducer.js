import { ActionType } from "../types";

export const initialState = {
  name: '',
  isBottom: false,
  toggleNav: false,
  LoggedIn: false,
  isLoading: false,

};
const setReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_BOTTOM:
      return { ...state, isBottom: !state.isBottom };
    case ActionType.LOGGED_IN:
      return { ...state, LoggedIn: true }
    case ActionType.LOG_OUT:
      return {...state,LoggedIn:false}
    case ActionType.SAVE_NAME:
      return {...state,name:action.payload}
    case ActionType.SET_LOADING:
      return {...state,isLoading: true}
    case ActionType.REMOVE_LOADING:
      return {...state,isLoading:false}
    default:
      return state;
  }
};

export default setReducer;
