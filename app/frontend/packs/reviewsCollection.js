class ReviewsCollection {
  constructor(opts) {
    this.modelId = opts.modelId;
  }

  async fetchReviewsForProduct() {
    const req = await fetch(`/products/${this.modelId}/reviews.json`);
    const reviewsJson = await req.json(); 
    return reviewsJson;
  }
}

export default ReviewsCollection;
