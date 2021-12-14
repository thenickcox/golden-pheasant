import ProductModel from './productModel';
import ProductView from './productView';
import ReviewsCollection from './reviewsCollection';
import ReviewsCollectionView from './reviewsCollectionView';

(async () => { 
  const id = document.getElementById('product-display').getAttribute('data-id');
  const model = new ProductModel(id);
  const product = await model.fetchProduct(id);

  const collection = new ReviewsCollection({ modelId: id });
  const reviews = await collection.fetchReviewsForProduct();

  const productView = new ProductView(product, reviews);
  productView.render();

  const collectionView = new ReviewsCollectionView(reviews);
  collectionView.render();
})();

