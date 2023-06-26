import React, { Fragment } from "react";

import Header from "./components/Layout/Header";
import Par18 from "./components/games/Par18";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Par18 />
      <Footer />
    </Fragment>
  );
}

export default App;
