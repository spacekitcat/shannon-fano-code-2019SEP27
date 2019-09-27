import divideNodeList from '../src/divideNodeList';
import Node from '../src/Node';
import expectExport from 'expect';

describe('The `divideNodeList` module', () => {
  describe('when the node list is empty', () => {
    it('should return an empty list', () => {
      expectExport(divideNodeList([])).toMatchObject({ left: [], right: [] });
    });
  });

  describe('when the node list has one Node', () => {
    it('should return an empty list', () => {
      const specifiedNode = new Node(23, 'v');
      expectExport(divideNodeList([specifiedNode])).toMatchObject({
        left: [specifiedNode],
        right: []
      });
    });
  });

  describe('when the node list has two Nodes', () => {
    it('should return an empty list', () => {
      const specifiedNodes = [new Node(23, 'v'), new Node(17, 'b')];
      expectExport(divideNodeList(specifiedNodes)).toMatchObject({
        left: [new Node(23, 'v')],
        right: [new Node(17, 'b')]
      });
    });
  });

  describe('when the node list has three Nodes', () => {
    describe('and the weight falls on the right hand side', () => {
      it('should return an empty list', () => {
        const specifiedNodes = [
          new Node(10, 'b'),
          new Node(5, 'm'),
          new Node(5, '0')
        ];
        expectExport(divideNodeList(specifiedNodes)).toMatchObject({
          left: [new Node(10, 'b')],
          right: [new Node(5, 'm'), new Node(5, '0')]
        });
      });
    });

    describe('and the weight falls on the left hand side', () => {
      it('should return an empty list', () => {
        const specifiedNodes = [
          new Node(5, 'b'),
          new Node(5, 'm'),
          new Node(10, '0')
        ];
        expectExport(divideNodeList(specifiedNodes)).toMatchObject({
          left: [new Node(5, 'b'), new Node(5, 'm')],
          right: [new Node(10, '0')]
        });
      });
    });
  });

  describe('when the node list has four Nodes', () => {
    describe('and the weight falls on the left hand side', () => {
      it('should return an empty list', () => {
        const specifiedNodes = [
          new Node(8, 'b'),
          new Node(3, 'b'),
          new Node(3, 'c'),
          new Node(3, 'e')
        ];
        expectExport(divideNodeList(specifiedNodes)).toMatchObject({
          left: [new Node(8, 'b')],
          right: [new Node(3, 'b'), new Node(3, 'c'), new Node(3, 'e')]
        });
      });
    });

    describe('and the weight is even', () => {
      it('should return an empty list', () => {
        const specifiedNodes = [
          new Node(4, 'b'),
          new Node(3, 'b'),
          new Node(3, 'c'),
          new Node(4, 'e')
        ];
        expectExport(divideNodeList(specifiedNodes)).toMatchObject({
          left: [new Node(4, 'b'), new Node(3, 'b')],
          right: [new Node(3, 'c'), new Node(4, 'e')]
        });
      });
    });

    describe('and the weight falls on the right hand side', () => {
      it('should return an empty list', () => {
        const specifiedNodes = [
          new Node(3, 'b'),
          new Node(3, 'b'),
          new Node(3, 'c'),
          new Node(8, 'e')
        ];
        expectExport(divideNodeList(specifiedNodes)).toMatchObject({
          left: [new Node(3, 'b'), new Node(3, 'b'), new Node(3, 'c')],
          right: [new Node(8, 'e')]
        });
      });
    });
  });
});
