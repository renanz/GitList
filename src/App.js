import React from "react";
import { render } from "react-dom";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Lista de proyectos de Github")
  );
};

render(React.createElement(App), document.getElementById("root"));
