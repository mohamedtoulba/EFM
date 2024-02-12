import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SupprimerVoiture() {
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  // Supprimer une voiture:
  const supprimer = () => {
    const conf = window.confirm('Voulez-vous vraiment supprimer ?');
    if (conf) {
      axios.delete(`http://localhost:3000/initialVoiture/${id}`)
        .then(() => {
          alert('Bien supprimé');
        })
        navigate("/ListeVoiture");
    }
  };


  return (
    <div>
      <label>Supprimer voiture par id</label>{" "}
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />{" "}
      <button type="button" onClick={supprimer}>Supprimer</button>
    </div>
  );
}

export default SupprimerVoiture;
