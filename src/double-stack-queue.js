function createDoubleStackQueue() {
	var that = {};
	var pushContainer = [];
	var popContainer = [];

	function moveElementToPopContainer() {
		while (pushContainer.length !==0 ) {
			var element = pushContainer.pop();
			popContainer.push(element);
		}
	}

	that.push = function(element) {
		pushContainer.push(element);
	};

	that.shift = function() {
		if (popContainer.length === 0) {
			moveElementToPopContainer();
		}
		if (popContainer.length === 0) {
			return null;
		} else {
			return popContainer.pop();
		}
	};

	that.front = function() {
		if (popContainer.length === 0) {
			moveElementToPopContainer();
		}
		if (popContainer.length === 0) {
			return null;
		}
		return popContainer[popContainer.length - 1];
	};

	that.length = function() {
		return pushContainer.length + popContainer.length;
	};

	that.isEmpty = function() {
		return (pushContainer.length + popContainer.length) === 0;
	};

	return that;
}

module.exports = {
	createQueue : createDoubleStackQueue
};

http://jsperf.com/rapidqueue-shift-vs-array-shift/2
