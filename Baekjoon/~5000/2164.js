const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()-'';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  insertLast(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this._size++;
  }

  removeFirst() {
    this.head = this.head.next;
    this.head.prev = null;
    this._size--;
  }

  getFirst() {
    return this.head.data;
  }

  getSize() {
    return this._size;
  }
}

let linkedlist = new LinkedList();

for (let i = 1; i <= input; i++) {
  linkedlist.insertLast(i);
}

while (linkedlist.getSize() != 1) {
  linkedlist.removeFirst();
  linkedlist.insertLast(linkedlist.getFirst());
  linkedlist.removeFirst();
}

console.log(linkedlist.getFirst());