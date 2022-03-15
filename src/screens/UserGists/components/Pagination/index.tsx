import { Row, Col, Button } from "react-bootstrap";
import { maxGistsPerPage } from "../../constants";
import "./index.scss";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  onChange: Function;
}

const Pagination = (props: PaginationProps) => {
  return (
    <Row className="pagination-container m-0 justify-content-center">
      <Col className="col-auto pe-0">
        <Button
          disabled={props.currentPage === 1}
          onClick={() => props.onChange(props.currentPage - 1)}
        >
          Newer
        </Button>
      </Col>
      <Col className="col-auto ps-0">
        <Button
          disabled={props.totalItems < maxGistsPerPage}
          onClick={() => props.onChange(props.currentPage + 1)}
        >
          Older
        </Button>
      </Col>
    </Row>
  );
};

export default Pagination;
