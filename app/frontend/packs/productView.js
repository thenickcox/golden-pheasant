import template from 'lodash.template';

class ProductView {
  constructor(product) {
    this.product = product;
  }

  render() {
    const compiledTemplate = template(`
      <h1><%= title %></h1>
      <hr />
      <h2>Reviews</h2>
      <div id="reviews"></div>
    `);
   
    const container = document.createElement('div');
    container.innerHTML = compiledTemplate(this.product);

    document.getElementsByTagName('body')[0].appendChild(container);
  }
}

export default ProductView;
