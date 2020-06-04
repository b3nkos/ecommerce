import Product from "./product";

export default interface ProductRepository {
  save(product: Product): Promise<Product>;
}
