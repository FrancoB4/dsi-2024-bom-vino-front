/*import React, { useState } from 'react';
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
            placeholder='dd-mm-aaaa'
            value={localFechaInicio}
            onChange={(e) => setLocalFechaInicio(e.target.value)}
          />
          <p />
          <p>Fecha de Fin</p>
          <input 
            placeholder='dd-mm-aaaa'
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

export default SelectorFecha; */

import React, { useState } from 'react';
import './css/SelectorFecha.css';

const SelectorFecha = ({ isOpen, onClose, setFechaInicio, setFechaFin }) => {
  const [localFechaInicio, setLocalFechaInicio] = useState('');
  const [localFechaFin, setLocalFechaFin] = useState('');

  const isValidDate = (dateString) => {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    if (!dateString.match(regex)) return false;

    const [day, month, year] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);

    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
  };

  const handleSave = () => {
    if (!isValidDate(localFechaInicio) || !isValidDate(localFechaFin)) {
      alert('Por favor, ingrese fechas válidas en el formato dd-mm-aaaa.');
      return;
    }

    const [inicioDay, inicioMonth, inicioYear] = localFechaInicio.split('-').map(Number);
    const [finDay, finMonth, finYear] = localFechaFin.split('-').map(Number);

    const fechaInicio = new Date(inicioYear, inicioMonth - 1, inicioDay);
    const fechaFin = new Date(finYear, finMonth - 1, finDay);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ignorar la hora para la comparación

    if (fechaInicio > today || fechaFin > today) {
      alert('Las fechas no pueden ser mayores a la fecha actual.');
      return;
    }

    if (fechaInicio > fechaFin) {
      alert('La fecha de inicio debe ser menor o igual a la fecha de fin.');
      return;
    }

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
            placeholder='dd-mm-aaaa'
            value={localFechaInicio}
            onChange={(e) => setLocalFechaInicio(e.target.value)}
          />
          <p />
          <p>Fecha de Fin</p>
          <input 
            placeholder='dd-mm-aaaa'
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
