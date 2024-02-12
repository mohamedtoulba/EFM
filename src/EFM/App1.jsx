import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ListStagiaires from "./listeStagiaires";
import AjouterStagiaire from "./ajouterStagiaire";
import SupprimerStagiaire from "./supprimerStagiaire";
import RechercheStagiaire from "./rechrecheStagiaire";
const listStagiaires = [{nom:"CHAKIRI", prenom:"Laila", Ville:"Fes", Fil:"Web etfullstack", etaplisement: "FMOTICA",photo:"photo2.jpg"},
                        {nom:"OUAFI",prenom:"Aanss",Ville:"Tanger",Fil:"Webdésigner", etaplisement:"ADARISSA",photo:"photo1.jpg"},
                        {nom:"BADRAOUI",prenom:"ikram",Ville:"meknes",Fil:"DevMobile", etaplisement: "FMOTICA",photo:"photo4.jpg"},
                    ];

function App1() {
const [listeT, setListeT] = useState(listStagiaires);

return(
    <BrowserRouter>
    <div>
        <ul>
            <li>
                <Link to="/ListStagiaires" >Liste Stagiair</Link>
            </li>
            <li>
                <Link to="/AjouterStagiaire" >Ajouter Stagiaire</Link>
            </li>
            <li>
                <Link to="/SupprimerStagiaire" >Supprimer Stagiaire</Link>
            </li>
            <li>
                <Link to="/RechercheStagiaire" >Recherche Stagiaire</Link>
            </li>
        </ul>
        <Routes>
            <Route path="/ListStagiaires" element={<ListStagiaires listeT={listeT} />} />
            <Route path="/AjouterStagiaire" element={<AjouterStagiaire listeT={listeT} setListeT={setListeT}/>} />
            <Route path="/SupprimerStagiaire" element={<SupprimerStagiaire listeT={listeT} setListeT={setListeT}/>} />
            <Route path="/RechercheStagiaire" element={<RechercheStagiaire listeT={listeT} setListeT={setListeT}/>} />
        </Routes>
    </div>
    </BrowserRouter>
)

}
export default App1;