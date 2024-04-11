function mergeSort(numbers) {
  if (numbers.length == 1) {
    return numbers;
  } else {
    const mid = numbers.length / 2;
    const firstHalf = mergeSort(numbers.slice(0, mid));
    const secondHalf = mergeSort(numbers.slice(mid, numbers.length));

    return merge(firstHalf, secondHalf);
  }
}

function merge(firstArray, secondArray) {
  const newArray = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < firstArray.length && j < secondArray.length) {
    if (firstArray[i] < secondArray[j]) {
      newArray[k++] = firstArray[i++];
    } else {
      newArray[k++] = secondArray[j++];
    }
  }

  for (i; i < firstArray.length; i++) {
    newArray[k++] = firstArray[i];
  }

  for (j; j < secondArray.length; j++) {
    newArray[k++] = secondArray[j];
  }

  return newArray;
}
