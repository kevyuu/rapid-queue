var Queue = require("./src/queue.js");

//create queue with 5 initialCapacity
var queue = FastQueue.createQueue(5);

//insert element to queue with insert(obj)
queue.push(1);
//queue : [1]

queue.push(2);
//queue : [1,2]

//get most front element
//throw EmptyQueueException if empty
console.log(queue.front());
//output : 1

//get queue length
console.log(queue.getLength());
//output : 2

//return true if empty and false if not
console.log(queue.isEmpty());
//output : false

//return most front element and remove it from queue
//throw EmptyQueueException if empty
var tmp = queue.shift();
console.log(tmp); //output : 1;
//queue : [2];