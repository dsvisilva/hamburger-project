const buttonShowAll = document.getElementById("show");
const buttonMap = document.getElementById("map");
const sumAll = document.getElementById("sum");
const btnFilter = document.getElementById("filter");

const list = document.getElementById("menu");

function formatCurrency(value) {
  const newValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return newValue;
}

let myLi = "";

function showAll(productsArray) {
  myLi = "";
  productsArray.forEach((product) => {
    myLi += `
        <li>
            <img src="${product.src}" alt="${product.name}">
            <p class = "hamburger">${product.name}</p>
            <p class = "price">${formatCurrency (product.price)}</p>
        </li>
    `;
  });
  list.innerHTML = myLi;
}

function discountAll() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));

  showAll(newPrices);
}

function sumAllProducts() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);
  list.innerHTML = `
        <li>        
            <p>O valor total é: ${formatCurrency (totalValue)}</p>
        </li>
    `;
}

function onlyVegan() {
  const onlyVegan = menuOptions.filter((product) => product.vegan)
  showAll(onlyVegan)
}

let showingVegan = false

function toggleVegan() {
  showingVegan = !showingVegan

  if (showingVegan) {
    onlyVegan()
    btnFilter.textContent = "Todos"
  } else {
    showAll(menuOptions)
    btnFilter.textContent = "Filtrar"
  }
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMap.addEventListener("click", discountAll);
sumAll.addEventListener("click", sumAllProducts);
btnFilter.addEventListener("click", toggleVegan)
