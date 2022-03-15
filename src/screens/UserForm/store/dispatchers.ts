import ActionTypes from "./actions";

export const validateUsername = (username: string) => {
  return {
    type: ActionTypes.VALIDATE_USERNAME,
    payload: { username },
  };
};

export const validateUsernameSuccess = () => {
  return {
    type: ActionTypes.VALIDATE_USERNAME_SUCCESS,
    payload: {},
  };
};

export const validateUsernameFailed = (error: any) => {
  return {
    type: ActionTypes.VALIDATE_USERNAME_FAILED,
    payload: { error },
  };
};
