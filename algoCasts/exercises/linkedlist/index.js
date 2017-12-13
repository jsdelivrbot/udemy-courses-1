// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // this.head = new Node(data, this.head);
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;

    // // If node.next === 'null' then we are at the last node
    // while (node.next) {
    //   node = node.next;
    // }

    // return node;
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    // if (!this.head) {
    //   return;
    // }

    // this.head = this.head.next;
    this.removeAt(0);
  }

  removeLast() {
    // if (!this.head) {
    //   return;
    // }

    // if (!this.head.next) {
    //   this.head = null;
    //   return;
    // }

    // let previous = this.head;
    // let node = this.head.next;

    // while (node.next) {
    //   previous = node;
    //   node = node.next;
    // }
    // previous.next = null;
    this.removeAt(this.size() - 1)
  }

  insertLast(data) {
    // const last = this.getLast();

    // if (last) {
    //   // There are some existing nodes in our chain
    //   last.next = new Node(data);
    // } else {
    //   // The chain is empty!
    //   this.head = new Node(data);
    // }
    this.insertAt(data, this.size())
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };


















