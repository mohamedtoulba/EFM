import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ListeVoiture() {
    const [voiture, setVoiture] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/initialVoiture')
        .then((res) => setVoiture(res.data))
    }, []);

    const supprimer = (idSup) => {
        const conf = window.confirm('Voulez-vous vraiment supprimer ?');
        if (conf) {
          axios.delete(`http://localhost:3000/initialVoiture/${idSup}`)
            .then(() => {
              alert('Bien supprimé');
    
              axios.get('http://localhost:3000/initialVoiture')
              .then((res) => setVoiture(res.data));
            })
        }
      };
      

    const Modifier = (idMod) =>{
        navigate(`/ModifierVoiture/${idMod}`);
    }

    const selection = (idSel) =>{
        navigate(`/SelectionVoiture/${idSel}`);
    }
    return(
        <div>
                {voiture.map((res) =>(
                    <ul>
                        <li>{res.id}</li>
                        <li>{res.marque}</li>
                        <li>{res.model}</li>
                        <li>{res.color}</li>
                        <li>
                            <button type="button" onClick={() => supprimer(res.id)}>Supprimer</button>
                            <button type="button" onClick={() => Modifier(res.id)}>Modifier</button>
                            <button type="button" onClick={() => selection(res.id)}>Selection</button>
                        </li>
                    </ul>
                ))}
        </div>
    )
}
export default ListeVoiture;