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
  var dsQueue = RapidQueue.createDoubleStackQueue();
  var circularQueue = RapidQueue.createCircularQueue
```

RapidQueue.createQueue is the same as RapidQueue.createDoubleStackQueue

##Queue operation

All of the operation below is aplicable to both double-stack-queue and circular-queue

###Inserting element to the end of queue

```js
  queue.push(5);`
```

push will insert 5 to the back of the queue, it will automatically grow the array if the capacity is not enough(for circular queue).

###Get front element

```js
  var front = queue.front();
```

It will return the front element without removing it from the queue. If queue is empty it will return null.

###Remove front element

```js
  var front = queue.shift();
```

It will return and remove front element from the queue. If queue is empty it will return null and do nothing to the queue.

###Get queue length

```js
  var length = queue.length()
```

It will return the number of element inside queue;

###Check if queue is empty

```js
  var isEmpty = queue.isEmpty()
```
