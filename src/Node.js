class Node {
  constructor(value, key) {
    this.value = value;
    this.key = key;
    this.leftChild = null;
    this.rightChild = null;
  }

  getValue() {
    return this.value;
  }

  getKey() {
    return this.key;
  }

  setLeftChild(leftChild) {
    this.leftChild = leftChild;
  }

  getLeftChild() {
    return this.leftChild;
  }

  setRightChild(rightChild) {
    this.rightChild = rightChild;
  }

  getRightChild() {
    return this.rightChild;
  }
}

export default Node;
