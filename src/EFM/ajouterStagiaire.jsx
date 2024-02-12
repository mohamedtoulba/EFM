import { useState } from "react";

function AjouterStagiaire({ listeT, setListeT }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [Ville, setVille] = useState("");
  const [Fil, setFil] = useState("");
  const [etaplisement, setEtaplisement] = useState("");
  const [photo, setPhoto] = useState("");

  const ajouter = () => {
    const newStagiaire = {
      nom,
      prenom,
      Ville,
      Fil,
      etaplisement,
      photo,
    };

    const resultStagiaire = [...listeT, newStagiaire];
    setListeT(resultStagiaire);

    setNom("");
    setPrenom("");
    setVille("");
    setFil("");
    setEtaplisement("");
    setPhoto("");
  };

  return (
    <div>
      <form>
        <label>Nom : </label>
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} /> <br />

        <label>Prenom : </label>
        <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} /> <br />

        <label>Fil : </label>
        <input type="text" value={Fil} onChange={(e) => setFil(e.target.value)} /> <br />

        <label>Ville : </label>
        <select value={Ville} onChange={(e) => setVille(e.target.value)}>
          <option value="">-- Sélectionner une ville --</option>
          <option value="ville1">Fes</option>
          <option value="ville2">Taza</option>
          {/* Add more options as needed */}
        </select>
        <br />
        <label>EFMOTCA : </label>
        <input type="radio" checked={etaplisement === "EFMOTCA"} value="EFMOTCA" onChange={(e) => setEtaplisement(e.target.value)} />

        <label>ADARISSA : </label>
        <input type="radio" checked={etaplisement === "ADARISSA"} value="ADARISSA" onChange={(e) => setEtaplisement(e.target.value)} /> <br />

        <label>Photo : </label> 
        <input type="file" onChange={(e) => setPhoto(e.target.files[0])} /> <br />

        <button type="button" onClick={ajouter}>
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default AjouterStagiaire;
