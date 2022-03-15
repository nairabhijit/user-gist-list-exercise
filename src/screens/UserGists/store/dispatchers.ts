import ActionTypes from "./actions";

export const fetchUserGists = (username: string, pageNumber?: number) => {
  return {
    type: ActionTypes.FETCH_USER_GISTS,
    payload: { username, pageNumber },
  };
};

export const fetchUserGistsSuccess = (payload: any) => {
  return {
    type: ActionTypes.FETCH_USER_GISTS_SUCCESS,
    payload,
  };
};

export const fetchUserGistsFailed = (error: any) => {
  return {
    type: ActionTypes.FETCH_USER_GISTS_FAILED,
    payload: { error },
  };
};
