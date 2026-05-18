let title = document.querySelector('.title')
let price = document.querySelector('.price')
let pages = document.querySelector('.pages')
let author = document.querySelector('.author')
const button = document.querySelector('.btn') 


let cart = {
    title: 'Книга',
    price: 100,
    pages: 312,
    author: 'Ларри кинг'
}

button.addEventListener('click', ()=>{
    setTimeout(() => {
        title.textContent = cart.title
        price.textContent = cart.price
        pages.textContent = cart.pages
        author.textContent = cart.author 
  }, 3500);
})


