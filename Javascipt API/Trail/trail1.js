// let productDiv=document.querySelector(".product")
//         let displayProduct= async()=>{
//             productDiv.innerHTML='';
//             let product = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
//             let finalProduct = await product.json();
//             // console.log(finalProduct);
//             // const arr = Array.from(finalProduct.category);
//             finalProduct.categories.forEach(element => {
//                 productDiv.innerHTML+=`<div class="productItem">
//                 <img src="${element.image}" alt="">
//                 <p>Price Rs. ${element.price}</p>
//                 <h3>${element.title}</h3> 
//             </div>`
//             });
//             // finalProduct.categories.forEach(element => {
//             //     productDiv.innerHTML+=`<div class="productItem">
//             //     <img src="${element.image}" alt="">
//             //     <p>Price Rs. ${element.price}</p>
//             //     <h3>${element.title}</h3> 
//             // </div>`
//             // });

//         }

//         displayProduct();

// Replace 'YOUR_API_URL' with the actual URL of your API
// const apiUrl = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json';

// const categories = {
//   men: document.getElementById('men-checkbox'),
//   women: document.getElementById('women-checkbox'),
//   kids: document.getElementById('kids-checkbox'),
// };

// const container = document.getElementsByClassName('product');

// function createCard(item) {
//   // Template literals for cleaner string construction
//   return `
//   <div class="productItem">
//   <img src="${image}" alt="">
//   <p>Price Rs. ${price}</p>
//   <h3>${title}</h3> 
// </div>
//   `;
// }

// function displayData(data) {
//   const selected = Object.values(categories).filter(checkbox => checkbox.checked).map(checkbox => checkbox.id.slice(0, -7)); 
//   // Concise filtering logic
//   const filteredData = data.categories.filter(category => selected.includes(category.name));

//   container.innerHTML = filteredData.reduce((html, category) => {
//     return html + `
//       <h2>${category_name}</h2>
//       ${category.items.map(createCard).join('')}
//     `;
//   }, '');
// }

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => displayData(data))
//   .catch(error => console.error('Error fetching data:', error));

// // Event listener for all checkboxes (cleaner approach)
// const checkboxContainer = document.getElementsByClassName('filterBox');
// checkboxContainer.addEventListener('change', (event) => {
//   displayData(data); // Assuming data is available globally after fetch
// });

// Replace 'YOUR_API_URL' with the actual URL of your API

let productDiv = document.querySelector(".product");
var CategoryListDiv = document.querySelector(".categoryList");
let displayProduct = async () => {
    CategoryListDiv.innerHTML='';
    productDiv.innerHTML = '';
    try {
        let response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
        let finalProduct = await response.json();
        
        // Check if finalProduct contains the expected structure
        if (finalProduct && finalProduct.categories && Array.isArray(finalProduct.categories)) {
            finalProduct.categories.forEach(category => {
                CategoryListDiv.innerHTML=` <label for="">
                <input type="checkbox" name="" id="men-checkbox"> ${category.category_name}
            </label>`;



                category.category_products.forEach(item => {
                    productDiv.innerHTML += `
                        <div class="productItem">
                            <img src="${item.image}" alt="">
                            <p>Price Rs. ${item.price}</p>
                            <h3>${item.title}</h3> 
                        </div>`;
                });
            });
        } else {
            console.error('Invalid data format:', finalProduct);
        }
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
};

displayProduct();