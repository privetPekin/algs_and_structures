class LinkedListNode {
   constructor(value, next = null) {
      this.value = value;
      this.next = next;
   }
}
/**
 * @description - Простейшая структура односвязанного списка со стандартными методами
 * Сложность данных операций по вставке в то место, которое мы знаем константная O(1)
 * Вставка в произвольное место, если мы его не знаем O(n)
 * Поиск O(n)
 * Следует использовать вместо массива только в том случае, если к данным редко обращаемся, но часто его дополняем, тк особенность данной структуры в том, что
 * каждый элемент хранится в отдельной ячейке памяти, а связанность происходит из-за наличие ссылки на следующий элемент.
 */

class LinkedList {
   constructor() {
      this.root = null;
      this.tail = null;
   }
   setRoot(value) {
      const newNode = new LinkedListNode(value, this.root);
      this.root = newNode;
      if (!this.tail) {
         this.tail = newNode;
      }
      return this;
   }
   add(value) {
      const newNode = new LinkedListNode(value);
      if (!this.root || !this.tail) {
         this.root = newNode;
         this.tail = newNode;
         return this;
      }
      this.tail.next = newNode;
      this.tail = newNode;
      return this;
   }
   delete(value) {
      if (!this.root) {
         return null;
      }
      let deletedNode = null;
      while (this.root && this.root.value === value) {
         deletedNode = this.root;
         this.root = this.root.next;
      }
      let currentNode = this.root;
      if (currentNode !== null) {
         while (currentNode.next) {
            if (currentNode.next.value === value) {
               deletedNode = currentNode.next;
               currentNode.next = currentNode.next.next;
            }
            else {
               currentNode = currentNode.next;
            }
         }
      }
      if (this.tail && this.tail.value === value) {
         this.tail = currentNode;
      }
      return deletedNode;
   }
   find(value) {
      if (!this.root) {
         return null;
      }
      let currentNode = this.root;
      while (currentNode) {
         if (value !== undefined && currentNode.value === value) {
            return currentNode;
         }
         currentNode = currentNode.next;
      }
      return null;
   }
   deleteRoot() {
      if (!this.root) {
         return null;
      }
      const deletedRoot = this.root;
      if (this.root.next) {
         this.root = this.root.next;
      }
      else {
         this.root = null;
         this.tail = null;
      }
      return deletedRoot;
   }
   toArray() {
      const nodes = [];
      let currentNode = this.root;
      while (currentNode) {
         nodes.push(currentNode);
         currentNode = currentNode.next;
      }
      return nodes;
   }
   size() {
      let count = 0;
      let node = this.root;
      while (node) {
         count++;
         node = node.next
      }
      return count;
   }
   print() {
      let result = []
      let node = this.root
      while (node) {
         result.push(node.value)
         node = node.next
      }
      console.log(result);
   }
}

const list = new LinkedList()

list.add(55)
list.add(33)
list.add(66)

list.print()

list.delete(66)
list.setRoot(66)

list.print()

console.log(list.size())