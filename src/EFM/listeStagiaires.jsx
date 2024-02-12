import { useState } from "react";

function ListStagiaires({listeT}) {

    const [stagiair, setStagiair] = useState(listeT);

    const supprimer = (nomSupp) =>{
        const suppStagiaire = stagiair.filter((res) => res.nom !== nomSupp);
        setStagiair(suppStagiaire);
    }

    return(
        <div>
            {stagiair.map((res) => (
                    <ul>
                        <li>Nom: {res.nom}</li>
                        <li>Prenom: {res.prenom}</li>
                        <li>Ville: {res.Ville}</li>
                        <li>Fil: {res.Fil}</li>
                        <li>Etaplisement: {res.etaplisement}</li>
                        <li>Photo: {res.photo}</li>
                        <li>
                            <button onClick={() => supprimer(res.nom)}>Supprimer</button>
                        </li>
                    </ul>
            ))}
        </div>
    )
}
export default ListStagiaires;