class TableDeHashage {
    constructor(size = 7) {
        this.table = new Array(size);
        this.size = 0;
    }

    /*
    Exemple
    Prenons un exemple pour illustrer le fonctionnement de cette fonction de hachage.

    Taille tableau = 53

    Clé : "cat"

    Initialisation :

    hash = 0

    - Premier Caractère ('c', index 0) :

    key.charCodeAt(0) = 99 (code ASCII de 'c')
    hash = (0 + 99 * 0) % 53 = 0
    
    - Deuxième Caractère ('a', index 1) :

    key.charCodeAt(1) = 97 (code ASCII de 'a')
    hash = (0 + 97 * 1) % 53 = 44
    
    - Troisième Caractère ('t', index 2) :

    key.charCodeAt(2) = 116 (code ASCII de 't')
    hash = (44 + 116 * 2) % 53 = 23

    - Index Final : 23
    La clé "cat" sera donc stockée à l'index 23 dans le tableau de la table de hashage.
    */
    /* La fonction de hachage _hash prend une clé (généralement une chaîne de caractères) et calcule un index dans le tableau de la table de hashage. Cet index est ensuite utilisé pour stocker et accéder aux paires clé-valeur dans la table de hashage. */
    _hash(key) {
        // On initialise une variable hash à 0. Cette variable sera utilisée pour accumuler le résultat du calcul de hachage.
        let hash = 0;
        // On utilise une boucle for pour parcourir chaque caractère de la clé.
        // key.length donne la longueur de la clé, donc la boucle s'exécute une fois pour chaque caractère de la clé.
        for (let i = 0; i < key.length; i++) {
            // key.charCodeAt(i) obtient le code ASCII (ou Unicode) du caractère à l'index i.
            // key.charCodeAt(i) * i multiplie ce code de caractère par l'index i. Cela permet de donner plus de poids aux caractères en fonction de leur position dans la chaîne.
            // hash + key.charCodeAt(i) * i ajoute ce produit au hash accumulé jusqu'à présent.
            hash = (hash + key.charCodeAt(i) * i) % this.table.length;
        }
        // Après avoir parcouru tous les caractères de la clé et mis à jour le hash pour chaque caractère, la fonction retourne le hash final, qui est l'index dans le tableau de la table de hashage où la paire clé-valeur sera stockée.
        return hash;
    }

    /*
    Initialisation :

    - Supposons que nous avons une table de hashage de taille 5.
    let table = [null, null, null, null, null];

    - Insertion d'une Paire Clé-Valeur :
    set("apple", 1);

        L'index calculé est 2.
        let index = this._hash("apple"); // Supposons que _hash("apple") retourne 2

        Gérer les Collisions :
        À l'index 2, il n'y a pas encore de collision (la case est vide).

        Insérer la Paire Clé-Valeur :
        this.table[2] = ["apple", 1];
        La table devient :
        [null, null, ["apple", 1], null, null];

        Incrémenter la Taille de la Table :
        this.size++;

    - Insertion d'une Autre Paire Clé-Valeur :
    set("banana", 2);

        Calculer l'Index de Hachage :
        L'index calculé est également 2.
        let index = this._hash("banana"); // Supposons que _hash("banana") retourne 2

        Gérer les Collisions :
        À l'index 2, il y a déjà une entrée ["apple", 1].
        La boucle while incrémente l'index jusqu'à trouver un index libre.
        index = (index + 1) % this.table.length; // index devient 3

        Insérer la Paire Clé-Valeur :
        this.table[3] = ["banana", 2];
        La table devient :
        [null, null, ["apple", 1], ["banana", 2], null];

        Incrémenter la Taille de la Table :
        this.size++;
    */

    set(key, value) {
        // Utilise la fonction de hachage _hash pour calculer l'index pour la clé donnée.
        // L'index est une position dans le tableau où la paire clé-valeur sera potentiellement stockée.
        let index = this._hash(key);

        // Gérer les Collisions avec l'Adressage Ouvert :
        // Utilise une boucle while pour gérer les collisions par adressage ouvert.

        // Condition de la Boucle :
        // this.table[index] vérifie s'il y a déjà une entrée à l'index calculé.
        // this.table[index][0] !== key vérifie si la clé existante à cet index est différente de la clé à insérer.
        
        // Si la condition est vraie :
        // index = (index + 1) % this.table.length : Incrémente l'index et utilise l'opérateur modulo pour s'assurer que l'index reste dans les limites de la longueur du tableau.
        // Répète jusqu'à ce qu'un index libre soit trouvé ou qu'une clé égale soit trouvée (pour mise à jour).
        while (this.table[index] && this.table[index][0] !== key) {
          index = (index + 1) % this.table.length;
        }

        // Insérer ou Mettre à Jour la Paire Clé-Valeur :
        // Une fois qu'un index libre ou une clé existante est trouvé, insère la paire [key, value] à cet index dans le tableau.
        this.table[index] = [key, value];

        // Incrémente la variable size qui garde la trace du nombre d'éléments dans la table de hashage.
        this.size++;
    }

    // La méthode get permet de rechercher et de récupérer une valeur associée à une clé dans une table de hashage en utilisant l'adressage ouvert pour résoudre les collisions. Voici le code de la méthode pour référence :

    /*
    Supposons que nous avons une table de hashage avec les éléments suivants :
    let table = [
        null, 
        null, 
        ["apple", 1], 
        ["banana", 2], 
        null
    ];

    Recherche d'une Clé Existante :
    get("banana");

        L'index calculé est 2.
        let index = this._hash("banana"); // Supposons que _hash("banana") retourne 2

        Parcourir le Tableau pour Trouver la Clé :
        À l'index 2, il y a une entrée ["apple", 1].
        La clé à cet index n'est pas "banana", donc on passe à l'index suivant.
        index = (index + 1) % this.table.length; // index devient 3
        À l'index 3, il y a une entrée ["banana", 2].
        La clé à cet index est "banana", donc on retourne la valeur associée 2.
        return this.table[3][1]; // 2

    Recherche d'une Clé Non Existante :
    get("grape");

        Calculer l'Index de Hachage :
        let index = this._hash("grape"); // Supposons que _hash("grape") retourne 1

        Parcourir le Tableau pour Trouver la Clé :
        À l'index 1, il n'y a pas d'entrée (c'est null).
        La boucle while se termine car il n'y a pas d'entrée à cet index, donc la clé "grape" n'existe pas dans la table de hashage.

        Retourner undefined :
        return undefined;

    */
    get(key) {
        // Utilise la fonction de hachage _hash pour calculer l'index pour la clé donnée.
        // L'index est une position dans le tableau où la paire clé-valeur pourrait être stockée.
        let index = this._hash(key);
        // Utilise une boucle while pour parcourir le tableau à partir de l'index calculé.
        // this.table[index] vérifie s'il y a une entrée à l'index actuel.
        while(this.table[index]) {
            // this.table[index][0] === key vérifie si la clé à cet index est égale à la clé recherchée.
            if(this.table[index][0] === key) {
                // Si la clé est trouvée, retourne la valeur associée this.table[index][1].
                return this.table[index][1];
            }
            // index = (index + 1) % this.table.length : Incrémente l'index et utilise l'opérateur modulo pour s'assurer que l'index reste dans les limites de la longueur du tableau.
            // Répète jusqu'à ce qu'un index vide soit trouvé ou que la clé soit trouvée.
            index = (index + 1) % this.table.length;
        }
        return undefined;
    }
}

// Exemple d'utilisation
const hashTable = new TableDeHashage();
hashTable.set("name", "Alice");
hashTable.set("age", 25);
hashTable.set("job", "Developer");
console.log(hashTable.table);

console.log(hashTable.get("name")); // Alice
console.log(hashTable.get("age")); // 25
console.log(hashTable.get("job")); // Developer
console.log(hashTable.get("location")); // undefined