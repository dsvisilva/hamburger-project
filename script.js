const menuOptions = [
{ name: 'X-Salada', price: 30, vegan: false, src: './assets/xsalada.png' },

{ name: 'X-Bacon', price: 34, vegan: false, src: './assets/xbacon.png' },

{ name: 'X-Bacon Egg', price: 39, vegan: false, src: './assets/bacon-egg.png' },

{ name: 'Monstruoso', price: 50, vegan: false, src: './assets/monstruoso.png' },

{ name: 'Big Vegano', price: 55, vegan: true, src: './assets/xvegan.png' },

{ name: 'X-Vegan', price: 45, vegan: true, src: './assets/monstruoso-vegan.png' },
]

const mostAll = document.getElementById('most-all');
const sumAll = document.getElementById('sum-all');
const filter = document.getElementById('filter');
const map = document.getElementById('map');

map.addEventListener('click', () => {
    console.log('funcionou')
});

mostAll.addEventListener('click', () => {
    console.log('aeeee')
});

sumAll.addEventListener('click', () => {
    console.log('foi')
});

filter.addEventListener('click', () => {
    console.log('deu boa')
});
