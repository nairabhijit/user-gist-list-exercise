import ActionTypes from "./actions";

export interface UserGistFiles {
  [key: string]: {
    language: string;
  };
}

export interface UserGistDetailsResponse {
  id: string;
  html_url: string;
  description?: string;
  forks_url: string;
  created_at: string;
  files: UserGistFiles;
}

export interface ReducerState {
  username: string;
  inProgress: boolean;
  success: boolean;
  failed: boolean;
  currentPage: number;
  gists: Array<UserGistDetailsResponse>;
}
export interface Action {
  type: ActionTypes;
  payload: any;
}
