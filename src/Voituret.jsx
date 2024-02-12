import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Tvoituret() {
  const [voiture, setVoiture] = useState([]);
  const [id, setId] = useState('');
  const [marque, setMarque] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');

  // Ajouter une voiture:
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
        // Recharger la liste des voitures pour refléter les changements
        // axios.get('http://localhost:3000/initialVoiture')
        //   .then((res) => setVoiture(res.data));
      });

    // Réinitialiser les champs après l'ajout
    setMarque('');
    setModel('');
    setColor('');
  };

  // Afficher les voitures:
  useEffect(() => {
    axios.get('http://localhost:3000/initialVoiture')
      .then((res) => setVoiture(res.data));
  }, []);

  // Supprimer une voiture:
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

  // Modifier une voiture:
  const modifier = (idM) => {
    axios.get(`http://localhost:3000/initialVoiture/${idM}`)
      .then((res) => {
        setMarque(res.data.marque);
        setModel(res.data.model);
        setColor(res.data.color);
        setId(res.data.id);
      });
  };

  // Enregistrer les modifications d'une voiture:
  const enregistrer = () => {
    axios.put(`http://localhost:3000/initialVoiture/${id}`, {
      marque: marque,
      model: model,
      color: color,
    })
      .then(() => {
        alert('Bien modifié');
        // Recharger la liste des voitures pour refléter les changements
        axios.get('http://localhost:3000/initialVoiture')
          .then((res) => setVoiture(res.data));
      });
  };
   
  return (
    <>
      <div>
        {/* Ajouter ici un champ de recherche si nécessaire */}
      </div>
      <h1>Liste des voitures à partir d'une API</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Marque</th>
            <th>Modèle</th>
            <th>Couleur</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {voiture.map((pos) => (
            <tr key={pos.id}>
              <td>{pos.id}</td>
              <td>{pos.marque}</td>
              <td>{pos.model}</td>
              <td>{pos.color}</td>
              <td>
                <button className="Supp" onClick={() => supprimer(pos.id)}>Supprimer</button>
                <button className="Mod" onClick={() => modifier(pos.id)}>Modifier</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <div>
        <h2>Saisir les informations d'une nouvelle voiture</h2>
      </div>
      <form>
        <div>
          <label>Marque:</label>
          <input type="text" value={marque} onChange={(e) => setMarque(e.target.value)} /><br />
          <label>Modèle:</label>
          <input type="text" value={model} onChange={(e) => setModel(e.target.value)} /><br />
          <label>Couleur:</label>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} /><br />
          <button className="Ajou" onClick={() => ajouter()}>Ajouter</button>
          <button className="Enre" onClick={() => enregistrer()}>Enregistrer</button>
        </div>
      </form>
    </>
  );
}

export default Tvoituret;
