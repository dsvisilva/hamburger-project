const buttonShowAll = document.getElementById("show");
const buttonMap = document.getElementById("map");
const sumAll = document.getElementById("sum");
const filter = document.getElementById("filter");

const list = document.getElementById("menu");

let myLi = "";

function showAll(productsArray) {
  myLi = "";
  productsArray.forEach((product) => {
    myLi += `
        <li>
            <img src="${product.src}" alt="${product.name}">
            <p class = "hamburger">${product.name}</p>
            <p class = "price">R$ ${product.price}</p>
        </li>
    `;
  });
  list.innerHTML = myLi;
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));

function discountAll() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));

  showAll(newPrices);
}

buttonMap.addEventListener("click", discountAll);
