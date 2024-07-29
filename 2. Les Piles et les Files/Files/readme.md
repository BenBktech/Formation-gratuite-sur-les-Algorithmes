# Concepts Clés :

**Définition :** Une file (ou queue) est une structure de données linéaire qui suit le principe FIFO (First In, First Out). Cela signifie que le premier élément ajouté à la file sera le premier à être retiré.

**Opérations de Base :**
- enqueue(element) : Ajouter un élément à la fin de la file.
- dequeue() : Retirer et retourner l'élément au début de la file.
- front() : Retourner l'élément au début de la file sans le retirer.
- isEmpty() : Vérifier si la file est vide.
- size() : Retourner le nombre d'éléments dans la file.

**Applications Courantes :**
- Gestion des tâches dans les systèmes d'exploitation (ordonnancement des processus).
- Parcours en largeur des graphes (Breadth-First Search).
- Systèmes de messagerie et de gestion des imprimantes.
- Scénarios d'attente en file d'attente (comme les files d'attente des clients).

**Diagramme :**
```
+---+      +---+      +---+    |   
| 3 |  ->  | 2 |  ->  | 1 |    |    GUICHET
+---+      +---+      +---+    |   
```

- enqueue(3) ajoute 3 à la fin.
- dequeue() retire 1 du début.