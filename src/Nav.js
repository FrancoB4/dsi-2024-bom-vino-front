import './css/Nav.css';
import logo from './image/wine-svgrepo-com.svg'
import Header from './Header';

function Nav({isSelected, setIsSelected}) {
    return (
      <div className="Nav">
        <Header isSelected={isSelected} setIsSelected={setIsSelected} />
        <img src={logo} className='logo' alt='logo' />
        <h1>BONVINO</h1>
        <h2>Encuentra el vino correcto</h2>
        <hr className="line"></hr>
        <ul className="Nav-links">
            <li onClick={()=>setIsSelected(0)}>EXPLORAR &emsp; <i className="bi bi-compass-fill"></i></li>
            <li onClick={()=>setIsSelected(1)}>TUS FAVORITOS &emsp; <i className="bi bi-heart-fill"></i></li>
            <li onClick={()=>setIsSelected(2)}>GENERAR RANKING &emsp; <i className="bi bi-star-fill"></i></li>
            <li onClick={()=>setIsSelected(3)}>HAZTE PREMIUM &emsp; <i className="bi bi-check-circle-fill"></i></li>
        </ul>
      </div>
    );
  }
export default Nav;