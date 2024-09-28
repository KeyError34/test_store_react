import axios from 'axios';

class BaseService {
  constructor() {
    this.instance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  }
}

export default BaseService;