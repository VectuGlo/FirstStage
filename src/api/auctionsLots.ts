// import axios from 'axios';

import axios from 'axios';
import { Cards } from '../interfaces/cards.interface';

// class ItemServeces {
//   private URL = 'http://localhost:3500/item';

//   async getByAll() {
//     return axios.get<Cards[]>(`${this.URL}/?_start=0&_limit=5`);
//   }

//   async getById(lot: string) {
//     return axios.get<Cards>(`${this.URL}/?_lot=${lot}`);
//   }
// }

// export default new ItemServeces();

const URL = 'http://localhost:3500/item';

export async function getMarkParam() {
  return await axios.get<Cards[]>(`${URL}/?mark`);
}

export async function getLotDetailed(id: string) {
  return await axios.get<Cards>(`${URL}/${id}`);
}

export async function getByAllCars() {
  return await axios.get<Cards[]>(`${URL}/?_start=1&_limit=5`);
}
