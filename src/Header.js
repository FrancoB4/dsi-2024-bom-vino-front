import './css/Header.css';

function Header({isSelected, setIsSelected}) {
    return (
        <div className="Header">
            <i className="bi bi-person-circle"></i>
            <span onClick={()=>setIsSelected(4)} className='username'><u>username</u></span>
        </div>
    );
  }

export default Header;