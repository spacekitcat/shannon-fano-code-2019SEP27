const getNodeListSum = (nodeList, stopAtIndex) => {
  let sum = 0;

  for (let i = 0; i <= stopAtIndex; ++i) {
    sum += nodeList[i].value;
  }

  return sum;
};

const getNodeListOptimalPivot = nodeList =>
  getNodeListSum(nodeList, nodeList.length - 1) / 2;

const getWeightDiff = (firstWeight, secondWeight) =>
  Math.max(firstWeight, secondWeight) - Math.min(firstWeight, secondWeight);

const getWeightDiffs = nodeList => {
  const nodeListPivotWeight = getNodeListOptimalPivot(nodeList);
  let indexWeightDiffsWithPivot = [];
  for (let i = 0; i < nodeList.length; ++i) {
    indexWeightDiffsWithPivot[i] = getWeightDiff(
      nodeListPivotWeight,
      getNodeListSum(nodeList, i)
    );
  }

  return indexWeightDiffsWithPivot;
};

const getIndexOfActualPivot = nodeListOptimalPivotDiffs => {
  return nodeListOptimalPivotDiffs.indexOf(
    Math.min(...nodeListOptimalPivotDiffs)
  );
};

export default nodeList => {
  if (nodeList && nodeList.length <= 1) {
    ({ left: nodeList, right: [] });
  }

  const indexWeightDiffs = getWeightDiffs(nodeList);
  const pivotIndex = getIndexOfActualPivot(indexWeightDiffs);

  return {
    left: nodeList.slice(0, pivotIndex + 1),
    right: nodeList.slice(pivotIndex + 1)
  };
};
