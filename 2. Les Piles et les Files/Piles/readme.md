# Concepts Clés :

**Définition :** Une pile (ou stack) est une structure de données linéaire qui suit le principe LIFO (Last In, First Out). Cela signifie que le dernier élément ajouté à la pile sera le premier à être retiré.

**Opérations de Base :**
- push(element) : Ajouter un élément au sommet de la pile.
- pop() : Retirer et retourner l'élément au sommet de la pile.
- peek() : Retourner l'élément au sommet de la pile sans le retirer.
- isEmpty() : Vérifier si la pile est vide.
- size() : Retourner le nombre d'éléments dans la pile.

**Applications Courantes :**
- Gestion de la mémoire dans les appels de fonctions récursives.
- Parcours en profondeur des graphes (Depth-First Search).
- Algorithmes d'analyse syntaxique (comme ceux utilisés dans les compilateurs).
- Fonctionnalités d'annulation (undo) dans les éditeurs de texte.

**Schéma :**
```
+---+
| 3 |
+---+
| 2 |
+---+
| 1 |
+---+
```

- push(3) ajoute 3 au sommet.
- pop() retire 3 du sommet.