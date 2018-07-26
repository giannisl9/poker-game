const cardFile = require('./card.js')
const Card = cardFile.Card
const SUIT = cardFile.SUIT
const RANK = cardFile.RANK

class Deck {
  constructor () {
    this.cardsIn = []
    this.cardsOut = []
    this.moveAllCardsIn()
  }
  moveAllCardsIn () {
    for (let suit in SUIT) {
      if (SUIT.hasOwnProperty(suit)) {
        for (let rank in RANK) {
          if (RANK.hasOwnProperty(rank)) {
            this.cardsIn.push(new Card(rank, suit))
          }
        }
      }
    }
  }
  getCard (rank, suit) {
    let cardIndex = this.cardsIn.findIndex(function (card) {
      return card.rank === rank && card.suit === suit
    })
    if (cardIndex === -1) throw 'The card is not in the deck'
    let card = this.cardsIn.splice(cardIndex, 1)[0]
    this.cardsOut.push(card)
    return card
  }

  getCardsQuick (cards) {

  }
}

module.exports = {
  Deck: Deck
}
