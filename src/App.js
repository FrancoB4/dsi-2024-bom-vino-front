import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Nav from './Nav';
import Explorador from './Explorador';
import Ranking from './Ranking';
import SelectorFecha from './SelectorFecha';
import { useState } from 'react';


const RenderPag = ({index, openSelector, fechaInicio, fechaFin}) => {
  switch (index) {
      case 0: return <Explorador />;
      case 1: return <Nav />;
      case 2: return <Ranking openSelector={openSelector} fechaInicio={fechaInicio} fechaFin={fechaFin} />;
      case 3: return <Nav />;
      case 4: return <Nav />;
      default: return <Explorador />
    }
}

function App() {
  const [NavIsSelected, setNavIsSelected] = useState(0)
  const [isSelectorOpen, setSelectorOpen] = useState(false);
  const [fechaInicio, setFechaInicio] = useState('01/01/2000');
  const [fechaFin, setFechaFin] = useState('01/01/2024');

  const openSelector = () => {
    setSelectorOpen(true);
    document.body.classList.add('selector-open');
  };

  const closeSelector = () => {
    setSelectorOpen(false);
    document.body.classList.remove('selector-open'); 
  };

  return (
    <div className="App">
      <div className="App-body">
        <Nav isSelected={NavIsSelected} setIsSelected={setNavIsSelected} />

        <RenderPag index={NavIsSelected} openSelector={openSelector} closeSelector={closeSelector} isSelectorOpen={isSelectorOpen} fechaInicio={fechaInicio} fechaFin={fechaFin}  />

        <SelectorFecha isOpen={isSelectorOpen} onClose={closeSelector} setFechaInicio={setFechaInicio} setFechaFin={setFechaFin} />

      </div>
    </div>
  );
}

export default App;
