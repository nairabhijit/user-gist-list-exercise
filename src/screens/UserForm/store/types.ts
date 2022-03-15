import ActionTypes from "./actions";

export interface ReducerState {
  username: string;
  inProgress: boolean;
  success: boolean;
  failed: boolean;
}
export interface Action {
  type: ActionTypes;
  payload: any;
}