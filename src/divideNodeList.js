const getNodeListSum = (nodeList, stopAtIndex) => {
  let sum = 0;

  for (let i = 0; i <= stopAtIndex; ++i) {
    sum += nodeList[i].value;
  }

  return sum;
};

const getWeightDiff = (firstWeight, secondWeight) =>
  Math.max(firstWeight, secondWeight) - Math.min(firstWeight, secondWeight);

export default nodeList => {
  if (nodeList && nodeList.length <= 1) {
    ({ left: nodeList, right: [] });
  }

  const nodeListTotalWeight = getNodeListSum(nodeList, nodeList.length - 1);
  const nodeListPivotWeight = (nodeListTotalWeight / 2);
  let indexWeightDiffsWithPivot = [];
  for (let i = 0; i < nodeList.length; ++i) {
    indexWeightDiffsWithPivot[i] = getWeightDiff(
      nodeListPivotWeight,
      getNodeListSum(nodeList, i)
    );
  }

  const pivotIndex = indexWeightDiffsWithPivot.indexOf(
    Math.min(...indexWeightDiffsWithPivot)
  );

  return {
    left: nodeList.slice(0, pivotIndex + 1),
    right: nodeList.slice(pivotIndex + 1)
  };
};
