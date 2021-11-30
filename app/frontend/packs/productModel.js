class ProductModel {
  constructor(id) {
    this.id = id;
  }
  async fetchProduct(id) {
    const req = await fetch(`/products/${this.id}.json`);
    const productJson = await req.json(); 
    return productJson;
  }
}

export default ProductModel;
