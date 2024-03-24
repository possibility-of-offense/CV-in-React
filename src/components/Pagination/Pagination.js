import { useNavigate } from "react-router-dom";
import classes from "./styles/Pagination.module.css";

const Pagination = ({ num, position, routing, next = true }) => {
  const navigate = useNavigate();

  let finalPosition = position || "right";

  return (
    <div
      className={`${classes["pagination"]} ${
        classes[`pagination--${finalPosition}`]
      }`}
      onClick={() => navigate(routing)}
    >
      <h2>{num}</h2>
      <strong>{next ? "Next page" : "Previous page"}</strong>
    </div>
  );
};

export default Pagination;
