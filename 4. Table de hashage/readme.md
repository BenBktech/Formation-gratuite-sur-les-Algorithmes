# Concepts Clés : Les Tables de Hashage

**Définition :** Une table de hashage est une structure de données qui associe des clés à des valeurs. Elle utilise une fonction de hachage pour calculer un index dans un tableau, où la valeur sera stockée.

## Fonction de Hachage
La fonction de hachage prend une clé (généralement une chaîne de caractères) et calcule un index dans le tableau de la table de hashage.

### Exemple de Fonction de Hachage
```js
_hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.table.length;
    }
    return hash;
}
```

**Opérations de Base :**
- set(key, value): Ajouter ou mettre à jour une paire clé-valeur.
- get(key): Récupérer la valeur associée à une clé.
- _hash(key): Calculer l'index pour une clé donnée.

**Applications Courantes :**
- **Dictionnaires et Indexation :** Les tables de hashage sont souvent utilisées pour implémenter des dictionnaires où les clés sont des mots et les valeurs sont leurs définitions ou fréquences.
- **Caches et Mémorisation :** Utilisées pour stocker des résultats de calculs coûteux pour éviter de les recalculer.
- **Bases de Données :** Les tables de hashage sont utilisées pour l'indexation rapide des données.
- **Gestion de la Mémoire :** Les systèmes d'exploitation utilisent des tables de hashage pour la gestion des pages de mémoire.

**Diagramme d'une liste chaînée simple :**
```
+-------------------+-------------------+-------------------+-------------------+-------------------+
|      index 0      |      index 1      |      index 2      |      index 3      |      index 4      |
|                   |                   |   ["apple", 1]    |   ["banana", 2]   |                   |
+-------------------+-------------------+-------------------+-------------------+-------------------+
```