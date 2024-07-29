# Concepts Clés : Recherche Dichotomique

**Définition :** La recherche dichotomique, ou recherche binaire, est un algorithme de recherche qui trouve la position d'une valeur cible au sein d'un tableau trié. La recherche binaire compare la valeur cible à l'élément central du tableau. Si elles sont inégales, la moitié dans laquelle la valeur cible ne peut pas se trouver est éliminée et la recherche se poursuit sur la moitié restante jusqu'à ce que la valeur cible soit trouvée.

## Fonctionnement de la Recherche Dichotomique

1. **Initialisation :** Définir les bornes gauche (`left`) et droite (`right`) du tableau.
2. **Calcul du Milieu :** Calculer l'index du milieu (`mid`).
3. **Comparaison :** Comparer la valeur cible avec l'élément du milieu.
   - Si la valeur cible est égale à l'élément du milieu, l'index est retourné.
   - Si la valeur cible est inférieure à l'élément du milieu, ajuster la borne droite.
   - Si la valeur cible est supérieure à l'élément du milieu, ajuster la borne gauche.
4. **Itération :** Répéter les étapes 2 et 3 jusqu'à ce que la valeur cible soit trouvée ou que les bornes se croisent.

## Conditions Nécessaires pour la Recherche Dichotomique

- Liste Triée : La recherche dichotomique ne fonctionne que sur une liste triée. Si la liste n'est pas triée, l'algorithme doit d'abord trier la liste, ce qui peut affecter l'efficacité globale.
- Accessibilité Aléatoire : L'algorithme suppose un accès direct aux éléments de la liste, ce qui est typiquement le cas avec les tableaux ou les listes dynamiques.

## Applications Courantes

- Recherche dans les Bases de Données : La recherche dichotomique est utilisée pour effectuer des requêtes de recherche rapide sur des tables triées. Par exemple, trouver un enregistrement spécifique dans une base de données triée par identifiant.

- Algorithmes de Tri : La recherche dichotomique est souvent utilisée comme sous-algorithme dans des algorithmes de tri efficaces tels que le tri rapide (quicksort) et le tri par fusion (mergesort).

- Problèmes d'Optimisation : Utilisée pour trouver des solutions optimales dans des plages de valeurs continues. Par exemple, trouver la racine carrée d'un nombre en utilisant la méthode de recherche dichotomique.

- Systèmes de Fichiers : Les systèmes de fichiers peuvent utiliser la recherche dichotomique pour localiser rapidement des fichiers dans un répertoire trié.

- Jeux et Simulation : Utilisée pour la recherche rapide d'objets ou d'entités dans des jeux et des simulations où les données sont triées.

## Diagramme

**Attention :** left, right & mid désignent un index dans le tableau et non une valeur !

```
Initial Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Target: 7

Step 1:
left = 0, right = 9, mid = 4
Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                    ^
Target > mid, move right

Step 2:
left = 5, right = 9, mid = 7
Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                             ^
Target < mid, move left

Step 3:
left = 5, right = 6, mid = 5
Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                          ^
Target = mid, found target at index 6
```