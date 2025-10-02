

const myArray: number[]= [1, 2, 3, 5, 6];
const myArray2 = structuredClone(myArray);

myArray.push(22);
myArray2.push(5);

console.log(myArray, myArray2)