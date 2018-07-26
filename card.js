const SUIT = {
  DIAMOND: 'DIAMOND',
  CLUB: 'CLUB',
  HEART: 'HEART',
  SPADE: 'SPADE'
}

const RANK = {
  ACE: 'ACE',
  TWO: 'TWO',
  THREE: 'THREE',
  FOUR: 'FOUR',
  FIVE: 'FIVE',
  SIX: 'SIX',
  SEVEN: 'SEVEN',
  EIGHT: 'EIGHT',
  NINE: 'NINE',
  TEN: 'TEN',
  JACK: 'JACK',
  QUEEN: 'QUEEN',
  KING: 'KING'
}

class Card {
  constructor (rank, suit) {
    this.rank = rank
    this.suit = suit
  }
  toString () {
    return this.rank + ' of ' + this.suit + 'S'
  }
}

module.exports = {
  RANK: RANK,
  Card: Card,
  SUIT: SUIT
}
