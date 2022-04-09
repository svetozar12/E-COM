import { ActionType } from "../types";

export const initialState = {
  isBottom: false,
  toggleNav: false,
};
const setReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_BOTTOM:
      return { ...state, isBottom: !state.isBottom };
    default:
      return state;
  }
};

export default setReducer;
