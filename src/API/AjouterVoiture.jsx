// AjouterVoiture.js
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AjouterVoiture() {
    const [marque, setMarque] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');

    const navigate = useNavigate();

    const ajouter = () => {
        if (!marque || !model || !color) {
          alert('Tous les champs sont obligatoires');
          return;
        }
    
        axios.post('http://localhost:3000/initialVoiture', {
          marque: marque,
          model: model,
          color: color,
        })
          .then(() => {
            alert('Bien ajouté');
           
          });
          navigate("/ListeVoiture");
    };

    return (
        <div>
            <form>
                <div>
                    <label>Marque:</label>
                    <input type="text" value={marque} onChange={(e) => setMarque(e.target.value)} /><br />
                    <label>Modèle:</label>
                    <input type="text" value={model} onChange={(e) => setModel(e.target.value)} /><br />
                    <label>Couleur:</label>
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} /><br />
                    <button className="Ajou" onClick={() => ajouter()}>Ajouter</button>
                </div>
            </form>
        </div>
    );
}

export default AjouterVoiture;
