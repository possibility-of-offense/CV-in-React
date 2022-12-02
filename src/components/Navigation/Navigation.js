import { NavLink } from "react-router-dom";
import classes from "./styles/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <h1>
        <NavLink to="/">First view</NavLink>
      </h1>
      <h1>
        <NavLink to="/second">Second view</NavLink>
      </h1>
    </nav>
  );
};

export default Navigation;
