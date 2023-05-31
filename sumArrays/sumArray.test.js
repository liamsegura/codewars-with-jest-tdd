const sumArray = require('./sumArray')


// Write a function that takes an array of numbers and 
// returns the sum of the numbers. 
// The numbers can be negative or non-integer. 
// If the array does not contain any numbers then you should return 0.


describe('Sum Arrays', () => {
    it('Array elements must be numbers', () => {
        expect(() =>  sumArray([1,'2'])).toThrowError('Array must contain only numbers') 
    })

    it('Should sum all numbers together and return the number', () => {
        expect(sumArray([1, 5.2, 4, 0, -1])).toBe(9.2)
    })

    it('Should return 0 if array is empty', () => {
        expect(sumArray([])).toBe(0)
    })
})