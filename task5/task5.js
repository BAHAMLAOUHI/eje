let listeEtudiants = [];

function ajoutPost() {
  let nomPrenom = document.getElementById("nomPrenom").value;
  let photo = document.getElementById("photo").files[0];
  let etudiant = { nomPrenom: nomPrenom, photo: photo };
  listeEtudiants.push(etudiant);
  afficheListeEtudiants();
}

/*function afficheListeEtudiants() {
  let listeDiv = document.getElementById("listeEtudiants");
  listeDiv.innerHTML = "";
  for (let i = 0; i < listeEtudiants.length; i++) {
    let etudiant = listeEtudiants[i];
    let div = document.createElement("div");
    div.classList.add("etudiant");
    let img = document.createElement("img");
    img.src = URL.createObjectURL(etudiant.photo);
    div.appendChild(img);
    div.innerHTML += etudiant.nomPrenom;
    let boutonSupprimer = document.createElement("button");
    boutonSupprimer.innerHTML = "Supprimer";
    boutonSupprimer.onclick = function() {
      supprimerEtudiant(i);
    };
    div.appendChild(boutonSupprimer);
    listeDiv.appendChild(div);
  }
}*/


function afficheListeEtudiants() {
    let listeDiv = document.getElementById("listeEtudiants");
    let reader = new FileReader();
    listeDiv.innerHTML = "";
    for (let i = 0; i < listeEtudiants.length; i++) {
      let etudiant = listeEtudiants[i];
      let div = document.createElement("div");
    div.classList.add("etudiant");
    let img = document.createElement("img");
    reader.onload = function(e) {
      img.src = e.target.result;
    }
    reader.readAsDataURL(etudiant.photo);
    div.appendChild(img);
    div.innerHTML += etudiant.nomPrenom;
    let boutonSupprimer = document.createElement("button");
    boutonSupprimer.innerHTML = "Supprimer";
    boutonSupprimer.onclick = function() {
      supprimerEtudiant(i);
    };
    div.appendChild(boutonSupprimer);
    listeDiv.appendChild(div);
  }
}

function supprimerEtudiant(index) {
  listeEtudiants.splice(index, 1);
  afficheListeEtudiants();
}
