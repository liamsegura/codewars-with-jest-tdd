

//word -> string, just letters, no special chars not empty
//palendrome -> example Bob reversed === boB
//returns true/false


// function isPalendrome(word){
//     //word -> reverse
//     let reversedWord = word.split('').reverse().join('')
//     //word === word when reversed
//     //return word
//     if(word === reversedWord){
//         return true
//     }else{
//         return false
//     }
// }


const isPalendrome = word => word === word.split('').reverse().join('')

console.log(isPalendrome('bob'), true)
console.log(isPalendrome('car'), false)