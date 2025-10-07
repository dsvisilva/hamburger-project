# 🍔 Hamburger Menu Interativo

Um projeto web simples e interativo que exibe um menu de hambúrgueres com funcionalidades de filtragem, descontos e soma de preços, desenvolvido com **HTML**, **CSS** e **JavaScript**.

---

## 🔹 Funcionalidades

- **Mostrar todos os itens:** exibe todo o menu de hambúrgueres.  
- **Aplicar desconto de 10%:** recalcula os preços e exibe o menu com os novos valores.  
- **Somar todos os preços:** calcula o valor total de todos os produtos e mostra em destaque.  
- **Filtrar apenas veganos:** mostra apenas os hambúrgueres veganos, alternando entre “Mostrar só veganos” e “Mostrar todos”.  

---

## 🔹 Tecnologias usadas

- **HTML5** – estrutura semântica da página.  
- **CSS3** – estilização responsiva, layout em grid, hover effects e design moderno.  
- **JavaScript (ES6+)** – manipulação do DOM, `map`, `filter`, `reduce` e eventos de clique.

---

## 🔹 Estrutura do projeto

hamburger-menu/  
├─ index.html       # Estrutura da página  
├─ style.css        # Estilos do projeto  
├─ script.js        # Lógica de exibição, filtros e cálculos  
└─ assets/          # Imagens dos hambúrgueres  

---

## 🔹 Como usar

1. Abra o arquivo `index.html` no navegador.  
2. Clique nos botões:  
   - **Mostrar tudo:** exibe todos os produtos.  
   - **Mapear:** aplica desconto de 10% em todos os preços.  
   - **Somar tudo:** calcula e exibe o valor total de todos os produtos.  
   - **Filtrar:** alterna entre mostrar apenas os veganos ou todos os produtos.  

---

## 🔹 Conceitos importantes aprendidos

- **Manipulação de arrays em JS:**  
  - `map()` para transformar valores (aplicar desconto).  
  - `filter()` para criar arrays com itens específicos (vegano).  
  - `reduce()` para agregar valores (somar preços).  
- **Interação com DOM:** `innerHTML`, `addEventListener`, atualizando conteúdo dinamicamente.  
- **Uso de template strings** para gerar HTML de forma programática.  
