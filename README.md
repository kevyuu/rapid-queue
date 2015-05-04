rapid-queue
=============
Javascript array.shift() is slow. This is an implementation using circular buffer and two stack. Circular queue use circular buffer and Double Stack Queue use two stack to implement the queue. This implementation of shift is up to 100x faster than javascript array.shift().

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
  var queue = RapidQueue.createQueue();
```

##Queue operation


###Inserting element to the end of queue

```js
  queue.push(5);`
```

push will insert 5 to the back of the queue, it will automatically grow the array if the capacity is not enough.

###Get front element

```js
  var front = queue.front();
```

It will return the front element without removing it from the queue. It will return null if queue is empty.

###Remove front element

```js
  var front = queue.shift();
```

It will return and remove front element from the queue. It will return null if queue is empty.

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


