
const sumArray = (arr) => {

    //check elements in array are numbers

    arr.forEach(e => {
        if(typeof e !== 'number'){
            throw new Error('Array must contain only numbers')
        }
    });

    return  arr.reduce((a,b) => a + b, 0)
    
}


module.exports = sumArray