import { useState } from "react";

function RechercheStagiaire({listeT}) {
    const [nom, setNom] = useState("");
    const [result, setResult] = useState([]);


    const recherche = () =>{
        const str = nom.toLowerCase();
        const rechercheResult = listeT.filter((res) => res.nom.toLowerCase().includes(str));
        setResult(rechercheResult);
        setNom("");
    }

    return(
        <div>
            <label>Recherche par nom </label>
            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
            <button onClick={recherche} >Recherche</button>

            <div>
                {result.map((res) => (
                    <ul>
                       <li>Nom: {res.nom}</li>
                        <li>Prenom: {res.prenom}</li>
                        <li>Ville: {res.Ville}</li>
                        <li>Fil: {res.Fil}</li>
                        <li>Etaplisement: {res.etaplisement}</li>
                        <li>Photo: {res.photo}</li>
                    </ul>
                ))}
            </div>
        </div>
    )
}
export default RechercheStagiaire;