import React from "react";

// Componentes de funcion
// En react usamos CamelCase no camelCase
const RandomImg = ({ title, img, alt }) => {
  //Entre el inicio
  // const { title, img, alt } = props;
  // Y el final
  return (
    <div className="my-3">
      <h3>{title}</h3>
      <p>Soy el alt: {alt}</p>
      <img src={img} alt={alt} />
    </div>
  );
};

export default RandomImg;
