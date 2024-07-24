// Déclaration de variables
let name = "Alice";
const age = 30;
var isStudent = true;

// Opérateurs
let sum = 10 + 5;
let isAdult = age >= 18;

// Structures de contrôle
if (isAdult) {
    console.log(name + " est un adulte.");
} else {
    console.log(name + " n'est pas un adulte.");
}

// Boucles
for (let i = 0; i < 5; i++) {
    console.log("i vaut : " + i);
}

// Fonctions
function greet(person) {
    return "Bonjour, " + person + "!";
}

let greeting = greet(name);
console.log(greeting);

// Fonction fléchée
const add = (a, b) => a + b;
console.log("La somme de 3 et 4 est : " + add(3, 4));