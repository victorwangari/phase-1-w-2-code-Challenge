// this code definesa function that takes string as an input and swaps the case of each character 

function swapCase (string) {
    // declarind newString which is initialized as an empty string.
    let newString = "";
    // iterating a function over each character using for..of loop.
    for (let char of string) {
        // comparing cases in the character (uppercase and lowercase),
        if(char === char.toUpperCase()) {
            newString += char.toLowerCase();
        }
        else if (char === char.toLowerCase()){
            newString += char.toUpperCase();
        }
        // if character is neither uppercase nor lowercase     it remains unchanged.
        else {
            newString += char;
        }
    }
    // return after all character have been processed
    return newString;
}

  
// the function is called
let string = "tHE qUICK bROWN fOX";
console.log(swapCase(string));