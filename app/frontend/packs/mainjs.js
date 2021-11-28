const products = async function() { 
  const req = await fetch('/products.json');
  const json = await req.json(); 
  console.log(json);
}();

