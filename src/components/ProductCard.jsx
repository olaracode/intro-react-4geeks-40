import React from "react";

const ProductCard = ({ nombre, categoria, precio, promocion, imgId }) => {
  const getPercentage = (precio) => {
    return precio * 0.8;
  };

  return (
    <div className="card w-100">
      <div className="card-header d-flex justify-content-between align-items-center">
        <p className="p-0 m-0">{categoria}</p>
        <p className="p-0 m-0">
          {promocion === true ? "Estoy en promocion" : ""}
        </p>
      </div>
      <img src={`https://picsum.photos/id/${imgId}/200/300`} alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <div className="d-flex align-items-center gap-2">
          <p
            className={
              promocion === true
                ? "card-text text-decoration-line-through"
                : "card-text"
            }
          >
            ${precio}
          </p>
          {promocion === true ? (
            <p className={"card-text fs-5 text-success"}>
              ${getPercentage(precio)}
            </p>
          ) : null}
        </div>
        <button className="btn btn-success">Comprame</button>
      </div>
    </div>
  );
};

export default ProductCard;
