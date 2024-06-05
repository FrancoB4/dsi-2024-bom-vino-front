import './css/Container.css';
import Vino from './Vino';

const res = await fetch('http://localhost:8081/api/v1/models/vinos');
const vinos = await res.json();

function ListaVinos({id}) {
    return (
        <div className="Container" id={id}>
            <ul className='ListaVinos'>
                {vinos.map((vino, index) => (<Vino key={index} {...vino} />))}
            </ul>
        </div>
    );
  }

export default ListaVinos;