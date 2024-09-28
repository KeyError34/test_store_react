import BaseService from '../base-service';

class GoodsService extends BaseService {
  fetchGoods = async () => {
    return this.instance.get('/productData');
  }
}

export const GoodsApi = new GoodsService();
