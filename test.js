const Deck = require('./deck.js').Deck
const SUIT = require('./card.js').SUIT
const RANK = require('./card.js').RANK
const Hand = require('./hand.js').Hand
const determine = require('./determineHand.js').determine

const rankAssoc = new Map()
  .set('A', RANK.ACE)
  .set('2', RANK.TWO)
  .set('3', RANK.THREE)
  .set('4', RANK.FOUR)
  .set('5', RANK.FIVE)
  .set('6', RANK.SIX)
  .set('7', RANK.SEVEN)
  .set('8', RANK.EIGHT)
  .set('9', RANK.NINE)
  .set('T', RANK.TEN)
  .set('J', RANK.JACK)
  .set('Q', RANK.QUEEN)
  .set('K', RANK.KING)

const suitAssoc = new Map()
  .set('D', SUIT.DIAMOND)
  .set('S', SUIT.SPADE)
  .set('H', SUIT.HEART)
  .set('C', SUIT.CLUB)

function toRankSuit (string) {
  let rank = string.substring(0, 1)
  let suit = string.substring(1, 2)
  return {rank: rankAssoc.get(rank), suit: suitAssoc.get(suit)}
}

let stringCards = ['9S', 'JS', 'QS', 'KS', 'AS']
let deck = new Deck()
let hand = new Hand()

stringCards.forEach(function (stringCard) {
  let c = toRankSuit(stringCard)
  hand.cards.push(deck.getCard(c.rank, c.suit))
})
console.log(hand)
console.log(determine(hand))
