import React from "react";

// el contexto tiene 2 partes:
// 1: un CONSUMIDOR
// 2: un PROVEEDOR
//
// Es conceptualmente un objeto al que vamos a querer ingresar desde cualquier parte de nuestra app (como el store de redux) (pero no necesariamente es un objeto, hay que verlo como un baúl donde guardamos cosas) 

// De pasarle un valor dentro de las llaves React.createContext({aqui}), sería el valor que toma el componente que quiere acceder al contexto, pero que en el archivo APP.js no se lo está encerrando en el provider del contexto. 

//Es decir, quiere acceder al contexto global pero nosotros no se lo estamos permitiendo, entonces toma el valor por defecto que le pasamos a la hora de crearlo.

//Se puede tener mas de un Context.

const Context = React.createContext({})

export default Context