const replaceStringBinary = (str) => {
    if (str === '' || typeof str !== 'string') {
        throw new Error('Input must be a string and cannot be empty');
      }
      return str.split('').map(e => e < 5 ? 0 : 1).join('');
}

module.exports = replaceStringBinary