import { Fragment } from "react";
import classes from "./FlagItem.module.css";

function FlagItem(props) {
  return (
    <Fragment>
      <section className={classes.flag}>
        <h3 className={classes["flag h3"]}>{props.description} Flag</h3>
        <p className={classes.difficulty}>{props.difficulty}</p>
        <form>
          <label htmlFor="score">Enter Score</label>
          <input
            type="number"
            id="score"
            name="score"
            min={1}
            step={1}
            defaultValue={1}
          ></input>
        </form>
      </section>
    </Fragment>
  );
}
export default FlagItem;
