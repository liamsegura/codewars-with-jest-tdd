const geeseFilter = require('./geeseFilter')

test('Filtered out geese strings from array', () => {
    expect(geeseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Test"])).toStrictEqual(["Test"])
})