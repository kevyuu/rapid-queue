rapid-queue
=============
Javascript array.shift() is slow. This is an implementation of queue using circular buffer and table doubling. This implementation of shift is up to 100x faster than javascript array.shift().

##Installation

```shell
	npm install rapid-queue
```

##Usage

Before using it, require the module

```js
	var RapidQueue = require('rapid-queue');
```

###Creating queue

```js
  var queue = RapidQueue.createQueue(5);
```

It will create queue with initial capacity of 5, if you don't specify capacity, the capacity of the newly created queue is 200

###Inserting element to the end of queue

```js
  queue.push(5);`
```

push will insert 5 to the back of the queue, it will automatically grow the array if the capacity is not enough.

###Get front element

```js
  var front = queue.front();
```

It will return the front element without removing it from the queue

###Remove front element

```js
  var front = queue.shift();
```

It will return and remove front element from the queue.

###Get queue length

```js
  var length = queue.length()
```

It will return the number of element inside queue;

###Check if queue is empty

```js
  var isEmpty = queue.isEmpty()
```

##Performance

This is comparison using RapidQueue shift() and Array shift()

http://jsperf.com/rapidqueue-shift-vs-array-shift

As you can see, it is significantly faster

This is comparison using RapidQueue push() and Array push()

http://jsperf.com/rapidqueue-push-vs-array-push

RapidQueue.push() is faster on chrome but can be 2-3 times slower in another browser. This slowdown is not as significant as Array.shift() vs RapidQueue.shift(). This slowdown is due to having additional internal state for circular buffer implementation.


