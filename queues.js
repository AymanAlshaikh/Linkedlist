class Node {
  constructor(groupsize = 12, next = null) {
    //this.data = data;
    this.groupsize = groupsize;
    this.next = next;
  }
}

class Queue {
  constructor(limit = 5) {
    this.front = null;
    this.back = null;
    this.length = 0;
    this.limit = limit;
    this.time = 0;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;

  peek = () =>
    this.isEmpty() ? `Queue Underflow` : `groupsize: ${this.groupsize}`;

  addNode = (groupsize) => {
    const newNode = new Node(groupsize);
    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      this.back.next = newNode;
    }

    this.back = newNode;
    this.length++;
    this.time += groupsize * 0.5;
  };

  enqueue = (groupsize) => {
    if (this.isFull()) {
      console.log("Queue Overflow");
    } else {
      let people = groupsize;
      while (people > 12) {
        this.addNode(12);
        people -= 12;
      }
      this.addNode(people);
    }
    //this.length++;
  };
  //};

  dequeue = () => {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
    } else {
      const removed = this.front;
      if (this.length === 1) {
        this.front = null;
        this.back = null;
      } else {
        this.front = removed.next;
      }
      this.length--;
      this.time -= removed.groupsize * 0.5;
      return removed.groupsize;
    }
  };

  waiting = (groupsize) => {
    //let time = groupsize * 0.5 * this.length;
    if (this.isEmpty()) {
      `No waiting time, groupsize is ${this.groupsize} `;
    } else {
      console.log(`The waiting time is ${this.time} min`);
      //console.log(`groupsize ${this.front.groupsize}`);
    }
  };

  size = () => {
    if (this.groupsize <= 12) {
      peek = () =>
        this.isEmpty() ? `Queue Underflow` : `groupsize: ${this.groupsize}`;
    } else {
      ride.enqueue("A", this.groupsize - 12);
    }
  };
}

const ride = new Queue();
//ride.dequeue();
ride.enqueue(9);
console.log(ride.waiting());
ride.enqueue(4);
console.log(ride.waiting());
ride.enqueue(1);
console.log(ride.waiting());
ride.enqueue(4);
console.log(ride.waiting());
//console.log(ride.peek());
ride.dequeue();
console.log(ride.waiting());
ride.dequeue();
console.log(ride.waiting());
console.log(`groupsize is ${ride.front.groupsize}`);
