import { maxGistsPerPage } from "./../constants";
import {
  fetchUserGistsSuccess,
  fetchUserGistsFailed,
} from "./../store/dispatchers";
import { getAxiosInstance } from "./../../../helpers/axios";
import { useEffect } from "react";
import { useReducer } from "react";
import reducer, { initialState } from "../store/reducer";

const useUserGists = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.inProgress) {
      // fetch the user gists
      getAxiosInstance()
        .get(
          `/users/${state.username}/gists?page=${state.currentPage}&per_page=${maxGistsPerPage}`
        )
        .then((result) => dispatch(fetchUserGistsSuccess(result.data)))
        .catch((err) => dispatch(fetchUserGistsFailed(err)));
    }
  }, [state.inProgress, state.username, state.currentPage]);

  return { state, dispatch };
};

export default useUserGists;
