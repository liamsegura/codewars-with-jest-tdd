const checkValuesForVowel = require('./checkValuesForVowel')


test('Check if for lowercase vowels ASCI numbers, replace with string of said vowel if true', () => {
    expect(checkValuesForVowel([97, 101, 105, 111, 117])).toStrictEqual(['a','e','i','o','u'])
    expect(checkValuesForVowel([97, 101, 105, 102, 117])).toStrictEqual(['a','e','i',102,'u'])
})