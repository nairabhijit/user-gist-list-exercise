import { getAxiosInstance } from "../../../helpers/axios";
import {
  validateUsernameSuccess,
  validateUsernameFailed,
} from "../store/dispatchers";
import { useReducer, useEffect } from "react";
import reducer, { initialState } from "../store/reducer";

const useValidateUsername = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.inProgress) {
      // api call
      getAxiosInstance()
        .get(`/users/${state.username}`)
        .then(() => dispatch(validateUsernameSuccess()))
        .catch((error) => dispatch(validateUsernameFailed(error)));
    }
    return () => {};
  }, [state.inProgress, state.username]);

  return { state, dispatch };
};

export default useValidateUsername;
