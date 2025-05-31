// implementin a linkedList and Design Double-ended Queue  

// LINKED LIST

class node {
    constructor(value) {
      this.value = value
      this.next = null;
    }
  }
   let newNode = new node(30);
   let anoter = new node(10);
   let we = new node(5);
  
  
   class linkedList {
    constructor() {
      this.head = null;
      this.size = -1;
    }
  
    insertHead(node) {
    node.next = this.head;
    this.head = node
    this.size++
    }
  
    insertTail(node) {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      
      current.next = node;
      this.size++
    }
  
    get(index) {
      if(index < 0 || index > this.size) {
        return -1
      }
    let i = 0;
    let current = this.head;
    while (i < index) {
      current = current.next
      i++
    }
  
    return current
    }
  
    remove(index) {
    let prev = null
    let current = this.head
    let i = 0
       while (i < index) {
        prev = current
        current = current.next;
        i++
       }
       prev.next = current.next;
       index--
    }
  
   }
  
  //  let list = new linkedList();
  //  list.insertHead(newNode);
  //  list.insertHead(anoter)
  //  list.insertTail(we)
  //  let index1 = list.remove(2)
  //  console.log(list,index1);


 // Design Double-ended Queue

 class Deque {
    constructor() {
      this.head = null;
      this.tail = this.head;
      this.size = 0;
    }

    insertFront(val) {
      let newNode = { value: val, next: null, prev: null };
      if(this.head) {
        let current = this.head;
        this.head = newNode;
        this.head.next = current;
        current.prev = this.head;
      }else {
        this.head = newNode;
        this.tail = this.head;
      }
      this.size++
    }

    insertBack(val) {
      let newNode = { value: val, next: null, prev: null };
      if(this.head) {
        let currentTail = this.tail;
        console.log(currentTail)
        this.tail = newNode;
        this.tail.prev = currentTail;
      currentTail.next = this.tail;
      }else {
        this.tail = newNode;
        this.head = this.tail;
      }
      this.size++
    }

    removeFront() {
      if(this.head) {
       let current = this.head;
       this.head = current.next;
       if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null; // If there's only one element, set tail to null as well
      }
       this.size--
        
       return current.value
      }else {
        return -1
      }
    }

    removeBack() {
      if(this.head) {
        let currentBack = this.tail;
        this.tail = currentBack.prev;
        if (this.tail) {
          this.tail.next = null;
        } else {
          this.head = null; // If there's only one element, set head to null as well
        }
        this.size--
        return currentBack.value
      }else {
        return -1
      }
    }

    peekFront() {
      if(this.head) {
       let current = this.head
       return current
      }else {
       return -1
      }
    }

    peekBack() {
      if(this.head) {
        let currentBack = this.tail;
        return currentBack
      }else {
        return -1
      }
    }

    isEmpty() {
      if(this.head) {
        return false
      }else {
        return true
      }
    }
  }

