import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ModifierVoiture() {
  const [id, setId] = useState(null);
  const [marque, setMarque] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const idFromURL = Number(window.location.pathname.split("/")[2]);
    axios.get(`http://localhost:3000/initialVoiture/${idFromURL}`)
      .then((res) => {
        setId(res.data.id); // Ajout de cette ligne pour mettre à jour l'état id
        setMarque(res.data.marque);
        setModel(res.data.model);
        setColor(res.data.color);
      });
  }, []);

  const enregistrer = () => {
    axios.put(`http://localhost:3000/initialVoiture/${id}`, {
      marque: marque,
      model: model,
      color: color,
    })
      .then(() => {
        alert('Bien modifié');
      })
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
          <button type="button" onClick={enregistrer}>Enregistrer</button>
        </div>
      </form>
    </div>
  );
}

export default ModifierVoiture;
