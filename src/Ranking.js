import './css/Container.css';
import React, { useState } from 'react';
import ListaVinos from './ListaVinos';

function Ranking({ openSelector, fechaInicio, fechaFin }) {
    const [activeButton, setActiveButton] = useState('TODOS');
    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };

    return (
        <div className="Container">
            <div className="Container-header">
                <button id="btnSelectorFecha" onClick={openSelector}>Seleccionar Fecha</button>
                <p id="topmessage"><i className="bi bi-star-fill"></i> <b>Genera un Ranking</b> de nuestros vinos</p> 
            </div>

            <div className='btnGroup'>
                    {['TODOS', 'AMIGOS', 'SOMMELIERS'].map(buttonName => (
                        <button key={buttonName} className={activeButton === buttonName ? 'btnActive' : ''} onClick={() => handleButtonClick(buttonName)}>
                            {buttonName}
                        </button>
                    ))} 
            </div>

            <ListaVinos id={"listaRank"} />

            <button id="btnExportarExcel">
                <a id="btnExportarExcel" href={`http://localhost:8081/api/v1/ranking-de-vinos?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&resenaPremium=${activeButton === "SOMMELIERS"}&tipoVisualizacion=${"excel"}`}>
                    EXPORTAR
                </a>
            </button>

        </div>
  );
};
  
export default Ranking;