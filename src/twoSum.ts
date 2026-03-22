// nested loop for array[i] and array[i + 1]

const twoSum = (numArr: number[], sum: number): number[] => {
  let result: number[] = [];
  for (let i = 0; i < numArr.length; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[i] + numArr[j] === sum) {
        result = [i, j];
        console.log(result);
        return [i, j];
      }
    }
  }

  console.log(result);
  return [];
};

twoSum([0, 1, 2, 3], 5);
