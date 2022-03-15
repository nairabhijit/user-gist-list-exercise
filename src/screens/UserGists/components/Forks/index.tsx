import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { getAxiosInstance } from "../../../../helpers/axios";
import CreatedAt from "../CreatedAt";
import { maxForksPerPage } from "./constants";
import "./index.scss";

interface ForksProps {
  forksUrl: string;
}

interface ForksResponse {
  id: string;
  html_url: string;
  created_at: string;
  owner: {
    avatar_url: string;
    login: string;
  };
}

const Forks = (props: ForksProps) => {
  const [forks, setForks] = useState([]);
  useEffect(() => {
    getAxiosInstance()
      .get(`${props.forksUrl}?per_page=${maxForksPerPage}`)
      .then((result) => setForks(result.data));
  }, [props.forksUrl]);

  return forks.length > 0 ? (
    <Row className="mb-2">
      <Col>
        Forks
        <div>
          {forks.map((fork: ForksResponse) => {
            return (
              <a key={fork.id} target="_blank" rel="noreferrer" href={fork.html_url}>
                <Row className="fork">
                  <Col className="fork--details">
                    <Row>
                      <Col className="col-auto pe-0 ps-0 fork--details--avatar">
                        <img alt="Test" src={fork.owner.avatar_url} />
                      </Col>
                      <Col className="col-auto ps-2 pe-2">
                        <strong>{fork.owner.login}</strong>
                      </Col>
                      <Col className="fork--details--days-ago d-flex align-items-center ps-0">
                        <CreatedAt
                          prefixText="Forked"
                          dateStr={fork.created_at}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </a>
            );
          })}
        </div>
      </Col>
    </Row>
  ) : null;
};

export default Forks;
