import axios from "axios";
import { useState } from "react";

function RechercheVoiture() {
    const [marque, setMarque] = useState("");
    const [voiture, setVoiture] = useState([]);

    const recherche = () => {
        const str = marque.toLowerCase();
        axios.get(`http://localhost:3000/initialVoiture?marque=${str}`)
        .then((res) => setVoiture(res.data))
    }
    
    return (
        <div>
            <h1>Recherche Voiture</h1>
            <label>Recherche voiture par marque</label>
            <input type="text" value={marque} onChange={(e) => setMarque(e.target.value)} />
            <button type="button" onClick={recherche}>Recherche</button>

            {voiture.map((res) => (
                <ul key={res.id}>
                    <li>ID: {res.id}</li>
                    <li>Marque: {res.marque}</li>
                    <li>Modèle: {res.model}</li>
                    <li>Couleur: {res.color}</li>
                </ul>
            ))}
        </div>
    )
}

export default RechercheVoiture;
