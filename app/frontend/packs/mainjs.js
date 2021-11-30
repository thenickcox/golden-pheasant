import template from 'lodash.template';

const products = async function() { 
  const id = document.getElementById('product-display').getAttribute('data-id');
  const req = await fetch(`/products/${id}.json`);
  const productJson = await req.json(); 

  const compiledTemplate = template('<h1>foo <%= title %></h1>');
 
  const container = document.createElement('div');
  container.innerHTML = compiledTemplate(productJson);

  document.getElementsByTagName('body')[0].appendChild(container);
}();

