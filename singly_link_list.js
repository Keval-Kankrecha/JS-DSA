class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtEnd(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  insertAtFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  printLinkedList() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  deleteElement(value) {
    if (!this.head) {
      console.log("EMPTY LINK LIST");
      return;
    }
    if (this.head.value == value) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    let found = false;
    while (currentNode.next) {
      if (currentNode.next.value == value) {
        currentNode.next = currentNode.next.next;
        found = true;
        break;
      }
      currentNode = currentNode.next;
      if (!found) {
        console.log("SORRY ELEMENT IS NOT PRESENT");
      }
    }
  }

  getLength(){
    let currentNode = this.head
    let count = 0
    while(currentNode.next){
        count++;
        currentNode = currentNode.next
    }
    return count
  }
}

const linklist = new LinkedList();
linklist.insertAtEnd(10);
linklist.insertAtEnd(120);
linklist.insertAtEnd(130);
linklist.insertAtFirst(50);
linklist.insertAtEnd(220);
linklist.insertAtFirst(90);
linklist.printLinkedList();
linklist.deleteElement(90);
console.log("-------------------");
linklist.printLinkedList();
console.log("-------------------");
const len = linklist.getLength()
console.log(len)