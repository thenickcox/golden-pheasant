import template from 'lodash.template';

class ReviewsCollectionView {
  constructor(reviews) {
    this.reviews = reviews;
  }

  render() {
    const compiledTemplate = template(`
      <% reviews.map(function(review) { %>
        <ul>
          <li><%= review.stars %></li>
          <li><%= review.content %></li>
        </ul>
      <% }); %>
    `);
   
    const container = document.createElement('div');
    container.innerHTML = compiledTemplate({ reviews: this.reviews });

    document.getElementById('reviews').appendChild(container);
  }
}

export default ReviewsCollectionView;
