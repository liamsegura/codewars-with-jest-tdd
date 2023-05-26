const replaceStringBinary = require('./replaceStringBinary')

//Given a string of digits, you should replace any digit below 5 with '0' 
//and any digit 5 and above with '1'. Return the resulting string.

//Note: input will never be an empty string

it('throws an error if the input is not a string or is an empty string', () => {
    expect(() => replaceStringBinary('')).toThrowError('Input must be a string and cannot be empty');
    expect(() => replaceStringBinary(1)).toThrowError('Input must be a string and cannot be empty');
    expect(() => replaceStringBinary(undefined)).toThrowError('Input must be a string and cannot be empty');
  });

it('if the number in a string is below 5, string will be replaced with 0, 1 if above', () => {
    expect(replaceStringBinary('2467')).toBe('0011')
    expect(replaceStringBinary('124681')).toBe('000110')
    expect(replaceStringBinary('124681')).toBe('000110')
})



