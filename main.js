const carts = document.querySelectorAll('.cart');

carts.forEach(cart => {
    cart.addEventListener('click', () => {
        const hiddenBlock = cart.querySelector('.hidden-block');
        
        if (hiddenBlock.style.display === 'flex') {
            hiddenBlock.style.display = 'none';
        } else {
            hiddenBlock.style.display = 'flex';
        }
    });
});


