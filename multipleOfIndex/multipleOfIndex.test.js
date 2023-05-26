const multipleOfIndex = require('./multipleOfIndex')


test('Return a new array consisting of elements which are multiple of their own index in input array ', () => {
    expect(multipleOfIndex([22, -6, 32, 82, 9, 25])).toEqual([-6, 32, 25])
})