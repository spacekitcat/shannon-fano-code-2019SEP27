import divideNodeList from './divideNodeList';
import expectExport from 'expect';

describe('The `divideNodeList` module', () => {
  describe('when the node list is empty', () => {
    it('should return an empty list', () => {
      expectExport(divideNodeList([])).toBe([]);
    });
  })
})
