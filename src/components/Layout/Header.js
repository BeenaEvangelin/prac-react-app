import { Fragment } from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>50</h1>
        <h2>
          COGNITIVE BIASES
          <span>TO BE AWARE OF SO YOU CAN BE THE BEST VERSION OF YOU</span>
        </h2>
      </header>
    </Fragment>
  );
};

export default Header;
