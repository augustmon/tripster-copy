import { Link } from "react-router-dom";

export default function BackArrow(props) {
  return (
    <Link className="arrow" to={props.to}>
      <img
        src={require("./../../graphics/back_arrow_idle.png")}
        alt="back arrow"
        height="40"
        width="40"
      ></img>
    </Link>
  );
}
