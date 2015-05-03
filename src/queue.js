var circularQueue = require("./circular-queue.js");
var doubleStackQueue = require("./double-stack-queue");

module.exports = {
	createCircularQueue : circularQueue.createQueue,
	createDoubleStackQueue : doubleStackQueue.createQueue,
	createQueue : doubleStackQueue
};