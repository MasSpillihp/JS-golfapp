import React, { Fragment } from "react";

import Flag from "../flags/Flag";
import Par18Summary from "./Par18Summary";

function Par18(props) {
  return (
    <Fragment>
      <Par18Summary />
      <Flag />
    </Fragment>
  );
}

export default Par18;
