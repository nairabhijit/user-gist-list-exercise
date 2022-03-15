import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../../shared/components/Loader";
import NoGists from "./components/NoGists";
import Pagination from "./components/Pagination";
import UserGistDetails from "./components/UserGistDetails";
import useUserGists from "./hooks/useUserGists";
import "./index.scss";
import { fetchUserGists } from "./store/dispatchers";
import { UserGistDetailsResponse } from "./store/types";

const UserGists = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useUserGists();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch the user gists
    if (params.username) {
      dispatch(fetchUserGists(params.username));
    }
  }, [dispatch, params]);

  useEffect(() => {
    if (state.success || state.failed) {
      // stop the loader
      setLoading(false);
    }
    if (state.inProgress) {
      setLoading(true);
    }
  }, [state]);

  const onPageChange = (pageNumber: number) => {
    if (params.username) {
      dispatch(fetchUserGists(params.username, pageNumber));
    }
  };

  const onGoBack = () => {
    navigate("/");
  };

  return loading ? (
    <Loader />
  ) : state.gists.length === 0 && params.username ? (
    <NoGists username={params.username} />
  ) : (
    <Row data-testid="user-gists" className="m-0 mt-2 user-gists justify-content-center">
      <Col lg={10}>
        <Row className="m-0 justify-content-end">
          <Col className="col-auto">
            <Button
              className="user-gists--go-back-btn"
              variant="secondary"
              onClick={onGoBack}
            >
              Go Back
            </Button>
          </Col>
        </Row>
        <Row className="user-gists--list mt-2 me-3 ms-3 mb-3">
          <Col>
            {state.gists.map((gist: UserGistDetailsResponse) => {
              return <UserGistDetails key={gist.id} details={gist} />;
            })}
          </Col>
        </Row>
        <Pagination
          currentPage={state.currentPage}
          totalItems={state.gists.length}
          onChange={onPageChange}
        />
      </Col>
    </Row>
  );
};

export default UserGists;
