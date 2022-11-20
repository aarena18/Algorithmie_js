/* ------------ EXERCICE 2 ---------------- */
/* ----- DECLARATION CLASSE ----- */

class Tueur {
  constructor(health) {
    this.health = health;
  }
}

class Caractéristiques {
  constructor(name, probDeath, probDamage, probDeathKill) {
    this.name = name;

    this.probDeath = probDeath;
    this.probDamage = probDamage;
    this.probDeathKill = probDeathKill;
  }
}

/* ----- DECLARATION LET ----- */

let name = [
  "Paul le nerd",
  "Jack le sportif",
  "Karen la teacher's pet",
  "Betty la survivaliste",
  "Tedd le musicien",
  "Linda qui est naïve",
  "Annissa la peureuse",
];

let survivants = [];

let morts = [];

for (let index = 0; index < 5; index++) {
  survivants.push(new Caractéristiques(randomName(), 0.3, 0.5, 0.2));
}

let Jason = new Tueur(100);

/* ----- DECLARATION FONCTION ----- */

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomName() {
  let test = getRandomInt(name.length - 1);
  let b = name[test];
  return b;
}

/* -----  SCRIPT ----- */

while (Jason.health > 0 || survivants.length > 0) {
  let randomNumber = Math.random();
  if (survivants.length == 0) {
    console.log("Nos survivants se sont faits décimés...");
    break;
  }
  if (Jason.health <= 0) {
    console.log("Jason a enfin été tué!");
    break;
  }
  for (let index = 0; index < survivants.length; index++) {
    if (randomNumber < survivants[index].probDeath) {
      console.log(survivants[index].name + " a été tué par Jason...");
      morts.push(survivants[index].name);
      survivants.splice(index, 1);
    } else if (
      randomNumber <
      survivants[index].probDamage + survivants[index].probDeath
    ) {
      console.log(
        "Jason perd 10 points de vie à cause de  " + survivants[index].name
      );
      Jason.health -= 10;
    } else if (
      randomNumber <
      survivants[index].probDamage +
        survivants[index].probDeath +
        survivants[index].probDeathKill
    ) {
      console.log(
        "Jason perd 10 points de vie à cause de " +
          survivants[index].name +
          " mais ce dernier décède en se sacrifiant"
      );
      Jason.health -= 15;
      morts.push(survivants[index].name);
      survivants.splice(index, 1);
    }
  }
}
console.log("Voici la liste des personnes décédées : ");
for (let index = 0; index < morts.length; index++) {
  console.log(morts[index] + " a été tué");
}
