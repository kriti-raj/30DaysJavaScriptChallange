// Activity 1: Linked List

// Task 1:

const Task1 = () => {
    class Node {
        constructor(value, next = null) {
            this.value = value;
            this.next = next;
        }
    }
    let firstNode = new Node(1);
    let secondNode = new Node(2);
    firstNode.next = secondNode;
    console.log(firstNode);
    console.log(secondNode);
}
Task1();

// Task 2:

const Task2 = () => {
    class Node {
        constructor(value, next = null) {
            this.value = value;
            this.next = next;
        }
    }
    class LinkedList {
        constructor() {
            this.head = null;
        }
        add(value) {
            const newNode = new Node(value);
            if (this.head === null) {
                this.head = newNode;
            } else {
                let current = this.head;
                while (current.next !== null) {
                    current = current.next;
                }
                current.next = newNode;
            }
        }
        remove() {
            if (this.head === null) {
                return null;
            } else if (this.head.next === null) {
                const value = this.head.value;
                this.head = null;
                return value;
            } else {
                let current = this.head;
                while (current.next.next !== null) {
                    current = current.next;
                }
                const value = current.next.value;
                current.next = null;
                return value;
            }
        }
        display() {
            let current = this.head;
            while (current !== null) {
                console.log(current.value);
                current = current.next;
            }
        }
    }
    let list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.display();
    console.log("Removed:", list.remove());
    list.display();
}
Task2();

// Activity 2: Stack

// Task 3:

const Task3 = () => {
    class Node {
        constructor(value, next = null) {
            this.value = value;
            this.next = next;
        }
    }
    class Stack {
        constructor() {
            this.top = null;
        }
        push(value) {
            const newNode = new Node(value);
            newNode.next = this.top;
            this.top = newNode;
        }
        pop() {
            if (this.top === null) return null;
            const poppedValue = this.top.value;
            this.top = this.top.next;
            return poppedValue;
        }
        peek() {
            return this.top ? this.top.value : null;
        }
    }
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    console.log(stack.peek());
    console.log(stack.pop());
    console.log(stack.peek());
}
Task3();

// Task 4:

const Task4 = () => {
    class Node {
        constructor(value, next = null) {
            this.value = value;
            this.next = next;
        }
    }
    class Stack {
        constructor() {
            this.top = null;
        }
        push(value) {
            const newNode = new Node(value);
            newNode.next = this.top;
            this.top = newNode;
        }
        pop() {
            if (this.top === null) return null;
            const poppedValue = this.top.value;
            this.top = this.top.next;
            return poppedValue;
        }
        peek() {
            return this.top ? this.top.value : null;
        }
        isEmpty() {
            return this.top === null;
        }
    }
    const reverseString = (str) => {
        const stack = new Stack();
        for (let char of str) {
            stack.push(char);
        }
        let reversedStr = '';
        while (!stack.isEmpty()) {
            reversedStr += stack.pop();
        }
        return reversedStr;
    }
    const inputString = "hello";
    console.log(reverseString(inputString));
}
Task4();

// Activity 3: Queue

// Task 5:

const Task5 = () => {
    class Node {
        constructor(value, next = null) {
            this.value = value;
            this.next = next;
        }
    }
    class Queue {
        constructor() {
            this.front = null;
            this.rear = null;
        }
        enqueue(value) {
            const newNode = new Node(value);
            if (this.rear === null) {
                this.front = this.rear = newNode;
            } else {
                this.rear.next = newNode;
                this.rear = newNode;
            }
        }
        dequeue() {
            if (this.front === null) return null;
            const dequeuedValue = this.front.value;
            this.front = this.front.next;
            if (this.front === null) this.rear = null;
            return dequeuedValue;
        }
        frontElement() {
            return this.front ? this.front.value : null;
        }
    }
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    console.log(queue.frontElement());
    console.log(queue.dequeue());
    console.log(queue.frontElement());
}
Task5();

// Task 6:

const Task6 = () => {
    class Node {
        constructor(value, next = null) {
            this.value = value;
            this.next = next;
        }
    }
    class Queue {
        constructor() {
            this.front = null;
            this.rear = null;
        }
        enqueue(value) {
            const newNode = new Node(value);
            if (this.rear === null) {
                this.front = this.rear = newNode;
            } else {
                this.rear.next = newNode;
                this.rear = newNode;
            }
        }
        dequeue() {
            if (this.front === null) return null;
            const dequeuedValue = this.front.value;
            this.front = this.front.next;
            if (this.front === null) this.rear = null;
            return dequeuedValue;
        }
        frontElement() {
            return this.front ? this.front.value : null;
        }
        isEmpty() {
            return this.front === null;
        }
    }
    class PrinterQueue {
        constructor() {
            this.queue = new Queue();
        }
        addPrintJob(job) {
            console.log(`Adding print job: ${job}`);
            this.queue.enqueue(job);
        }
        processPrintJobs() {
            while (!this.queue.isEmpty()) {
                const job = this.queue.dequeue();
                console.log(`Processing print job: ${job}`);
            }
        }
    }
    let printerQueue = new PrinterQueue();
    printerQueue.addPrintJob("Document1.pdf");
    printerQueue.addPrintJob("Photo.jpg");
    printerQueue.addPrintJob("Resume.docx");
    printerQueue.processPrintJobs();
}
Task6();

// Activity 4: Binary Tree

// Task 7:

const Task7 = () => {
    class TreeNode {
        constructor(value, left = null, right = null) {
            this.value = value;
            this.left = left;
            this.right = right;
        }
    }
    let root = new TreeNode(1);
    let leftChild = new TreeNode(2);
    let rightChild = new TreeNode(3);
    root.left = leftChild;
    root.right = rightChild;
    console.log(root);
}
Task7();

// Task 8:

const Task8 = () => {
    class TreeNode {
        constructor(value, left = null, right = null) {
            this.value = value;
            this.left = left;
            this.right = right;
        }
    }
    class BinaryTree {
        constructor() {
            this.root = null;
        }
        insert(value) {
            const newNode = new TreeNode(value);
            if (this.root === null) {
                this.root = newNode;
            } else {
                this._insertNode(this.root, newNode);
            }
        }
        _insertNode(node, newNode) {
            if (newNode.value < node.value) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    this._insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    this._insertNode(node.right, newNode);
                }
            }
        }
        inOrderTraversal() {
            this._inOrderTraversalNode(this.root);
        }
        _inOrderTraversalNode(node) {
            if (node !== null) {
                this._inOrderTraversalNode(node.left);
                console.log(node.value);
                this._inOrderTraversalNode(node.right);
            }
        }
    }
    let tree = new BinaryTree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    tree.insert(2);
    tree.insert(4);
    tree.insert(6);
    tree.insert(8);
    tree.inOrderTraversal();
}

Task8();

// Activity 5: Graph(Optional)

// Task 9:

// Task 10: