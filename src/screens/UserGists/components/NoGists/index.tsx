import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./index.scss";

interface NoGistsProps {
  username: string;
}
const NoGists = (props: NoGistsProps) => {
  const navigate = useNavigate();

  const onClickGoBack = () => {
    navigate("/");
  };

  return (
    <Row data-testid="no-gists-found" className="no-gists-found justify-content-center align-items-center">
      <Col className="col-auto">
        <Row>
          <Col>
            <h1 className="text-center">No Gists found for user '{props.username}'</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-auto">
            <Button onClick={onClickGoBack}>Go Back</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NoGists;
