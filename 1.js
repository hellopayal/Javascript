//Problem:

//Given an array of numbers, return only the even numbers multiplied by 2.

function evenNumber(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result.push(array[i])
        }
    }
    
console.log(result);
return result;
}
let array = [1, 2, 3, 4, 5, 6, 9];
evenNumber(array);