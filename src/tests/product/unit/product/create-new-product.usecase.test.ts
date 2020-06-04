import CreateNewProductUseCase from "../../../../product/application/create-new-product.usecase";
import NewProductRequest from "../../../../product/domain/new-product.request";
import NewProductResponse from "../../../../product/domain/new-product.response";
import ProductInMemoryRepository from "../../../../product/infrastructure/product-inmemory.repository";

describe("The new product creation", () => {
  it("should return the product object when a new product is created", async () => {
    const useCase = new CreateNewProductUseCase(
      new ProductInMemoryRepository()
    );

    const request: NewProductRequest = {
      product: {
        sku: "SV001",
        name: "Tomato organic X 2",
        description: "Tomato organic X 2 description",
        stock: 12,
      },
    };

    const response: NewProductResponse = await useCase.execute(request);
    expect(response.product.sku).toBe("SV001");
  });
});
