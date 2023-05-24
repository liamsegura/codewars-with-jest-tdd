
// const vowels = [97, 101, 105, 111, 117]

const checkValuesForVowel = (arr) => {
    
const vowels = [97, 101, 105, 111, 117]
    let newArrayWithVowels = arr.map(e => {
        if (e === 97){
         return e = 'a'
        }else if(e === 101){
         return e = 'e'
        }else if(e === 105){
         return e = 'i'
        }else if(e === 111){
         return e = 'o'
        }else if(e === 117){
         return e = 'u'
        }else{
         return e
        }
    })
return newArrayWithVowels
}

module.exports = checkValuesForVowel