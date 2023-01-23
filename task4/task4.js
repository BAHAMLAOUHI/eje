let listeEnregistrees = [];
let listeVaccinees = [];

function ajoutPersonne() {
  let nomPrenom = document.getElementById("nomPrenom").value;
  if (nomPrenom ==""){
    alert("saisir la personne s'il vous plait")
  }else{
  let personne = { nomPrenomm: nomPrenom, estVaccinee: false };
  listeEnregistrees.push(personne);
  document.getElementById("nomPrenom").value="";
  afficheListeEnregistrees();}
}


document.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        let nomPrenom = document.getElementById("nomPrenom").value;
  if (nomPrenom ==""){
    alert("saisir la personne s'il vous plait")
  }else{
  let personne = { nomPrenomm: nomPrenom, estVaccinee: false };
  listeEnregistrees.push(personne);
  document.getElementById("nomPrenom").value="";
  afficheListeEnregistrees();}}})

function afficheListeEnregistrees() {
  let listeDiv = document.getElementById("listeEnregistrees");
  listeDiv.innerHTML = "";
  for (let i = 0; i < listeEnregistrees.length; i++) {
    let personne = listeEnregistrees[i];
    let div = document.createElement("div");
    div.classList.add("personne");
    div.innerHTML = personne.nomPrenomm;
    let boutonVacciner = document.createElement("button");
    boutonVacciner.innerHTML = "Vacciner";
    boutonVacciner.style.backgroundColor="#90EE90"
    boutonVacciner.onclick = function() {
      vaccinerPersonne(i);
    };
    div.appendChild(boutonVacciner);
    listeDiv.appendChild(div);
  }
}

function vaccinerPersonne(index) {
  let personne = listeEnregistrees[index];
  personne.estVaccinee = true;
  listeEnregistrees.splice(index, 1);
  listeVaccinees.push(personne);
  afficheListeEnregistrees();
  afficheListeVaccinees();
}

function afficheListeVaccinees() {
  let listeDiv = document.getElementById("listeVaccinees");
  listeDiv.innerHTML = "";
  for (let i = 0; i < listeVaccinees.length; i++) {
    let personne = listeVaccinees[i];
    let div = document.createElement("div");
    div.classList.add("personne");
    div.innerHTML = personne.nomPrenomm;
    let boutonSupprimer = document.createElement("button");
    boutonSupprimer.innerHTML = "Supprimer";
    boutonSupprimer.style.backgroundColor="#ffcccb"
    boutonSupprimer.onclick = function() {
      supprimerPersonne(i);
    };
    div.appendChild(boutonSupprimer);
    listeDiv.appendChild(div);
  }
}

function supprimerPersonne(index) {
  listeVaccinees.splice(index, 1);
  afficheListeVaccinees();
}
``
