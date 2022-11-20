/* ------------ EXERCICE 1 ---------------- */

/* ----- DECLARATION CLASSE ----- */

class Personnage {
  constructor(health, name) {
    this.health = health;
    this.name = name;
  }
}

/* ----- DECLARATION LET ----- */

let liste = [
  "Anissa par Wejdene",
  "MotorCity par Lausse The Cat",
  "DarkRed par Steve Lacy",
  "Genesis par Grimes",
  "Floating par Lealani",
];

let perso = new Personnage(10, "John");
let feuxRouges = 30;
let changements = 0;

/* ----- DECLARATION FONCTION ----- */

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/* -----  SCRIPT ----- */

while (feuxRouges > 0) {
  track = liste[getRandomInt(4)];
  console.log(track + " passe à la radio");
  feuxRouges--;

  if (track === "Anissa par Wejdene") {
    changements++;
    perso.health--;
  } else {
    console.log("le trajet suit son court");
  }

  console.log("John change de taxi");
  console.log("il reste à John " + perso.health + " de santé mentale");

  if (feuxRouges === 0) {
    console.log("John est bien arrivé chez lui");
    console.log("John a changé " + changements + " fois de taxis");
    break;
  }
  if (perso.health === 0) {
    console.log("John déteste cette musique... il EXPLOSE!");
    break;
  }
}
console.log("Le trajet est fini");
