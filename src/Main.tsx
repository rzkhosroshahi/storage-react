import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const Main = () => (
  <div className="text-2xl">
    <h2>Storage ReactJs App</h2>
  </div>
);

export const MountStorage = (selector: string) => {
    ReactDOM.render(<Main />, document.getElementById(selector));
};

export default Main;