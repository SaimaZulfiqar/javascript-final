// Define product data
const products = [
    { id: 1, name: "Product 1", price: 19.99, description: "Description for Product 1", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 29.99, description: "Description for Product 2", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 39.99, description: "Description for Product 3", image: "https://via.placeholder.com/150" }
];

// Cart array to store added products
let cart = [];

// Get DOM elements
const productContainer = document.getElementById("product-container");
const sortOptions = document.getElementById("sort-options");
const cartButton = document.getElementById("cart-button");
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const closeCartButton = document.getElementById("close-cart");

// Function to create and display product elements
function displayProducts(products) {
    productContainer.innerHTML = "";
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <span>$${product.price.toFixed(2)}</span>
            <button data-id="${product.id}">Add to Cart</button>
        `;
        
        // Add "Add to Cart" button event listener
        productElement.querySelector("button").addEventListener("click", () => addToCart(product));
        
        productContainer.appendChild(productElement);
    });
}

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);
    alert(`${product.name} has been added to the cart.`);
}

// Sort products by name (alphabetically)
function sortByName() {
    const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
    displayProducts(sortedProducts);
}

// Sort products by price (low to high)
function sortByPrice() {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    displayProducts(sortedProducts);
}

// Event listener for sorting option change
sortOptions.addEventListener("change", () => {
    const selectedOption = sortOptions.value;
    if (selectedOption === "name") {
        sortByName();
    } else if (selectedOption === "price") {
        sortByPrice();
    } else {
        displayProducts(products);
    }
});

// Function to display cart items in modal
function displayCartItems() {
    cartItems.innerHTML = ""; // Clear the current items
    cart.forEach(item => {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
    });
    cartModal.style.display = "block"; // Show the modal
}

// Close the cart modal
closeCartButton.addEventListener("click", () => {
    cartModal.style.display = "none";
});

// Open the cart modal and display items
cartButton.addEventListener("click", displayCartItems);

// Initial display of products
displayProducts(products);

 



  