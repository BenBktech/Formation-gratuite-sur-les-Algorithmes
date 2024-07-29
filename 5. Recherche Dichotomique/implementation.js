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

const sortedArray = [11, 28, 31, 47, 55, 61, 77, 82, 94, 100];
const target = 77;
const result = BinarySearch.search(sortedArray, target);
console.log(result); // Affiche l'index de l'élément cible ou -1 si non trouvé