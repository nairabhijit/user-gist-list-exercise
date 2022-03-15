import { Row, Col, Spinner } from "react-bootstrap";
import "./index.scss";

const Loader = () => {
  return (
    <Row className="loader">
      <Col className="col-auto">
        <Spinner animation="border" />;
      </Col>
    </Row>
  );
};

export default Loader;
