import NewUserRequest from "../domain/new-product.request";
import NewProductResponse from "../domain/new-product.response";
import ProductRepository from "../domain/product.repository";
import Product from "../domain/product";

export default class CreateNewProductUseCase {
  private productRepository: ProductRepository;

  public constructor(repository: ProductRepository) {
    this.productRepository = repository;
  }

  public async execute(request: NewUserRequest): Promise<NewProductResponse> {
    try {
      const product: Product = await this.productRepository.save(
        request.product
      );
      return {
        product,
      };
    } catch (error) {
      throw error;
    }

    // return new Promise(async (resolve, reject) => {
    //   try {
    //     const product: Product = await this.productRepository.save(
    //       request.product
    //     );
    //     resolve({ product });
    //   } catch (error) {
    //     reject(error);
    //   }
    // });
  }
}
