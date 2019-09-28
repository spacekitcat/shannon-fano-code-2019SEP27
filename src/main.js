import fs from 'fs';
import process from 'process';
import ByteOccurrenceCountStream from './ByteOccurrenceCountStream';
import Node from './Node';
import divideNodeList from './divideNodeList';

const createLeafList = occurrences => {
  const filteredList = Object.keys(occurrences).filter(key => key !== '10');

  return filteredList.map(key => {
    if (key === '10') {
      return null;
    }
    return new Node(occurrences[key], Buffer.from([key]));
  });
};

const generateTree = leafList => {
  if (leafList.length === 1) {
    return new Node(leafList[0].getValue(), leafList[0].getKey());
  }

  const dividedList = divideNodeList(leafList);
  const internalNode = new Node('', '');
  internalNode.leftChild = generateTree(dividedList.left);
  internalNode.rightChild = generateTree(dividedList.right);
  return internalNode;
};

const traverseTree = (rootNode, prefix = '') => {
  if (rootNode === null) {
    return;
  }

  if (rootNode.getLeftChild() === null && rootNode.getRightChild() === null) {
    process.stdout.write(`${prefix}\t${rootNode.getKey().toString('utf8')}\n`);
  }

  if (rootNode.getLeftChild() !== null) {
    traverseTree(rootNode.getLeftChild(), `${prefix}0`);
  }

  if (rootNode.getRightChild() !== null) {
    traverseTree(rootNode.getRightChild(), `${prefix}1`);
  }
};

/** This is prototype code, hence the lack of tests. */
const SayHello = () => {
  const fileName = process.argv[2];
  const fileReadStream = fs.createReadStream(fileName);
  const occurrenceCountStream = new ByteOccurrenceCountStream();

  fileReadStream.on('end', () => {
    const leafList = createLeafList(occurrenceCountStream.getOccurrences());
    const treeRootNode = generateTree(leafList);
    traverseTree(treeRootNode);
  });

  fileReadStream.pipe(occurrenceCountStream);
};

SayHello();
