import React from 'react';
import './css/vino.css'

const Vino = ({ nombre, image, bodega, precio }) => {
  return (
  <li> 
    
    <img className="imgVino" src={image} alt={nombre} />
    <p><i className="bi bi-heart"></i></p>
    <h4><b>{nombre}</b></h4><p><b>{bodega}</b></p><p> {precio}</p>
  </li>
  )
};

export default Vino;