import { Fragment } from "react";
import classes from "./FlagItem.module.css";

function FlagItem(props) {
  return (
    <Fragment>
      <section className={classes.flag}>
        <h3 className={classes["flag h3"]}>{props.description}</h3>
        <p className={classes.difficulty}>{props.difficulty}</p>
      </section>
    </Fragment>
  );
}
export default FlagItem;
