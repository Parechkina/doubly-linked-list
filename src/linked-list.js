const Node = require('./node');

class LinkedList {

    constructor() {
        this.length = 0;
        this._tail= null;
        this._head  = null;
    }

    append(data) {
        if(this.length==0){
        var newNode = new Node(data, null, null);
        this._head = newNode;
        this._tail = newNode;
        this.length++;
    }else{
        var lastNode = this._tail;
        var newNode = new Node(data, lastNode, null);
        lastNode.next = newNode;
        this._tail = newNode;
        this.length++;
        }

    return this;

    }

    head() {
        if(this._head!=null){
           return this._head.data;
        }else{
            return null;
        }
    }

    tail() {
        if(this._tail!=null){
           return this._tail.data; 
        }else{
            return null;
        }        
    }

    at(index) {
        if(index <= this.length){
            var node = this._head;
            for(var i=0; i<index; i++){
                node = node.next;
            }
            return node.data;
        }
    }

    insertAt(index, data) {
        if(index < this.length){
            var currentNode = this._head;
            for(var i=0; i<index; i++){
                currentNode = currentNode.next;
            }
        var prevNode = currentNode.prev;        
        var newNode = new Node(data, prevNode, currentNode);
        prevNode.next = newNode;
        currentNode.prev = newNode;
        this.length++;
        }
        return this;

    }

    isEmpty() {
        if(this.length == 0) {
            return true;
        }else{
            return false;
        }
    }

    clear() {
        this._tail = null;
        this._head = null;
        this.length = 0;
        return this;

    }

    deleteAt(index) {
        if(index <= this.length){
            var node = this._head;
            for(var i=0; i<index; i++){
                node = node.next;
            }        
        
        var prevNode = node.prev;
        var nextNode = node.next;
        if(this.length>1){

            node.prev.next = nextNode;
            node.next.prev = prevNode;
        }else{

            this._head=null;
            this._tail=null;
        }
        this.length--;
        }

        return this;
    }

    reverse() { 
        var prevNode = this._head;
        this._head = this._tail;
        this._tail = prevNode;

        for (var i=0; i<this.length; i++){
                var savePrevNode = prevNode.prev;
                prevNode.prev = prevNode.next;
                prevNode.next = savePrevNode;   
                prevNode = prevNode.prev;
            }
            return this;

    }
       

    indexOf(data) {
        var node = this._head;
        var index = -1;
        for (var i=0; i<this.length; i++){
            if (data==node.data) {
                index =  i;
            }
                node = node.next;
            }
            
        return index;
        
    }
          
}

module.exports = LinkedList;

