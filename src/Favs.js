import ListaVinos from './ListaVinos';
import './css/Container.css';

function Explorador() {
    return (
        <div className="Container">
            <div className="Container-header">
            
                <p id="topmessage"><i className="bi bi-heart-fill"></i> <b>Tus favoritos</b> para reencontrar</p>
                <form className='barBuscar'>
                    <input className='buscador' maxLength="22" placeholder='Buscar vino...'/>
                    <button type='submit' className='btnBuscar'> 
                        <i className="bi bi-search"></i>
                    </button>
                </form>  
            </div>
            <ListaVinos id={"listaVinos"} />
        </div>
    );
}
  
export default Explorador;