const pickASetOfElements = require('./pickASetOfElements')

test('Passing a number as a param, this will return the first elements deriving from that number', () => {
    expect(pickASetOfElements(['a', 'b', 'c', 'd', 'e'],2)).toEqual(['a','b'])
    expect(pickASetOfElements(['a', 'b', 'c', 'd', 'e'],0)).toEqual([])
})