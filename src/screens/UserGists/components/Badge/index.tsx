import { Row, Col } from "react-bootstrap";
import "./index.scss";

interface LanguageColor {
  [key: string]: string;
}

const languageColor: LanguageColor = {
  JavaScript: "#F7DF1C",
  Go: "#00ACD8",
  Python: "#FEDD54",
  Java: "#EC8B00",
  Ruby: "#CC332D",
  PHP: "#4B568A",
  TypeScript: "#007ACC",
  "C++": "#00599C",
  C: "#249120",
  CSS: "#1471B6",
};

interface BadgeProps {
  text: string;
}

const Badge = (props: BadgeProps) => {
  const dotBgColor = languageColor[props.text];
  return (
    <Row className="badge-container align-items-center">
      <Col className="col-auto pe-0">
        <div
          className="badge-container--dot"
          style={{ backgroundColor: dotBgColor ? dotBgColor : "black" }}
        ></div>
      </Col>
      <Col className="col-auto pe-0 ps-1 badge-container--text">{props.text}</Col>
    </Row>
  );
};

export default Badge;
