import React, { Fragment } from "react";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.h1}>Golf Practice App</h1>
      </header>
    </Fragment>
  );
}

export default Header;
