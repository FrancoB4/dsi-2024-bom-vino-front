import React from 'react';
import './css/vino.css';
import wine1 from './image/carnivor-wine.png'
import wine2 from './image/sutterhome-wine.png'

const Vino = ({ nombre, bodega, precio }) => {
  const imagenes = [wine1, wine2]
  return (
  <li> 
    
    <img className="imgVino" src={imagenes[Math.round(Math.random(1))]} alt={nombre} />
    <p><i className="bi bi-heart"></i></p>
    <h4><b>{nombre}</b></h4><p><b>{bodega}</b></p><p>${precio * 100}</p>
  </li>
  )
};

export default Vino;