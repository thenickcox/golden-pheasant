import template from 'lodash.template';
import ReviewListItemView from './reviewListItemView';

class ReviewsCollectionView {
  constructor(reviews) {
    this.reviews = reviews;
  }

  render() {
    const compiledTemplate = template(`
      <ul id="productReviewList">
      </ul>
    `);
   
    const container = document.createElement('div');
    container.innerHTML = compiledTemplate();

    document.getElementById('reviews').appendChild(container);

    this.reviews.map(review => {
      const view = new ReviewListItemView({ review, el: document.getElementById('productReviewList') });
      view.render();
    });
  }
}

export default ReviewsCollectionView;
