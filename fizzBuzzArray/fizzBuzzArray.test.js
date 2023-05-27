const fizzBuzzArray = require('./fizzBuzzArray')

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.


describe('fizzBuzz array function', () => {

    it('argument given will never be less than 1',  () => {
        expect(() => fizzBuzzArray(0)).toThrowError('Number cannot be less than one, and must be a number')
        expect(() => fizzBuzzArray('2')).toThrowError('Number cannot be less than one, and must be a number')
    })
    it('Should give the value "Fizz", if one of the elements in the array is a multiple of 3', () =>{
        expect(fizzBuzzArray(3)).toEqual([1,2,"Fizz"])
    })
    it('Should give the value "Buzz", if one of the elements in the array is a multiple of 5', () => {
        expect(fizzBuzzArray(5)).toEqual([1,2,"Fizz",4,"Buzz"])
    })
    it('Should give the value "FizzBuzz", if one of the elements in the array is a multiple of 3 & 5', () => {
        expect(fizzBuzzArray(15)).toEqual([1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"])
    })
})