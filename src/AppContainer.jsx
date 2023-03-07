import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Footer from "./Footer";
// Para importar css se hace import seguido de la direccion del archivo
import "bootstrap/dist/css/bootstrap.css"; // Importar bootstrap
import "./app.css";

// Todo lo que le siga al return es lo que se va a ver en pantalla
function AppContainer() {
  // Componente funcional -> react
  return (
    // JSX
    // El div es el padre
    // Pico Parentesis <></>
    //
    <div>
      <NavBar />
      <Hero />
      <Footer />
    </div>
  );
}

export default AppContainer;
