

const nthPower = (array, N) => {
    return array.length -1 >= N ? Math.pow(array[N], N) : -1
}

module.exports = nthPower