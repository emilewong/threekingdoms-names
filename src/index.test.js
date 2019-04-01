import {expect} from 'chai'
import threeKingdomsNames from '.'

describe('threekingdoms-names', () => {
  it('should have a list of all available names', () => {
    expect(threeKingdomsNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(threeKingdomsNames.random()).to.satisfy(isIncludedIn(threeKingdomsNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
