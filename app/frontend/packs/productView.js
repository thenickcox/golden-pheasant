import template from 'lodash.template';
import reduce from 'lodash.reduce';
import round from 'lodash.round';
import ReviewListItemView from './reviewListItemView';

class ProductView {
  constructor(product, reviews) {
    this.product = product;
    this.reviews = reviews;
  }

  bindClickHandlers() {
    document.getElementById('addReview').addEventListener('click', () => {
      this.renderReviewAddModal();
    });
  }

  renderReviewAddModal() {
    document.getElementById('reviewModal').classList.remove('hide');
    document.getElementById('submitReview').addEventListener('click', () => {
      document.getElementById('reviewModal').classList.remove('hide');
      return this.submitReview();
    });
  }

  appendReview(opts) {
    const view = new ReviewListItemView({ review: opts, el: document.getElementById('productReviewList') });
    view.render();
  }

  clearReviewForm() {
    const content = document.getElementById('ratingContent').value = '';
    for (let i = 5; i >= 1; i--) {
      const el = document.getElementById(`star${i}`);
      if (el.checked) el.checked = false;
    }
  }

  async submitReview() {
    const content = document.getElementById('ratingContent').value;

    let stars;
    for (let i = 5; i >= 1; i--) {
      const el = document.getElementById(`star${i}`);
      if (el.checked) stars = i;
    }

    const csrfToken = document.querySelectorAll('[name="csrf-token"]')[0].getAttribute('content');

    const data = { content, stars };
    const resp = await fetch(`/products/${this.product.id}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken
      },
      body: JSON.stringify(data)
    });
    document.getElementById('reviewModal').classList.add('hide');
    this.appendReview({ content, stars });
    this.clearReviewForm();
  }

  render() {
    const compiledTemplate = template(`
      <h1><%= title %></h1>
      <button id="addReview">Add Review</button>
      <h3>Average: <%= averageReview %></h3>
      <div class="ratings">
          <div class="empty-stars"></div>
          <div class="full-stars" style="width:<%= (averageReview / 5) * 100 %>%"></div>
      </div>
      <hr />
      <h2>Reviews</h2>
      <div id="reviews"></div>

      <div class="hide" id="reviewModal">
        <h1>What's your rating?</h1>
        <h5>Rating</h5>
        <div class="starRating">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" ititle="text">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="text">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="text">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="text">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="text">1 star</label>
        </div>

        <h5>Review</h5>
        <textarea id="ratingContent" placeholder="Start typing..."></textarea>
        <button id="submitReview">Submit review</button>
      </div>
    `);

    const numReviews = this.reviews.length;

    const averageReview = round((
      reduce(this.reviews, (result, review) => {
      return result + review.stars;
    }, 0) / numReviews), 1);

    const decoratedProduct = { ...this.product, averageReview, numReviews };
   
    const container = document.createElement('div');
    container.innerHTML = compiledTemplate(decoratedProduct);

    document.getElementsByTagName('body')[0].appendChild(container);
    this.bindClickHandlers();
  }
}

export default ProductView;
