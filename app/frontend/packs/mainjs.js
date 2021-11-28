const products = async function() { 
  const req = await fetch('/products.json');
  const productsJson = await req.json(); 
  
  
}();

