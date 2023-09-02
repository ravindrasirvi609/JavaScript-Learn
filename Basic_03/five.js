/***********************************************************************************
 ****************************** HIGHER ORDER FUNCTION ******************************
 ***********************************************************************************/

// foreach loop --
const arr1 = [1, 4, 6, 3, 7, 8];

arr1.forEach(function (item) {
  console.log(item);
});

arr1.forEach((item) => {
  console.log(item);
});

// filter loop --

const arr2 = [1, 4, 6, 3, 7, 8];

const filterValues = arr2.filter((item) => {
  return item > 4;
});
console.log( filterValues);
