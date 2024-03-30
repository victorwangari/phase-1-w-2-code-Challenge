// this code defines two function and the uses them to find prime  numbers within a give array of number.


// this function  checks whether given numbers prime or not 
function getPrime (number){
    // checks whether number is less or equal to 1
    if(number <= 1) return false;
    // checks whether number is less or equal to 3
    if(number <= 3) return true;
    // checks whether number is divisible by 2 or 3
    if(number % 2 === 0 || number % 3 === 0) return false;
    // using for loop allows me to execute a block of codes multiple times. 
    // a variable i is declared which initializes a starting value 5.
    // the second conditions gives a square of i ,which hepls in iterating up the square root of the number
    // the  third conditions is an increament which increases the value of i by 6 in each iterations, this is used to skip even numbers in prime numbers calculates.
    for (let i = 5; i * i <= number; i+=6){
        // checks whether the number is divible by 5 and 7
        if(number % i === 0 || number %(i + 2) === 0){
            return false;
        }
    }

    return true;

}
// define a functions filterPrimes , filter method is used to create a new array with with all elements that passes the test implemented by the provided funtion
function filterPrimes(numbers){
    return numbers.filter(number => getPrime(number))
}
//  a variable inputs is describe which gives an array of numbers
const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// a variable primeNumbers is used to store the price numbers generated  
const primeNumbers = filterPrimes(inputs)
console.log(primeNumbers);
