/* ------------ EXERCICE 3 ---------------- */

/* ----- DECLARATION LET ----- */
let input = 0;
let partie = true;

/* ----- DECLARATION FONCTION ----- */

function getInput(id) {
  return document.getElementById(id).value;
}

function Game(id, id2, id3) {
  let recupById = document.getElementById(id);
  let error = document.getElementById("error1");
  input = getInput(id3);

  if (input <= 3 || isNaN(input)) {
    error.innerHTML = "Il faut entrer un chiffre supérieur à 3";
  } else {
    error.innerHTML = "";
    recupById.innerHTML = "";
    for (let i = 0; i < input; i++) {
      insereimg(id);
    }
    ElmtJoueur = document.getElementById("joueur");
    joueur.textContent = "C'est au tour du joueur 1";
    partie = true;
    insereButton(id2);
    document.getElementById("input").value = "";
  }
}

function insereimg(id) {
  let elmt = document.getElementById(id);
  let createtd = document.createElement("td");
  let i = document.createElement("IMG");
  i.setAttribute("src", "img/matchs.png");
  i.setAttribute("alt", "allumette");
  createtd.appendChild(i);
  elmt.appendChild(createtd);
}

function insereButton(idb) {
  let remove = document.getElementById(idb);
  remove.innerHTML =
    "<p><button type='button' onclick='retirer(inputAllumEnlev)'>retirer</button> <input type='text' id='inputAllumEnlev' name='inputAllumEnlev' size='5' value=''/><label> allumette(s)</label><span id='error2'></span></p><p id='reste'></p>";
}

function retirer(input2) {
  let recupById = document.getElementById("imgMatch");
  let inputAllumEnlev = parseInt(getInput("inputAllumEnlev"));
  let recupById2 = document.getElementById("reste");

  /* -----  SCRIPT ----- */

  if (inputAllumEnlev > 3 || inputAllumEnlev <= 0 || isNaN(inputAllumEnlev)) {
    error2 = document.getElementById("error2");
    error2.textContent =
      " Il faut entrer un chiffre entre 0 et 3 et inférieur au input d'allumette(s) restante(s) : " +
      input;
  } else if (inputAllumEnlev > input) {
    error2.textContent =
      " Il faut entrer un chiffre inférieur au nombre d'allumette(s) restante(s) : " +
      input;
  } else {
    error2.textContent = "";
    partie = !partie;
    if (partie == true) {
      joueur.textContent = "C'est au tour du joueur 1";
    } else {
      joueur.textContent = "C'est au tour du joueur 2";
    }
    for (let i = inputAllumEnlev - 1; i >= 0; i--) {
      recupById.removeChild(recupById.childNodes[i]);
    }
    input = input - inputAllumEnlev;
  }

  recupById2.textContent = "Il reste " + input + " allumette(s) à enlever.";

  if (input === 0) {
    joueur.textContent = "";
    partie = !partie;
    if (partie == true) {
      joueur.textContent = "Le joueur 1 a gagné";
    } else {
      joueur.textContent = "Le joueur 2 a gagné";
    }
    let i = document.createElement("IMG");
    i.setAttribute("C'est gagné");
    recupById.appendChild(i);
  }
}
