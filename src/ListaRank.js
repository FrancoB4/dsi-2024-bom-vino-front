import './css/Container.css';
import Vino from './Vino';
import wine1 from './image/carnivor-wine.png'
import wine2 from './image/sutterhome-wine.png'

const res = await fetch('http://localhost:8081/api/v1/models/vinos');
const vinos = await res.json();
// const vinos = [
//     {
//         nombre: "Cabernet",
//         image: wine1,
//         bodega: "Carnivor",
//         precio: "$10000",
//         rating: 3.8,
//     },
//     {
//         nombre: "White Zinfadel",
//         image: wine2,
//         bodega: "Sutter Home",
//         precio: "$40000",
//         rating: 4.5,
//     },
//     {
//         nombre: "Cabernet",
//         image: wine1,
//         bodega: "Carnivor",
//         precio: "$10000",
//         rating: 3.8,
//     },
//     {
//         nombre: "White Zinfadel",
//         image: wine2,
//         bodega: "Sutter Home",
//         precio: "$40000",
//         rating: 4.5,
//     },
//     {
//         nombre: "Cabernet",
//         image: wine1,
//         bodega: "Carnivor",
//         precio: "$10000",
//         rating: 3.8,
//     },
//     {
//         nombre: "White Zinfadel",
//         image: wine2,
//         bodega: "Sutter Home",
//         precio: "$40000",
//         rating: 4.5,
//     },
//     {
//         nombre: "Cabernet",
//         image: wine1,
//         bodega: "Carnivor",
//         precio: "$10000",
//         rating: 3.8,
//     },
//     {
//         nombre: "White Zinfadel",
//         image: wine2,
//         bodega: "Sutter Home",
//         precio: "$40000",
//         rating: 4.5,
//     },
// ]

function ListaRank() {
    return (
        <div className="Container" id="listaRank">
            <ul className='ListaVinos'>
                {vinos.map((vino, index) => (<Vino key={index} {...vino} />))}
            </ul>
        </div>
    );
  }

export default ListaRank;