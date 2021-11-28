const products = async function() { 
  const id = document.getElementById('product-display').getAttribute('data-id');
  const req = await fetch(`/products/${id}.json`);
  const productsJson = await req.json(); 
 
  console.log(productsJson);
  const body = document.getElementsByTagName('body')[0];
  const productName = productsJson.title;
  const headline = document.createElement('h1');
  headline.innerText = productName;
  body.appendChild(headline);
}();

