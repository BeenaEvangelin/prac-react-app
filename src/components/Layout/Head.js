import { Fragment } from "react";
import classes from "./Head.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.title}>
        <h1>50 COGNITIVE BIASES</h1>
        <p>TO BE AWARE OF SO YOU CAN BE THE BEST VERSION OF YOU</p>
      </header>
    </Fragment>
  );
};

export default Header;
