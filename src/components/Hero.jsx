import React from "react";
import Card from "./Card";
import RandomImg from "./RandomImg";
// Props es un modo de pasar informacion de padre -> hijo
export const Hero = () => {
  const user = {
    nombre: "Octavio",
    posicion: "Jr Dev",
    description:
      "Jr dev que le gusta react, trabaja en 4geeks y como freelancer",
  };
  return (
    <div className="container">
      <div className="my-2">
        <Card
          name={user.nombre}
          posicion={user.posicion}
          description={user.description}
          age={18}
        />
      </div>
      <div className="my-2">
        <Card
          name={"Jose"}
          posicion={"T.A@4geeks"}
          description={"Un crack en la programacion"}
        />
      </div>
      <div className="my-2">
        <Card
          name={"Jose"}
          posicion={"T.A@4geeks"}
          description={"Un crack en la programacion"}
        />
      </div>
      <div className="my-2">
        <Card
          name={"Jose"}
          posicion={"T.A@4geeks"}
          description={"Un crack en la programacion"}
        />
      </div>

      <div className="my-2">
        <Card name={"Juan"} posicion={"Todero"} description={"Hago de todo"} />
      </div>

      <hr className="py-5" />
      <RandomImg
        alt={"aleatoria"}
        img={"https://picsum.photos/300/300"}
        title={"Soy un titulo"}
      />
    </div>
  );
};
