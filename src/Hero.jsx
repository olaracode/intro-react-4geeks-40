import React from "react";
import Card from "./Card";
const Hero = () => {
  return (
    <div className="container">
      <div className="my-2">
        <Card />
      </div>
      <div className="my-2">
        <Card />
      </div>
      <div className="my-2">
        <Card />
      </div>
    </div>
  );
};

export default Hero;
