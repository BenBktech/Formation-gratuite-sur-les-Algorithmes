class BinarySearch {
    /*
    Complexité Temporelle : O(log n) : La recherche dichotomique réduit de moitié la taille du tableau à chaque étape, ce qui donne une complexité logarithmique en base 2.
    
    Complexité Spatiale : O(1) : La recherche dichotomique utilise un espace constant, car elle ne nécessite pas de stockage supplémentaire proportionnel à la taille du tableau.
    */
    static search(arr, target) {
        let left = 0;
        let right = arr.length - 1;

        while(left <= right) {
            let mid = Math.floor((right + left) / 2);
            if(arr[mid] === target) {
                return mid;
            }
            else if(arr[mid] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return -1;
    }
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const result = BinarySearch.search(sortedArray, target);
console.log(result); // Affiche l'index de l'élément cible ou -1 si non trouvé