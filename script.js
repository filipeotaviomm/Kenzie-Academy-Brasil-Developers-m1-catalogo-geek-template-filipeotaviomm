const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle PlayStation",
    price: "R$99,00",
    type: "Paintings",
  },
  // Produto 4 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings",
  },
  // Produto 5 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$160,00",
    type: "Paintings",
  },
  // Produto 6 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$120,00",
    type: "Paintings",
  },
  // Produto 7 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Action Figures",
  },
  // Produto 8 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures",
  },
  // Produto 9 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Action Figures",
  },
  // Produto 10 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures",
  },
  // Produto 11 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures",
  },
];

let paintingsArray = [];
let actionFiguresArray = [];

function separateItems(list) {
  for (i = 0; i < productsArray.length; i++) {
    if (productsArray[i].type == "Paintings") {
      paintingsArray.push(productsArray[i]);
    }
  }
  for (i = 0; i < productsArray.length; i++) {
    if (list[i].type == "Action Figures") {
      actionFiguresArray.push(list[i]);
    }
  }
}

separateItems(productsArray);

//--------------------------------------

const firstUl = document.querySelector("#firstUl");

for (let i = 0; i < paintingsArray.length; i++) {
  let paintingsCards = paintingsArray[i];

  let li = document.createElement("li");
  let img = document.createElement("img");
  let h2 = document.createElement("h2");
  let span = document.createElement("span");

  // li.id = `li_${i + 1}`;

  img.src = `${paintingsCards.image}`;
  h2.innerText = `${paintingsCards.name}`;
  span.innerText = `${paintingsCards.price}`;

  li.append(img, h2, span);
  firstUl.appendChild(li);
}

//--------------------------------------

const secondUl = document.querySelector("#secondUl");

for (let i = 0; i < actionFiguresArray.length; i++) {
  let actionFiguresCards = actionFiguresArray[i];

  let li = document.createElement("li");
  let img = document.createElement("img");
  let h2 = document.createElement("h2");
  let span = document.createElement("span");

  img.src = `${actionFiguresCards.image}`;
  h2.innerText = `${actionFiguresCards.name}`;
  span.innerText = `${actionFiguresCards.price}`;

  li.append(img, h2, span);
  secondUl.appendChild(li);
}
