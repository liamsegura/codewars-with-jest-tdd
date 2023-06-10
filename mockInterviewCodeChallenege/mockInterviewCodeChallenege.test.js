const returnIndexIfCapital = require('./mockInterviewCodeChallenege')

//string, split to array,
describe("Return index of each Capital within the given string", () => {
    it('Should return Capital letter indexs', () => {
        expect(returnIndexIfCapital('ExAmple')).toEqual([0,2])
    })
})