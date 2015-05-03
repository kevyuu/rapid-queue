function createQueue(intialCapacity) {
	var that = {};
	var head = 0;
	var tail = 0;
	var length = 0;
	var currentSize = (typeof initialCapacity === undefined) ? initialCapacity : 200;
	var container = [];
	container.length=currentSize;

	function doubling() {
		var currentSource = head;
		var currentTarget = 0;
		var newContainer = [];
		newContainer.length = 2*currentSize;

		while (currentTarget < currentSize) {
			newContainer[currentTarget] = container[currentSource];
			currentSource++;
			currentTarget++;
			if (currentSource == currentSize) {
				currentSource = 0;
			}
		}
		container = newContainer;
		head = 0;
		tail = currentSize;
		currentSize *= 2;
	}

	function shrink() {
		var currentSource = head;
		var currentTarget = 0;
		var newContainer = [];
		newContainer.length = currentSize/4;

		while (currentTarget < currentSize) {
			newContainer[currentTarget] = container[currentSource];
			currentSource++;
			currentTarget++;
			if (currentSource == currentSize) {
				currentSource = 0;
			}
		}
		container = newContainer;
		head = 0;
		tail = currentSize;
		currentSize /= 4;
	}

	that.push = function(element) {
		if (length == currentSize) {
			doubling();
		}
		container[tail] = element;
		length++;
		tail++;
		if (tail == currentSize) {
			tail = 0;
		}
	};

	that.shift = function() {
		if (length === 0) {
			throw new EmptyQueueException();
		}
		tmp = container[head];
		head++;
		length--;
		if (head == currentSize) {
			head = 0;
		}
		if (length == currentSize/4 && length > initialCapacity) {
			shrink();
		}
		return tmp;
	};


	that.front = function() {
		if (length === 0) {
			throw new EmptyQueueException();
		}
		return container[head];
	};

	that.length = function() {
		return length;
	};

	that.isEmpty = function() {
		return length === 0;
	};

	return that;
}

function EmptyQueueException () {
	this.message = "Operation cannot be done because queue is empty";
	this.name = "EmptyQueueException";
}

module.exports = {
	createQueue : createQueue,
	EmptyQueueException : EmptyQueueException
};



