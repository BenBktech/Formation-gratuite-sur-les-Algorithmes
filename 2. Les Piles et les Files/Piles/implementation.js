class Pile {
    /*
    Complexité Temporelle : O(1) : Initialiser un tableau vide est une opération constante.
    Complexité Spatiale : O(1) : Alloue un espace constant pour la référence au tableau.
    */
    constructor() {
        this.items = [];
    }

    /*
    Complexité Temporelle : O(1) : L'ajout d'un élément à la fin du tableau est généralement une opération constante.
    Complexité Spatiale : O(1) par opération : L'espace nécessaire pour un élément ajouté est constant.
    */
    push(element) {
        this.items.push(element);
    }

    /*
    Complexité Temporelle : O(1) : Retirer le dernier élément d'un tableau est une opération constante.
    Complexité Spatiale : O(1) : Aucune mémoire supplémentaire n'est nécessaire pour retirer un élément.
    */
    pop() {
        if(this.isEmpty()) {
            return "Pile is empty";
        }
        return this.items.pop();
    }

    /*
    Complexité Temporelle : O(1) : Accéder au dernier élément d'un tableau est une opération constante.
    Complexité Spatiale : O(1) : Aucune mémoire supplémentaire n'est nécessaire pour voir l'élément au sommet de la pile.
    */
    peek() {
        if(this.isEmpty()) {
            return "Pile is empty";
        }
        return this.items[this.items.length - 1];
    }

    /*
    Complexité Temporelle : O(1)  : Comparer la longueur d'un tableau à zéro est une opération constante.
    Complexité Spatiale : O(1) : Aucune mémoire supplémentaire n'est nécessaire pour vérifier si la pile est vide.
    */
    isEmpty() {
        return this.items.length === 0;
    }

    /*
    Complexité Temporelle : O(1) : Accéder à la propriété de longueur d'un tableau est une opération constante.
    Complexité Spatiale : O(1) : Aucune mémoire supplémentaire n'est nécessaire pour retourner la taille de la pile.
    */
    size() {
        return this.items.length;
    }

    /*
    Complexité Temporelle : O(1)  : Réinitialiser un tableau vide est une opération constante.
    Complexité Spatiale : O(1)  : La référence au tableau est mise à jour pour pointer vers un nouveau tableau vide.
    */
    clear() {
        this.items = [];
    }

    /*
    Complexité Temporelle : O(n)  : Dans le pire des cas, chaque élément du tableau doit être vérifié pour voir s'il correspond à l'élément recherché.
    Complexité Spatiale : O(1) : Aucune mémoire supplémentaire n'est nécessaire à part quelques variables temporaires.
    */
    contains(element) {
        for(let i = 0 ; i < this.items.length ; i++) {
            if(this.items[i] === element) {
                return true;
            }
        }
        return false;
    }

    /*
    Complexité Temporelle : O(n)  : Convertir le tableau en chaîne de caractères avec toString nécessite de parcourir tous les éléments du tableau.
    Complexité Spatiale : O(n)  : La conversion du tableau en chaîne de caractères nécessite une mémoire proportionnelle à la taille du tableau.
    */
    print() {
        console.log(this.items.toString());
    }
}

const maPile = new Pile();
console.log(maPile.isEmpty());

maPile.push(10);
maPile.push(20);
maPile.push(30);

maPile.print();

console.log(maPile.peek());

console.log(maPile.pop());
maPile.print();

console.log(maPile.size());

console.log(maPile.contains(20));
console.log(maPile.contains(40));

maPile.clear();
console.log(maPile.isEmpty());