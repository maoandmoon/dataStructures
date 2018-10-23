/* Queues */

function Queue () {
    let collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.enqueue = function(element) {
        collection.push(element);
    };
    this.dequeue = function() {
        return collection.shift();
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length;
    };
    this.isEmpty = function() {
        return (collection.length === 0);
    };
}

const q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();


function PriorityQueue () {
    const collection = [];
    this.printCollection = function() {
      (console.log(collection));
    };
    this.enqueue = function(element){
        if (this.isEmpty()){
            collection.push(element);
        } else {
            let added = false;
            for (let i=0; i<collection.length; i++){
                 if (element[1] < collection[i][1]){ //checking priorities
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if (!added){
                collection.push(element);
            }
        }
    };
    this.dequeue = function() {
        const value = collection.shift();
        return value[0];
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length;
    };
    this.isEmpty = function() {
        return (collection.length === 0);
    };
}

const pq = new PriorityQueue();
pq.enqueue(['Beau Caren', 2]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Meats', 1]);
pq.enqueue(['Briana Swift', 2]);
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();
