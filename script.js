// Add to cart

const cart = [];
const cartItemsElement = document.getElementById('cartItems');
const cartSubtotalElement = document.getElementById('cartSubtotal');
const cartBadgeElement = document.getElementById('cartBadge');  // Badge element for cart

function addToShoppingCart(name, price, image, size, description) {
    const item = {
        name: name,
        price: price,
        image: image,
        size: size,
        description: description
    };
    cart.push(item);
    updateCart();
    showOffcanvas();
}

function updateCart() {
    cartItemsElement.innerHTML = '';
    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('d-flex', 'align-items-center', 'gap-3', 'border-bottom', 'pb-3', 'mb-3');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="rounded-3" style="width: 100px;">
            <div class="flex-grow-1">
                <h6 class="mb-1">${item.name}</h6>
                <p class="mb-1">${item.description}</p>
                <span>${item.size}</span>
            </div>
            <div class="text-end">
                <span class="h6 mb-0">$${item.price.toFixed(2)}</span>
                <button class="remove-button" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        cartItemsElement.appendChild(itemElement);
        subtotal += item.price;
    });


    cartSubtotalElement.textContent = `$${subtotal.toFixed(2)}`;

    cartBadgeElement.textContent = cart.length;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function showOffcanvas() {
    const offcanvasElement = document.getElementById('offcanvasRight');
    const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
    offcanvas.show();
}

