import React from 'react';
import './css/vino.css';
import wine1 from './image/carnivor-wine.png'
import wine2 from './image/sutterhome-wine.png'
import wine3 from './image/7ELEVEN-BarefootMoscato.png'
import wine4 from './image/7ELEVEN-CupcakeRose.png'
import wine5 from './image/7ELEVEN-DarkHorseCab.png'
import wine6 from './image/7ELEVEN-ManageaTrois.png'
import wine7 from './image/7ELEVEN-ManageaTrois.png'

const Vino = ({ nombre, bodega, precio }) => {
  const imagenes = [wine1, wine2, wine3, wine4, wine5, wine6, wine7]
  return (
  <li> 
    
    <img className="imgVino" src={imagenes[Math.floor(Math.random() * (6)) + 0]} alt={nombre} />
    <p><i className="bi bi-heart"></i></p>
    <h4><b>{nombre}</b></h4><p><b>{bodega}</b></p><p>${precio * 100}</p>
  </li>
  )
};

export default Vino;