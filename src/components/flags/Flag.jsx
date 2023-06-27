import React, { Fragment } from "react";
import classes from "./Flag.module.css";

import Card from "../UI/Card";
import FlagItem from "./flagItem/FlagItem";

import { Button } from "@mui/material";

const TEMP_FLAGS = [
  {
    id: "f1",
    description: "Front",
    difficulty: "Easy",
  },
  {
    id: "f2",
    description: "Right",
    difficulty: "Difficult",
  },
  {
    id: "f3",
    description: "Left",
    difficulty: "Medium",
  },
];

function Flag(props) {
  const flagList = TEMP_FLAGS.map((flag) => (
    <FlagItem
      key={flag.id}
      id={flag.id}
      description={flag.description}
      difficulty={flag.difficulty}
    />
  ));

  return (
    <Fragment>
      <section className={classes.flags}>
        <Card>{flagList}</Card>
      </section>
      <section className={classes.btncontainer}>
        <Button variant="contained">Save</Button>
      </section>
    </Fragment>
  );
}

export default Flag;
