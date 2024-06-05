import './css/App.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Nav from './Nav';
import Favs from './Favs'
import Explorador from './Explorador';
import Ranking from './Ranking';
import SelectorFecha from './SelectorFecha';
import { useState } from 'react';

const RenderPag = ({i, openSelector, fechaI, fechaF}) => {
  switch (i) {
      case 0: return <Explorador />;
      case 1: return <Favs />;
      case 2: return <Ranking openSelector={openSelector} fechaInicio={fechaI} fechaFin={fechaF} />;
      case 3: return <Nav />;
      case 4: return <Nav />;
      default: return <Explorador />
    }
}

function App() {
  const [NavIsSelected, setNavIsSelected] = useState(0)
  const [isSelectorOpen, setSelectorOpen] = useState(false);
  const [fechaInicio, setFechaInicio] = useState('01-01-2000');
  const [fechaFin, setFechaFin] = useState('01-01-2025');

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

        < Nav 
          isSelected={NavIsSelected} 
          setIsSelected={setNavIsSelected} 
        />

        < RenderPag 
          i={NavIsSelected} 
          openSelector={openSelector} 
          fechaI={fechaInicio} 
          fechaF={fechaFin}
        />

        < SelectorFecha 
          isOpen={isSelectorOpen} 
          onClose={closeSelector} 
          setFechaInicio={setFechaInicio} 
          setFechaFin={setFechaFin} 
        />

      </div>
    </div>
  );
}

export default App;
