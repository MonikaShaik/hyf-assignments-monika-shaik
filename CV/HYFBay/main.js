console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

// This should create the ul and the li's with the individual products details
function renderProducts(products) {
  // your code goes here
  const ulElement = document.querySelector("#products-list");
  ulElement.innerHTML = ""; // Clear existing content
  
  products.forEach((product) => {
    const liElement = document.createElement("li");

    liElement.innerHTML = `<strong>Product Name:</strong> ${product.name} <br>
      Price: $${product.price} <br>
      Rating: ${product.rating}`;

    ulElement.appendChild(liElement);
  });


}

renderProducts(products); 
