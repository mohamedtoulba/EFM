import axios from "axios";
import { useEffect, useState } from "react";

function SelectionVoiture() {
    const [voiture, setVoiture] = useState([]);

    useEffect(() => {
        const idFromURL = Number(window.location.pathname.split("/")[2]);
        axios.get(`http://localhost:3000/initialVoiture/${idFromURL}`)
        .then((res) => setVoiture(res.data));
       
    }, []);


      return(
        <div>
               
                    {voiture && (
                        <ul>
                        <li>{voiture.id}</li>
                        <li>{voiture.marque}</li>
                        <li>{voiture.model}</li>
                        <li>{voiture.color}</li>
                        {/* <li>
                            <button type="button" onClick={() => supprimer(res.id)}>Supprimer</button>
                            <button type="button" onClick={() => Modifier(res.id)}>Modifier</button>
                            <button type="button" onClick={() => selection(res.id)}>Selection</button>
                        </li> */}
                    </ul>
                    )}
                
        </div>
    )
}
export default SelectionVoiture;