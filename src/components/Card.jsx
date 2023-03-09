import React from "react";

// props = Properties
// Props
const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.posicion}</h6>
        <p className="card-text">{props.description}</p>
        <p className="card-text">{props.age}</p>
      </div>
    </div>
  );
};

export default Card;
