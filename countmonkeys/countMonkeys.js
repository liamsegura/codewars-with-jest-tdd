

const countMonkeys = (n) => {
    let monkeyArray = []
    for(let i = 0;i < n;i++){
        monkeyArray.push(i+1)
    }
    return monkeyArray
}

module.exports = countMonkeys