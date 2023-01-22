import React from 'react';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import './App.css';
import Cabecalho from './componentes/cabecalho/Cabecalho';
import SelecaoDeParticipantes from './paginas/selecao-de-participantes/SelecaoDeParticipantes';
import Sorteio from './paginas/sorteio/Sorteio';

function App() {
  return (
    <BrowserRouter> 
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Cabecalho/>}>
              <Route index element={<SelecaoDeParticipantes/>}/>
              <Route path="/sorteio" element={<Sorteio/>}/>
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
