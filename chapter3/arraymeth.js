let myArray =[11,22,33,44,55];
//length
console.log(myArray.length);
//to string
const arrayToString = myArray.toString();
console.log(arrayToString);
// push add elements to the end of the array
myArray.push(66);
console.log(myArray);
//pop Remove the last element from the array and return it.
const popElement = myArray.pop();
console.log(myArray);// the array will show with deleted element
console.log(popElement);// only deleted number will show
//unshift Add elements at starting of the array
myArray.unshift(0);
console.log(myArray);
//shift first Element delete 
myArray.shift(0);
console.log(myArray);

