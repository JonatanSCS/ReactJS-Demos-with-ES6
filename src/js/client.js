import React from "react";
import ReactDOM from "react-dom";

import Layout from "./Layout";

export default class Render extends React.Component {
  render() {
    return (
      <Layout />
    );
  }
}


let app = document.getElementById("app");

ReactDOM.render(<Render />, app);