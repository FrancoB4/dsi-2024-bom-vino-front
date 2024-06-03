import React, { useState } from 'react';
import './css/SelectorFecha.css';

const SelectorFecha = ({ isOpen, onClose, setFechaInicio, setFechaFin }) => {
  const [localFechaInicio, setLocalFechaInicio] = useState('');
  const [localFechaFin, setLocalFechaFin] = useState('');

  const handleSave = () => {
    setFechaInicio(localFechaInicio);
    setFechaFin(localFechaFin);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="selector-overlay">
      <div className="selector-content">
        <h2><i className="bi bi-calendar-event"></i> Seleccionar Fechas</h2>
        <hr />
        <form>
          <p>Fecha de Inicio</p>
          <input 
            placeholder='dd/mm/aaaa'
            value={localFechaInicio}
            onChange={(e) => setLocalFechaInicio(e.target.value)}
          />
          <p />
          <p>Fecha de Fin</p>
          <input 
            placeholder='dd/mm/aaaa'
            value={localFechaFin}
            onChange={(e) => setLocalFechaFin(e.target.value)}
          />
          <p />
        </form>
        <hr />
        <button onClick={handleSave}>Guardar</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default SelectorFecha;