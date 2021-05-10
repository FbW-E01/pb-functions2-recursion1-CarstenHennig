// # Recursion

// #### Calculate the sum of natural number up to n
// * Write a JavaScript program to compute the sum of an array of integers

// ```javascript
//     const array = [1, 2, 3, 4, 5, 6]
//     sum(array)  // return 21
// ```

const array = [1, 2, 3, 4, 5, 6];
//    sum(array)  // return 21

let num = 0;
let i = 0;
function sum(array) {
  for (let i = 0; i < array.length; i++) {
    num = num + array[i];
    //    console.log(num);
  }
  if (i >= 5) {
    return;
  }
  console.log(num);
}

sum(array);
