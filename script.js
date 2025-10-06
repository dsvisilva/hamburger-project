

const mostAll = document.getElementById('most');
const sumAll = document.getElementById('sum');
const filter = document.getElementById('filter');
const map = document.getElementById('map');

const list = document.getElementById('menu');

let myLi = ''

menuOptions.forEach((product) => {
    myLi = myLi + `
        <li>
            <img src="${product.src}" alt="${product.name}">
            <p class = "hamburger">${product.name}</p>
            <p class = "price">R$ ${product.price},00</p>
        </li>
    `

})