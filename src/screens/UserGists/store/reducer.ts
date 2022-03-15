import ActionTypes from "./actions";
import { Action, ReducerState } from "./types";

export const initialState = {
  username: "",
  inProgress: false,
  success: false,
  failed: false,
  currentPage: 1,
  gists: [],
};

const reducer = (state: ReducerState, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_GISTS:
      return {
        ...state,
        username: action.payload.username,
        currentPage: action.payload.pageNumber
          ? action.payload.pageNumber
          : state.currentPage,
        inProgress: true,
        success: false,
        failed: false,
      };
    case ActionTypes.FETCH_USER_GISTS_SUCCESS:
      return {
        ...state,
        inProgress: false,
        success: true,
        gists: action.payload,
      };
    case ActionTypes.FETCH_USER_GISTS_FAILED:
      return { ...state, inProgress: false, failed: true };
    default:
      return state;
  }
};

export default reducer;
