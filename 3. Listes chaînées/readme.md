# Concepts Clés :

**Définition :** Une liste chaînée est une structure de données linéaire où chaque élément (appelé nœud) contient une valeur et un pointeur vers le nœud suivant.

**Types de Listes Chaînées :**
- Liste Chaînée Simple : Chaque nœud pointe vers le nœud suivant.
- Liste Chaînée Double : Chaque nœud pointe vers le nœud suivant et le nœud précédent.
- Liste Chaînée Circulaire : Le dernier nœud pointe vers le premier nœud, formant un cycle.

**Opérations de Base :**
- append(value) : Ajouter un élément à la fin de la liste
- prepend(value) : Ajouter un élément au début de la liste
- delete(value) : Supprimer un élément par valeur
- find(value) : Trouver un élément par valeur
- print() : Afficher tous les éléments de la liste

**Applications Courantes :**
- **Manipulation de Grands Volumes de Données :** Les listes chaînées permettent une gestion flexible de la mémoire, ce qui les rend adaptées à la manipulation de grandes quantités de données où la taille peut varier dynamiquement.
- **Implémentation de Structures de Données Avancées :** Les listes chaînées servent de base pour implémenter des structures de données plus complexes comme les piles, les files, les listes d'adjacence pour les graphes, etc.
- **Gestion de la Mémoire dans les Systèmes d'exploitation :** Les systèmes d'exploitation utilisent des listes chaînées pour gérer des blocs de mémoire alloués et libérés.
- **Algorithmes et Parcours de Graphes :** Les listes chaînées sont utilisées pour représenter les listes d'adjacence dans les graphes, facilitant ainsi les parcours en profondeur (DFS) et en largeur (BFS).
- **Implémentation des Listes de Libre Service :** Les éditeurs de texte et les applications similaires utilisent des listes chaînées pour implémenter des fonctionnalités d'annulation/rétablissement (undo/redo).


**Diagramme d'une liste chaînée simple :**
```
+------+    +------+    +------+
|  1   | -> |  2   | -> |  3   | -> null
+------+    +------+    +------+
```