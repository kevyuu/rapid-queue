rapid-queue
=============
Javascript array.shift() is slow. This is an implementation of queue using circular buffer and table doubling. This implementation of shift is up to 100x faster than javascript array.shift().

#How to use
##Creating queue
`var queue = RapidQueue.createQueue(5);`

It will create queue with initial capacity of 5, if you don't specify capacity, the capacity of the newly created queue is 200

##Inserting element to the end of queue
`queue.push(5);`

push will insert 5 to the back of the queue, it will automatically grow the array if the capacity is not enough.

##Get front element
`var front = queue.front();`

It will return the front element without removing it from the queue

##Remove front element
`var front = queue.shift();`

It will return and remove front element from the queue.

##Get queue length
`var length = queue.length()`

It will return the number of element inside queue;

##check if queue is empty
`var isEmpty = queue.isEmpty()`
