let productDiv = document.querySelector(".product");

const categories = {
  men: document.querySelector('.categoryList label[for="men-checkbox"] input'),
  women: document.querySelector('.categoryList label[for="women-checkbox"] input'),
  kids: document.querySelector('.categoryList label[for="kids-checkbox"] input'),
};

let displayProduct = async () => {
  productDiv.innerHTML = '';

  try {
    let response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
    let data = await response.json(); // Assuming data is within the response

    // Check if data has the expected structure
    if (data && Array.isArray(data)) { // Assuming data is an object array
      displayFilteredProducts(data);
    } else {
      console.error('Invalid data format:', data);
    }
  } catch (error) {
    console.error('Error fetching or parsing data:', error);
  }
};

function displayFilteredProducts(data) {
  const selectedCategories = Object.values(categories)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.id.slice(7, -7));

  let filteredProducts = [];
  data.forEach(item => { // Assuming data contains objects with categories and category_products
    if (item.categories) { // Check if each object has a "categories" property
      const productCategories = item.categories.map(category => category.name); // Extract category names
      if (selectedCategories.length === 0 || selectedCategories.some(cat => productCategories.includes(cat))) {
        filteredProducts = filteredProducts.concat(item.category_products);
      }
    }
  });

  // Render filtered products
  filteredProducts.forEach(item => {
    productDiv.innerHTML += `
      <div class="productItem">
        <img src="${item.image}" alt="">
        <p>Price Rs. ${item.price}</p>
        <h3>${item.title}</h3>
      </div>`;
  });
}

displayProduct();

// Event listener for checkbox container (assuming clicks on label trigger change)
const categoryList = document.getElementsByClassName('categoryList');
categoryList.addEventListener('click', (event) => {
  if (event.target.tagName === 'INPUT') {
    displayProduct();
  }
});
