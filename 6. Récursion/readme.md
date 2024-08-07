# Concepts Clés : La Récursion

**Définition :** La récursion est une technique de programmation où une fonction s'appelle elle-même directement ou indirectement. Les fonctions récursives sont utilisées pour résoudre des problèmes en les décomposant en sous-problèmes plus simples, similaires à l'original.

## Fonctionnement de la Récursion

1. **Cas de Base :** Une condition qui arrête les appels récursifs pour éviter une boucle infinie.
2. **Appel Récursif :** La fonction s'appelle elle-même avec des arguments modifiés pour progresser vers le cas de base.

### Rôle des Piles dans la Récursion

Lorsque la récursion est utilisée, chaque appel récursif est empilé sur la pile d'exécution (appelée aussi stack). La pile d'exécution est une structure de données de type LIFO (Last In, First Out) qui stocke des informations sur les fonctions actives, telles que les variables locales et les paramètres.

#### Processus :

1. **Empilement :**
   - Chaque appel de la fonction est empilé sur la pile d'exécution.
   - Les paramètres de la fonction et l'emplacement de retour (adresse de retour) sont également empilés.
   
2. **Dépilement :**
   - Lorsque le cas de base est atteint, les appels empilés commencent à se résoudre.
   - La pile d'exécution se dépile (les appels sont retirés de la pile) et les résultats sont combinés pour donner le résultat final.

### Exemple de Code en JavaScript

#### Factorielle
La factorielle d'un nombre n est le produit de tous les entiers de 1 à n.
```javascript
function fact(n) {
    if (n === 0) return 1; // Cas de base
    return n * fact(n - 1); // Appel récursif
}

// Exemple d'utilisation
console.log(fact(5)); // Affiche 120
```

#### Décomposition de l'Algorithme

##### Appel initial :

- ```fact(5)``` est appelé.
- Le programme vérifie si ```n === 0```. Ce n'est pas le cas, donc il passe à ```return 5 * fact(4)```.


##### Premier appel récursif :

- ```fact(4)``` est appelé.
- Le programme vérifie si ```n === 0```. Ce n'est pas le cas, donc il passe à ```return 4 * fact(3)```.


##### Deuxième appel récursif :

- ```fact(3)``` est appelé.
- Le programme vérifie si ```n === 0```. Ce n'est pas le cas, donc il passe à ```return 3 * fact(2)```.


##### Troisième appel récursif :

- ```fact(2)``` est appelé.
- Le programme vérifie si ```n === 0```. Ce n'est pas le cas, donc il passe à ```return 2 * fact(1)```.


##### Quatrième appel récursif :

- ```fact(1)``` est appelé.
- Le programme vérifie si ```n === 0```. Ce n'est pas le cas, donc il passe à ```return 1 * fact(0)```.


##### Cas de base :

- ```fact(0)``` est appelé.
- Le programme vérifie si ```n === 0```. C'est vrai, donc il retourne ```1```.


#### Retour des appels récursifs

Maintenant que le cas de base est atteint, chaque appel récursif précédent se résout :

##### Résolution du quatrième appel récursif :

```fact(1)``` retourne ```1 * 1 = 1```.


##### Résolution du troisième appel récursif :

```fact(2)``` retourne ```2 * 1 = 2```.


##### Résolution du deuxième appel récursif :

```fact(3)``` retourne ```3 * 2 = 6```.


##### Résolution du premier appel récursif :

```fact(4)``` retourne ```4 * 6 = 24```.


##### Résolution de l'appel initial :

```fact(5)``` retourne ```5 * 24 = 120```.


#### Illustration des étapes de la récursion : 

```
fact(5)
5 * fact(4)
    4 * fact(3)
        3 * fact(2)
            2 * fact(1)
                1 * fact(0)
                    1
```

#### Diagramme de la Pile d'Exécution

À chaque appel récursif, une nouvelle entrée est ajoutée à la pile d'exécution. Une fois le cas de base atteint, la pile commence à se dépiler :

```
Empilement :                                  Dépilement :

fact(5)                                       fact(5)
5 * fact(4)                                   5 * 24 = 120
4 * fact(3)                                   4 * 6 = 24
3 * fact(2)                                   3 * 2 = 6
2 * fact(1)                                   2 * 1 = 2
1 * fact(0)                                   1
1
```

En résumant :

- **Empilement :** Chaque appel récursif ajoute une nouvelle entrée à la pile d'exécution.
- **Dépilement :** Une fois le cas de base atteint, les appels commencent à se résoudre et à se dépiler.