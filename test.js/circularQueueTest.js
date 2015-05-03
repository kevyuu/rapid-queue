var Queue = require("../src/queue.js");
var expect = require("chai").expect;
describe("queue",function() {
	describe(".push()",function(){
		it ("should insert one element to the back of a queue",function(){
			var queue = Queue.createCircularQueue();
			queue.push(200);
			var front = queue.front();

			expect(front).to.equal(200);

			queue.push(300);
			expect(front).to.equal(200);
		});

		it("should add capacity when exceeded",function() {
			var queue = Queue.createCircularQueue(5);
			queue.push(1);
			queue.push(2);
			queue.push(3);
			queue.push(4);
			queue.push(5);
			queue.push(6);
			queue.push(7);

			var front = queue.shift();
			expect(front).to.equal(1);
			front = queue.shift();
			expect(front).to.equal(2);
			front = queue.shift();
			expect(front).to.equal(3);
			front = queue.shift();
			expect(front).to.equal(4);
			front = queue.shift();
			expect(front).to.equal(5);
			front = queue.shift();
			expect(front).to.equal(6);
			front = queue.shift();
			expect(front).to.equal(7);
		});
	});

	describe(".shift()",function() {
		it("should delete one element from the front",function() {
			var queue = Queue.createCircularQueue();
			queue.push(200);
			queue.push(300);
			expect(queue.shift()).to.equal(200);
			expect(queue.front()).to.equal(300);
		});

		it("should return null when empty",function() {
			var queue = Queue.createCircularQueue();
			expect(queue.shift()).to.equal(null);
		});
	});

	describe(".isEmpty()",function() {
		it("should return true when no object inside",function() {
			var queue = Queue.createCircularQueue(5);
			expect(queue.isEmpty());

			queue.push(200);
			queue.shift();
			expect(queue.isEmpty());

			queue.push(200);
			queue.shift();
			queue.push(300);
			queue.push(20);
			queue.push(30);
			queue.push(40);
			queue.push(50);
			queue.push(60);
			queue.push(70);
			queue.shift();
			queue.shift();
			queue.shift();
			queue.shift();
			queue.shift();
			queue.shift();
			queue.shift();

			expect(queue.isEmpty());
		});

		it("should return false when there is object inside",function() {
			var queue = Queue.createCircularQueue(5);

			expect(queue.isEmpty());

			queue.push(200);
			expect(!queue.isEmpty());
			queue.shift();

			queue.push(200);
			queue.shift();
			queue.push(300);
			queue.push(20);
			queue.push(30);
			queue.push(40);
			queue.push(50);
			queue.push(60);
			queue.push(70);
			queue.shift();
			queue.shift();
			queue.shift();
			queue.shift();
			queue.shift();

			expect(!queue.isEmpty());

		});
	});

	describe(".front()",function(){
		it("should throw exception when empty",function() {
			var queue = Queue.createCircularQueue(5);

			expect(queue.front()).to.equal(null);
		});
	});
});