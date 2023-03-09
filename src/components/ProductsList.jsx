import React from "react";
import ProductCard from "./ProductCard";

// const array = ["hola", "como", "estas"] -> 0, 1, 2
const productList = [
  {
    nombre: "Televisor",
    id: 123321,
    categoria: "Electronica",
    precio: 130,
    promocion: true,
  },
  {
    nombre: "Telefono",
    categoria: "Telefonia",
    precio: 200,
    id: 1234,
    promocion: false,
  },
  {
    nombre: "Nevera",
    categoria: "Hogar",
    precio: 500,
    id: 123,
    promocion: true,
  },
  {
    nombre: "Monitor",
    categoria: "Computacion",
    precio: 180,
    id: 12,
    promocion: false,
  },
  {
    nombre: "Laptop",
    categoria: "Computacion",
    precio: 1200,
    id: 1,
    promocion: true,
  },
];

export const ProductList = () => {
  return (
    <>
      <h1>Hola soy una lista de productos</h1>
      <div className="container row gap-5">
        {productList.map((product, index) => {
          return (
            <div key={index} class="col-12 col-md-6 col-lg-4">
              <ProductCard
                nombre={product.nombre}
                precio={product.precio}
                imgId={index}
                categoria={product.categoria}
                promocion={product.promocion}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
