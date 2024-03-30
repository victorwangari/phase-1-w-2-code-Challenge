// this code generates an array of numbers btw two values

// difine a function that takes  two parameters
function getNum (start, end){
    // declare a var to an empty array which will store generated numbers.
    let results = [];
    // functions checks if the start values is less or equal to end value, for loop iterates from start to end nad pushes each number to the results array
    if(start <= end) {
        for (let i = start; i <= end; i++){
            results.push(i);
        }
    }
    else {
        for ( let i = start; i >= end; i--){
            results.push(i);
        }
    }
    // function returns the results
    return results;
}
// the getNum is called with an argument of numbers start and end 
let numbers = getNum (4, 7);
console.log(numbers);