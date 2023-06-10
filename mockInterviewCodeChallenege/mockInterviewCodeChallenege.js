
const returnIndexIfCapital = (str) => {

    let result = str.split('')
    let arr = []

        for(let i = 0;i<result.length;i++){
            
            if(result[i] == result[i].toUpperCase()){
             arr.push(i)
            }
            
        }
       return arr
}

module.exports = returnIndexIfCapital