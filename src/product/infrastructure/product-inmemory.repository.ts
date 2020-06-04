import ProductRepository from "../domain/product.repository";
import Product from "../domain/product";

export default class ProductInMemoryRepository implements ProductRepository {
  private database: Array<Product>;

  constructor() {
    this.database = [];
  }

  public save(product: Product): Promise<Product> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.database.push(product);
        resolve(this.database[0]);
      }, 100);
    });
  }
}
