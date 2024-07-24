# Introduction à la Syntaxe de Base JavaScript

## Variables et Types de Données :

### Déclaration de Variables : Utilisation de let & const.

```js
// Déclaration de variables
let name = "Alice";
const age = 30;
let isStudent = true;
```

### Types de Données Primitifs

- Nombre (Number)
- Chaîne de caractères (String)
- Booléen (Boolean)
- Null
- Undefined

## Opérateurs :

### Opérateurs Arithmétiques : +, -, *, /, %.

```js
// Opérateurs
let sum = 10 + 5;
let isAdult = age >= 18;
console.log(sum); // 15
console.log(isAdult); // true
```

### Opérateurs de Comparaison : ==, ===, !=, !==, >, <, >=, <=.
### Opérateurs Logiques : &&, ||, !.

## Structures de Contrôle

### Conditionnelles : if, else if, else, switch.
```js
// Structures de contrôle
if (isAdult) {
    console.log(name + " est un adulte.");
} else {
    console.log(name + " n'est pas un adulte.");
}
```

### Boucles : for, while, do while.
```js
// Boucles
for (let i = 0; i < 5; i++) {
    console.log("i vaut : " + i);
}
```

## Fonctions :
### Déclaration de Fonction : Fonctions nommées et fonctions anonymes.
### Paramètres et Valeurs de Retour : Passage de paramètres et retour de valeurs.

```js
// Fonctions
function greet(person) {
    return "Bonjour, " + person + "!";
}

let greeting = greet(name);
console.log(greeting);
```

### Fonctions Fléchées (Arrow Functions) : Syntaxe et utilisation.

```js
// Fonction fléchée
const add = (a, b) => a + b;
console.log("La somme de 3 et 4 est : " + add(3, 4));
```

# **Complexité Algorithmique :**

Notation Big-O 𝑂(1) :

- **Signification :** La notation Big-O est utilisée pour décrire la performance ou la complexité d'un algorithme. Plus précisément, elle caractérise la pire complexité d'un algorithme en fonction de la taille de l'entrée.
- **𝑂(1) :** Cette notation indique une complexité constante. Cela signifie que le temps d'exécution (ou l'espace utilisé) reste le même, peu importe la taille de l'entrée. Autrement dit, l'opération prend un temps constant et ne dépend pas de la taille des données.

## Complexité Temporelle vs. Complexité Spatiale

### Complexité Temporelle :

- **Définition :** La complexité temporelle mesure le temps d'exécution d'un algorithme en fonction de la taille de l'entrée.

- **Exemple :** Si un algorithme de tri a une complexité temporelle 𝑂(𝑛 log 𝑛), cela signifie que le temps nécessaire pour trier les données augmente proportionnellement à 𝑛 log 𝑛, où 𝑛 est le nombre d'éléments à trier.

- **Usage :** On utilise la complexité temporelle pour évaluer l'efficacité d'un algorithme en termes de rapidité d'exécution.

### Complexité Spatiale :

- **Définition :** La complexité spatiale mesure la quantité de mémoire utilisée par un algorithme en fonction de la taille de l'entrée.

- **Exemple :** Si un algorithme de tri utilise 𝑂(𝑛) d'espace mémoire, cela signifie que la mémoire requise augmente proportionnellement au nombre d'éléments à trier.

- **Usage :** On utilise la complexité spatiale pour évaluer l'efficacité d'un algorithme en termes de mémoire utilisée.

## Exemples 

### O(1) - Complexité Constante

Accès à un élément dans un tableau
```js
function getFirstElement(arr) {
    return arr[0];
}
```

**Explication :** Peu importe la taille du tableau, accéder au premier élément prend toujours le même temps.


### O(log n) - Complexité Logarithmique

Recherche dans un tableau trié

```js
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
```

**Explication :** Chaque étape de la recherche divise l'espace de recherche en deux, ce qui signifie que le nombre d'opérations nécessaires croît logarithmiquement par rapport à la taille du tableau.


###  𝑂(𝑛) - Complexité Linéaire

Parcourir un tableau et imprimer chaque élément

```js
function printAllElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
```

**Explication :** Chaque élément du tableau est traité une fois, donc le temps d'exécution est proportionnel à la taille du tableau.


### 𝑂(𝑛 log 𝑛) - Complexité Quasi-Linéaire

Tri d'un tableau en utilisant une méthode efficace comme le tri rapide

```js
function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const right = arr.filter(x => x > pivot);
    return [...quicksort(left), pivot, ...quicksort(right)];
}
```

**Explication :** Le tri rapide divise le tableau et trie les sous-tableaux récursivement, ce qui donne une complexité 𝑂(𝑛 log 𝑛) dans le cas moyen.


### 𝑂(𝑛<sup>2</sup>) - Complexité Quadratique

Calculer le produit cartésien de deux ensembles

```js
function cartesianProduct(setA, setB) {
    const product = [];
    for (let a of setA) {
        for (let b of setB) {
            product.push([a, b]);
        }
    }
    return product;
}
```

**Explication :** Chaque élément de l'ensemble A est couplé avec chaque élément de l'ensemble B, donc le temps d'exécution est proportionnel au produit des tailles des deux ensembles.


### 𝑂(2<sup>𝑛</sup>) - Complexité Exponentielle

Calculer tous les sous-ensembles d'un ensemble

```js
function getAllSubsets(arr) {
    const subsets = [];
    const total = Math.pow(2, arr.length);
    for (let i = 0; i < total; i++) {
        let subset = [];
        for (let j = 0; j < arr.length; j++) {
            if ((i & (1 << j)) !== 0) {
                subset.push(arr[j]);
            }
        }
        subsets.push(subset);
    }
    return subsets;
}
```

**Explication :** Le nombre total de sous-ensembles d'un ensemble de taille 𝑛 est 2<sup>𝑛</sup>, donc le temps nécessaire pour les générer est exponentiel.


### 𝑂(𝑛!) - Complexité Factorielle

Permuter tous les éléments d'un tableau

```js
function permute(arr) {
    if (arr.length === 0) return [[]];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const rest = permute(arr.slice(0, i).concat(arr.slice(i + 1)));
        for (const permutation of rest) {
            result.push([arr[i], ...permutation]);
        }
    }
    return result;
}
```

**Explication :** Le nombre de permutations d'un ensemble de taille 𝑛 est 𝑛!, donc le temps nécessaire pour les générer est factoriel.