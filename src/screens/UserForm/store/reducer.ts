import ActionTypes from "./actions";
import { Action, ReducerState } from "./types";

export const initialState = {
  username: "",
  inProgress: false,
  success: false,
  failed: false,
};

const reducer = (state: ReducerState, action: Action) => {
  switch (action.type) {
    case ActionTypes.VALIDATE_USERNAME:
      return {
        ...state,
        inProgress: true,
        failed: false,
        success: false,
        username: action.payload.username,
      };
    case ActionTypes.VALIDATE_USERNAME_SUCCESS:
      return { ...state, inProgress: false, success: true };
    case ActionTypes.VALIDATE_USERNAME_FAILED:
      return { ...state, inProgress: false, failed: true };
    default:
      return state;
  }
};

export default reducer;
