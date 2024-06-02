import './css/Container.css';
import React, { useState } from 'react';
import ListaRank from './ListaRank';

function Ranking() {
    const [activeButton, setActiveButton] = useState('TODOS');
    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };

    return (
        <div className="Container">
            <div className="Container-header">
                <p id="topmessage"><i className="bi bi-star-fill"></i> <b>Genera un Ranking</b> de nuestros vinos</p> 
            </div>
            <div className='btnGroup'>
                    {['TODOS', 'AMIGOS', 'SOMMELIERS'].map(buttonName => (
                        <button key={buttonName} className={activeButton === buttonName ? 'btnActive' : ''} onClick={() => handleButtonClick(buttonName)}>
                            {buttonName}
                        </button>
                    ))} 
            </div>
            <ListaRank />
            <button id="btnExportarExcel">EXPORTAR</button>
        </div>
  );
};
  
export default Ranking;