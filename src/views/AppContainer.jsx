import React from "react";
import NavBar from "../components/NavBar";
import { Hero } from "../components/Hero";
import { ProductList } from "../components/ProductsList";
import Footer from "../components/Footer";
// Para importar css se hace import seguido de la direccion del archivo
import "bootstrap/dist/css/bootstrap.css"; // Importar bootstrap
import "../app.css";

// Todo lo que le siga al return es lo que se va a ver en pantalla
function AppContainer() {
  // Componente funcional -> react
  return (
    // JSX
    // El div es el padre
    // Pico Parentesis <></>

    <div>
      <NavBar />
      {/* <Hero /> */}
      <ProductList />
      <Footer />
    </div>
  );
}

export default AppContainer;
