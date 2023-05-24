
const geeseFilter = (arr) => {

    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim"]
    return arr.filter(e => !geese.includes(e))
}

module.exports = geeseFilter