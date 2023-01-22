// Get a reference to the "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll('.add-to-cart');

// Loop through the buttons and add a click event listener to each one
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        var productId = event.target.dataset.productId;
        addToCart(productId);
    });
});

// Add the product to the cart
function addToCart(productId) {
    console.log('Product ' + productId + ' added to cart.');
}
