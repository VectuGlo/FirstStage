import { Cards } from '../interfaces/cards.interface';
import axios from 'axios';

class ItemServeces {
  private URL = 'http://localhost:3500/item';

  async getByAll() {
    return axios.get<Cards[]>(`${this.URL}/?_start=0&_limit=5`);
  }

  async getById(id: string) {
    return axios.get<Cards>(`${this.URL}/?lot=${id}`);
  }
}

export default new ItemServeces();
