import {useState, React} from 'react';
import './css/Vino.css';
import wine1 from './image/carnivor-wine.png'
import wine2 from './image/sutterhome-wine.png'
import wine3 from './image/7ELEVEN-BarefootMoscato.png'
import wine4 from './image/7ELEVEN-CupcakeRose.png'
import wine5 from './image/7ELEVEN-DarkHorseCab.png'
import wine6 from './image/7ELEVEN-ManageaTrois.png'
import wine7 from './image/7ELEVEN-ManageaTrois.png'

const Vino = ({ nombre, bodega, precio }) => {

const imagenes = [wine1, wine2, wine3, wine4, wine5, wine6, wine7]
const src = imagenes[Math.floor(Math.random() * (6)) + 0]

  const [letter, setLetter] = useState('bi bi-heart');
  const handleClick = () => {
      setLetter(letter === 'bi bi-heart' ? 'bi bi-heart-fill' : 'bi bi-heart');
  };

  return (

    <li className='Vino'> 
      <img className="imgVino" src={src} alt={nombre} />
      <p><i className={letter} onClick={handleClick}></i> <i className="bi bi-send"></i> <i class="bi bi-chat"></i></p>
      <h4><b>{nombre}</b></h4>
      <p><b>{bodega}</b></p>
      <p>${precio * 100}</p>
      
    </li>
  )
};

export default Vino;