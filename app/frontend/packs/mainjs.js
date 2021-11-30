import ProductModel from './productModel';
import ProductView from './productView';

(async () => { 
  const id = document.getElementById('product-display').getAttribute('data-id');
  const model = new ProductModel(id);
  const product = await model.fetchProduct(id);

  const view = new ProductView(product);
  view.render();
})();

