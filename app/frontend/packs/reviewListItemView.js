import template from 'lodash.template';

class ReviewListItemView {
  constructor(opts) {
    const { review, el } = opts;
    this.review = review;
    this.el = el;
  }

  render() {
    const compiledTemplate = template(`
      <li>
        <span><%= stars %></span>
        <span><%= content %></span>
      </li>
    `);
    const container = document.createElement('div');
    container.innerHTML = compiledTemplate(this.review);

    this.el.appendChild(container);
  }
}

export default ReviewListItemView;
