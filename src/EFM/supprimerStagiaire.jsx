import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SupprimerStagiaire({listeT, setListeT}) {
    const [nom, setNom] = useState("");
    const navigate = useNavigate();

    const supprimer = () =>{
        const suppStagiaire = listeT.filter((res) => res.nom !== nom);
        setListeT(suppStagiaire);

        navigate("/ListStagiaires");
        
    }

    return(
        <div>
            <label>Supprimer stagiaire par nom </label>
            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
            <button onClick={supprimer} >Supprimer</button>
        </div>
    )
    
}
export default SupprimerStagiaire;