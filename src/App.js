import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ListeVoiture from './API/ListeVoiture';
import AjouterVoiture from './API/AjouterVoiture';
import SupprimerVoiture from './API/Supprimer';
import ModifierVoiture from './API/ModifierVoiture';
import SelectionVoiture from './API/SelectionVoiture';
import RechercheVoiture from './API/RechercherVoiture';

function App() {
  return (
    <BrowserRouter>
    <div>

      <ul>
        <li>
          <Link to="/ListeVoiture">Liste Voiture</Link>
        </li>
        <li>
          <Link to="/AjouterVoiture" >Ajouter Voiture</Link>
        </li>
        <li>
          <Link to="/SupprimerVoiture">Supprimer Voiture</Link>
        </li>
        <li>
          <Link to="/ModifierVoiture">Modifier Voiture</Link>
        </li>
        <li>
          <Link to="/SelectionVoiture">Selection Voiture</Link>
        </li>
        <li>
          <Link to="/RechercheVoiture">Recherche Voiture</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/ListeVoiture" element={<ListeVoiture />} />
        <Route path="/AjouterVoiture" element={<AjouterVoiture />} />
        <Route path="/SupprimerVoiture" element={<SupprimerVoiture />} />
        <Route path="/ModifierVoiture/:id" element={<ModifierVoiture />} />
        <Route path="/SelectionVoiture/:id" element={<SelectionVoiture />} />
        <Route path="/RechercheVoiture" element={<RechercheVoiture />} />
      </Routes>
      


    </div>
    </BrowserRouter>
  );
}

export default App;
