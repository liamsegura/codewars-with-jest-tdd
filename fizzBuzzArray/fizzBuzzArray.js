
const fizzBuzzArray = (n) => {

    let fizzBuzz = []

    if(n < 1 || typeof n !== "number" ){
        throw new Error('Number cannot be less than one, and must be a number')
    }else{

        for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
              fizzBuzz.push('FizzBuzz');
            } else if (i % 3 === 0) {
              fizzBuzz.push("Fizz");
            } else if (i % 5 === 0) {
              fizzBuzz.push("Buzz");
            } else {
              fizzBuzz.push(i);
            }
          }
    return fizzBuzz
}
}

module.exports = fizzBuzzArray