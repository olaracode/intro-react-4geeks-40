// Las importaciones tienen que ir al principio de los archivos
import React from "react";
import ReactDOM from "react-dom/client";
import AppContainer from "./views/AppContainer";

// Nuestro virtual DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Virtual dom render
root.render(<AppContainer />);
