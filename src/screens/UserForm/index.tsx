import { Container, Row, Col } from "react-bootstrap";
import Form from "./components/Form";
import "./index.scss";

const Home = () => {
  return (
    <Container>
      <Row className="user-form justify-content-center align-items-center">
        <Col lg={4}>
          <h1 className="text-center">Get user gists</h1>
          <Form />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
