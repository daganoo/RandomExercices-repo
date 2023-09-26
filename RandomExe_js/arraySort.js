
let arr = [55, 2, 9, 1, 9];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let chh = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = chh;
    }
  }
}
console.log(arr);

 //explain the exercice :sort an array 