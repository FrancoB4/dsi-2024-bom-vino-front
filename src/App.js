import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Nav from './Nav';
import Explorador from './Explorador';
import Ranking from './Ranking';
import { useState } from 'react';

const RenderPag = ({index}) => {
  switch (index) {
      case 0: return <Explorador />;
      case 1: return <Nav />;
      case 2: return <Ranking />;
      case 3: return <Nav />;
      case 4: return <Nav />;
      default: return <Explorador />
    }
}

function App() {
  const [NavIsSelected, setNavIsSelected] = useState(0)
  return (
    <div className="App">
      <div className="App-body">
        <Nav isSelected={NavIsSelected} setIsSelected={setNavIsSelected} />
        <RenderPag index={NavIsSelected}  />
      </div>
    </div>
  );
}

export default App;
