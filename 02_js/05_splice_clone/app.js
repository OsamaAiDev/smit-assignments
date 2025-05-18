function modifyArray(arr, index, count, ...elements) {
  let extracted = [];
  let resultArray = arr
    .slice(0, index)
    .concat(elements, arr.slice(index + count));

  for (let i = index; i < index + count && i < arr.length; i++) {
    extracted.push(arr[i]);
  }

  arr.length = 0;
  arr.push(...resultArray);

  return extracted;
}

let numbers = [1, 2, 3, 4, 5];
let deletedItems = modifyArray(numbers, 2, 2, 6, 7);
console.log(numbers);
console.log(deletedItems);
