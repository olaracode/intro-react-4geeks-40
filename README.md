# Intro a react ⚛️

- [Documentacion oficial](https://es.reactjs.org/docs/getting-started.html)

- [Imports - Exports](#import---exports)

- [Jsx](#)

- [components](#)

- [create-react-app](#create-react-app)

## Intro

Porque react?

Comunidad -> La comunidad mas grande de los frameworks
<img src="./statistics.png" />

Poca curva de aprendizaje

## Import - Exports

> [ref -> 4geeks](https://4geeks.com/syllabus/caracas-pt-40/read/javascript-import)

### Default exports:

Cada archivo puede tener un solo **export por defecto(default)**

```js
// app.js
const myFunction = () => {
  console.log("hola");
};

export default myFunction;
```

Al importar un archivo usas el nombre de la funcion o archivo que importas, aunque puedes ponerle el nombre que necesites y no se usan llaves

```js
// index.js
import myFunction from "./app.js";
// Es lo mismo que
// import SomeFunction from "./app.js"

myFunction();
// Es lo mismo que
// SomeFunction();
```

### Exports nombrados:

Un archivo puede tener muchos exports nombrados

```js
export const myFunction = () => {
  console.log("hola");
};

export function anotherFunction() {
  console.log("chao");
}
```

Para usar el import nombrado tienes que entre llaves poner el nombre de la funcion que importas

```js
import { myFunction, anotherFunction } from "./app.js";

myFunction();
anotherFunction();
```

## Jsx (Html / xml + Javascript)

Como meter una variable en html usando javascript nativo

```html
<html>
  <head> </head>
  <body>
    <div>
      <h1 id="text"></h1>
    </div>
    <scripts src="app.js"></scripts>
  </body>
</html>
```

```js
const nombre = "Octavio";

let element = document.getElementById("text");
element.innerText(nombre);
```

Utilizando jsx

```jsx
const MyComponent = () => {
  let nombre = "octavio";
  return <h1>Hola {nombre}</h1>;
};
```

## Components

React es una librería diseñada orientada a componentes.

Los componentes deberían ser lo mas pequeños, reusables y con la menor cantidad de
responsabilidad posible

Una vista es un grupo de componentes que comprenden una url dentro de la pagina

- localhost:3000 -> Vista de inicio, landing
- localhost:3000/perfil

## Create react app

Create react app es el modo mas facil de comenzar a programar usando react

Con node.js instalado en tu computadora

```bash
npx create-react-app demoApp

# Luego de correr el comando anterior

cd demoApp && npm install
```

Si estas usando gitpod y no esta corriendo el servidor

```bash
npm install

# Y

npm run start
```
