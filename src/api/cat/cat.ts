import axios from "axios";

import { CatFact, AllCatFacts } from "../../models/cat";

const catApi = {
  getFact: async () => {
    const response = await axios.get<CatFact>('https://catfact.ninja/fact');
    return response.data
  },
  getAllFacts: async () => {
    const response = await axios.get<AllCatFacts>('https://catfact.ninja/facts', {
      params: {
        limit: 10000
      }
    });
    return response.data
  }
}

export default catApi;