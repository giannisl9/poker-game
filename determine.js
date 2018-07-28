const RANK = require('./card.js').RANK
const _ = require('lodash')

const rankValue = new Map()
  .set(RANK.TWO, 2)
  .set(RANK.THREE, 3)
  .set(RANK.FOUR, 4)
  .set(RANK.FIVE, 5)
  .set(RANK.SIX, 6)
  .set(RANK.SEVEN, 7)
  .set(RANK.EIGHT, 8)
  .set(RANK.NINE, 9)
  .set(RANK.TEN, 10)
  .set(RANK.JACK, 11)
  .set(RANK.QUEEN, 12)
  .set(RANK.KING, 13)
  .set(RANK.ACE, 14)

function checkStraight (hand) {
  let cards = hand.cards.sort(function (a, b) { return rankValue.get(a.rank) - rankValue.get(b.rank) })
  let prev = rankValue.get(cards[0].rank) - 1
  let res = true
  cards.forEach(function (card) {
    if (prev + 1 !== rankValue.get(card.rank) && (!(prev === 5 && card.rank === RANK.ACE))) res = false
    prev = prev + 1
  })
  return res
}

function determine (hand) {
  let res1 = _.groupBy(_.groupBy(hand.cards, 'rank'), 'length')
  let res2 = _.groupBy(_.groupBy(hand.cards, 'suit'), 'length')
  let res3 = checkStraight(hand)
  if (res3 && res2['5'] !== undefined && hand.cards.filter(card => card.rank === RANK.ACE) && hand.cards.filter(card => card.rank === RANK.KING)) return 'Royal Flush'
  else if (res3 && res2['5'] !== undefined) return 'Straight Flush'
  else if (res1['4'] !== undefined) return 'Four of a Kind'
  else if (res1['3'] !== undefined && res1['2'] !== undefined) return 'Full House'
  else if (res2['5'] !== undefined) return 'Flush'
  else if (res3 === true) return 'Straight'
  else if (res1['3'] !== undefined) return 'Three of a Kind'
  else if (res1['2'] !== undefined && res1['2'][0].length === 2) return 'Two Pair'
  else if (res1['2'] !== undefined && res1['2'][0].length === 1) return 'One Pair'
  else if (res1['1'] !== undefined) return 'High Card'
}

module.exports = {
  determine: determine
}
