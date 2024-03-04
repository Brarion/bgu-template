export type Card = {
  code: string,
  image: string,
  value: string,
  suit: string
}

export type RandomCardResponse = Omit<Deck, 'shuffled'> & {
  cards: Array<Card & {
    images: {
      svg: string;
      png: string
    }
  }>
}

export type Deck = {
    success: boolean,
    deck_id: string,
    shuffled: boolean,
    remaining: number
}