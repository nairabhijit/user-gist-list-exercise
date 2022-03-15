import { Row, Col } from "react-bootstrap";
import { UserGistDetailsResponse, UserGistFiles } from "../../store/types";
import Badge from "../Badge";
import CreatedAt from "../CreatedAt";
import Forks from "../Forks";
import "./index.scss";

interface UserGistDetailsProps {
  details: UserGistDetailsResponse;
}

const getUniqueFileTypes = (files: UserGistFiles) => {
  const fileTypes = [];
  for (let file in files) {
    const language = files[file].language;
    if (fileTypes.indexOf(language) === -1) {
      // add in fileTypes if not exist
      if (language) {
        // language can be null as well
        fileTypes.push(language);
      }
    }
  }
  return fileTypes;
};

const UserGistDetails = (props: UserGistDetailsProps) => {
  const fileTypes = getUniqueFileTypes(props.details.files);

  return (
    <Row className="user-gist-details">
      <Col>
        <Row>
          <Col>
            <a
              href="https://gist.github.com/6ecfb513315f0090d0fd48e9d749476c"
              rel="noreferrer"
              target="_blank"
            >
              <strong className="text-break">
                {props.details.description
                  ? props.details.description
                  : props.details.html_url}
              </strong>
            </a>
          </Col>
        </Row>
        <CreatedAt prefixText="Created" dateStr={props.details.created_at} />
        <Row>
          {fileTypes.map((fileType) => {
            return (
              <Col key={fileType} className="col-auto">
                <Badge text={fileType} />
              </Col>
            );
          })}
        </Row>
        <Forks forksUrl={props.details.forks_url} />
      </Col>
    </Row>
  );
};

export default UserGistDetails;
