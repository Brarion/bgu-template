import axios from "axios";
import { RandomCardResponse, Deck } from "../../models/card";

const cardImagesApi = {
  getImage: async (deckId: string) => {
    const response = await axios.get<RandomCardResponse>(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    return response.data
  },
  getDeckId: async () => {
    const response = await axios.get<Deck>('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    return response.data
  }
}

export default cardImagesApi;