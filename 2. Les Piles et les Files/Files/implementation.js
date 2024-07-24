class File {
    // Les complexités sont les mêmes que pour les Piles.
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if(this.isEmpty()) {
            return "File is empty";
        }
        return this.items.shift();
    }

    front() {
        if(this.isEmpty()) {
            return "File is empty";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }

    clear() {
        this.items = [];
    }

    contains(element) {
        for(let i = 0 ; i < this.items.length ; i++) {
            if(this.items[i] === element) {
                return true;
            }
        }
        return false;
    }
}

const maFile = new File();

console.log(maFile.isEmpty()); // true

maFile.enqueue(10);
maFile.enqueue(20);
maFile.enqueue(30);

console.log(maFile.contains(20)); // true
console.log(maFile.contains(40)); // false

maFile.print(); // 10,20,30

console.log(maFile.front()); // 10

console.log(maFile.dequeue()); // 10
maFile.print(); // 20,30

console.log(maFile.size()); // 2

maFile.clear();
console.log(maFile.isEmpty());