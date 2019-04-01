import uniqueRandomArray from 'unique-random-array'
const threeKingdomsNames = require('./threekingdoms-names.json')

const mainExport = {
  all: threeKingdomsNames,
  random: uniqueRandomArray(threeKingdomsNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
