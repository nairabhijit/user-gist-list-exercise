import { Row, Col } from "react-bootstrap";
import { formatDate } from "../../../../helpers/date";
import "./index.scss";

interface CreatedAtProps {
  dateStr: string;
  prefixText?: string;
}

const formatCreatedAt = (dateStr: string) => {
  const date = new Date(dateStr);
  const minutes = 1000 * 60;
  const hour = minutes * 60;
  const day = hour * 24;

  const timestamp = date.getTime();
  const currentTimestamp = new Date().getTime();
  const difference = currentTimestamp - timestamp;
  if (difference < minutes) {
    return "just now";
  } else if (difference < hour) {
    return `${Math.floor(difference / minutes)} minutes ago`;
  } else if (difference < day) {
    return `${Math.floor(difference / hour)} hours ago`;
  }
  const formatStr =
    date.getFullYear() === new Date().getFullYear() ? "MM dd" : "MM dd yyyy";
  return formatDate(date, formatStr);
};

const CreatedAt = (props: CreatedAtProps) => {
  const formattedText = formatCreatedAt(props.dateStr);
  return (
    <Row className="created-at">
      <Col>
        {props.prefixText ? `${props.prefixText} ` : ""}
        {formattedText}
      </Col>
    </Row>
  );
};

export default CreatedAt;
