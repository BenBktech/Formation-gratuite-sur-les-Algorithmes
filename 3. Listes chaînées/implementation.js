class Node {
    // Chaque noeud a une valeur ainsi qu'un lien vers le prochain noeud
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    // La liste chaînée a un premier noeud et un dernier bloc ainsi qu'une taille
    /* 
    Complexité Temporelle : O(1)  : Initialiser les propriétés de la liste chaînée est une opération constante.
    Complexité Spatiale : O(1) : Alloue un espace constant pour les références head, tail, et length.
    */
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    // Ajouter un élément à la fin de la liste
    /* 
    Complexité Temporelle : O(1) : L'ajout d'un élément à la fin de la liste chaînée se fait en temps constant, car on a un accès direct à la queue (tail).
    Complexité Spatiale : O(1) par opération : L'espace nécessaire pour un élément ajouté est constant.   
    */
    append(value) {
        // On crée un nouveau noeud
        const newNode = new Node(value);
        // Si il n'y a pas de premier bloc, en gros que la liste chaîne est vide
        if(!this.head) {
            // Alors la liste chaînée sera composée d'un noeud, qui sera le premier et le dernier
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            // Sinon, si la liste n'est pas vide, on va ajouter le nouveau noeud
            // Pour cela pour le dernier noeud, on dit qu'il a désormais un noeud après lui
            // Puis, dit que le dernier noeud est désormais le newNode
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // On dit que la taille de la chaîne augmente de 1
        this.length++;
    }
  
    // Ajouter un élément au début de la liste
    /* 
    Complexité Temporelle : O(1) : L'ajout d'un élément au début de la liste chaînée se fait en temps constant.
    Complexité Spatiale : O(1) par opération : L'espace nécessaire pour un élément ajouté est constant.
    */
    prepend(value) {
        // On crée un nouveau noeud
        const newNode = new Node(value);
        // Alors la liste chaînée sera composée d'un noeud, qui sera le premier et le dernier
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        // Il faut ici mettre le nouveau noeud en premier
        // Du coup on dit que le premier noeud actuel sera le suivant du noeud créé
        // Et on dit que le premier noeud est désormais le nouveau noeud
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        // On dit que la taille de la chaîne augmente de 1
        this.length++;
    }
  
    // Supprimer un élément par valeur
    /* 
    Complexité Temporelle : O(n) : Dans le pire des cas, il faut parcourir toute la liste pour trouver l'élément à supprimer.
    Complexité Spatiale : O(1) : Aucune mémoire supplémentaire n'est nécessaire à part quelques variables temporaires.
    */
    delete(value) {
        // Si la liste chaînée est vide
        if(!this.head) {
            return null;
        }
        // Si le noeud à supprimer est le premier noeud de la liste chaînée
        if(this.head.value === value) {
            // Alors on dit que le deuxième noeud est le premier
            this.head = this.head.next;
            // On diminue la taille de la liste chaînée de 1
            this.length--;
            // Juste avant, this.head pouvait être "null" s'il y avait juste un élément dans la liste
            // et du coup, si désormais la taille est de 0, alors ne pas oublier de mettre le dernier noeud à null
            if(this.length === 0) {
                this.tail = null;
            }
            return;
        }

        // Sinon, c'est qu'on essaie de supprimer le 2ème noeud ou le 3ème, ou le 4ème etc..
        // L'objectif est donc de récupérer le noeud qui est 1 noeud avants le noeud à supprimer

        // Cette ligne permet de récupérer le premier élément (aussi utile s'il y a juste deux noeuds dans la liste chaînées, pour faire fonctionner le script)
        let current = this.head;
        // Si il existe un noeud après le noeud actuel et que sa valeur est différente de la valeur à supprimer
        while(current.next && current.next.value !== value) {
            // On passe au noeud suivant
            current = current.next;
        }
        // Une fois qu'on a récupérer le (noeud à supprimer - 1)
        // Si ce noeud a un noeud après lui
        if (current.next) {
            // Alors va supprimer le noeud après lui en disant que pour le noeud actuel son prochain ne sera pas le prochain mais le prochain du prochain
            current.next = current.next.next;
            // Et si on arrive au dernier noeud, on le met dans this.tail
            if (!current.next) {
              this.tail = current;
            }
            // On diminue la taille de la liste chaînée de 1
            this.length--;
        }
        
    }
  
    // Trouver un élément par valeur
    /* 
    Complexité Temporelle : O(n) : Dans le pire des cas, il faut parcourir toute la liste pour trouver l'élément recherché.
    Complexité Spatiale : O(1) : Aucune mémoire supplémentaire n'est nécessaire à part quelques variables temporaires.
    */
    find(value) {
        // Si il n'y a pas de premier noeud, alors la liste chaînée est vide
        if(!this.head) {
            return null;
        }
        // Sinon, il y a quelque chose dans la liste chaînée
        else {
            // On va parcourir la liste chaînée, pour cela on dit que le noeud courant est le premier
            let current = this.head;
            // Tant qu'il y a quelque chose à parcourir, donc tant qu'il y a un noeud
            while(current) {
                // Si la valeur du noeud actuel est la même que la valeur recherchée
                if(current.value === value) {
                    // On retourne le noeud courant
                    return current;
                }
                // On dit que le noeud courant est le prochain
                current = current.next;
            }
            return null;
        }
    }
  
    // Afficher tous les éléments de la liste
    /* 
    Complexité Temporelle : O(n) : Il faut parcourir toute la liste pour afficher tous les éléments.
    Complexité Spatiale : O(n) : Un espace proportionnel à la taille de la liste est nécessaire pour stocker les valeurs dans le tableau result.
    */
    print() {
        // On créé un tableau vide
        let result = [];
        // On veut parcourir la liste chaînée, on dit pour cela que le noeud courant est le premier noeud
        let current = this.head;
        // Tant qu'il y a des noeuds à parcourir
        while(current) {
            // On ajoute le noeud dans "result"
            result.push(current.value);
            // On dit que le noeud courant est le prochain noeud pour permettre le parcours des noeuds
            current = current.next;
        }
        console.log(result.join(' -> '));
    }
}

const myLinkedList = new LinkedList();

myLinkedList.append(10);
myLinkedList.append(20);
myLinkedList.append(30);
console.log(myLinkedList)
myLinkedList.print(); // 10 -> 20 -> 30

myLinkedList.prepend(5);
myLinkedList.print(); // 5 -> 10 -> 20 -> 30

console.log(myLinkedList.find(20)); // Node { value: 20, next: Node { value: 30, next: null } }
console.log(myLinkedList.find(50)); // null

myLinkedList.delete(10);
myLinkedList.print(); // 5 -> 20 -> 30

myLinkedList.delete(30);
myLinkedList.print(); // 5 -> 20