const items = [
    {
        name: "shirt",
        category: "clothing",
        price: 10
    },
    {
        name: "pants",
        category: "clothing",
        price: 20
    },
    {
        name: "socks",
        category: "clothing",
        price: 5 
    },
    {
        name: "underwear",
        category: "clothing",
        price: 5 
    },
    {
        name: "wallet",
        category: "storage",
        price: 7 
    },
    {
        name: "backpack",
        category: "storage",
        price: 30
    },
    {
        name: "purse",
        category: "storage",
        price: 50
    },
    {
        name: "fanny pack",
        category: "storage",
        price: 30 
    },
    {
        name: "sunglasses",
        category: "accessories",
        price: 100 
    },
    {
        name: "watch",
        category: "accessories",
        price: 500
    },
    {
        name: "bracelet",
        category: "accessories",
        price: 1000
    },
    {
        name: "necklace",
        category: "accessories",
        price: 2000 
    },
    {
        name: "beanie",
        category: "winter",
        price: 6 
    },
    {
        name: "earmuffs",
        category: "winter",
        price: 12 
    },
    {
        name: "scarf",
        category: "winter",
        price: 6 
    },
    {
        name: "gloves",
        category: "winter",
        price: 6
    },
    {
        name: "sneakers",
        category: "footwear",
        price: 80 
    },
    {
        name: "crocs",
        category: "footwear",
        price: 60 
    },
    {
        name: "boots",
        category: "footwear",
        price: 150 
    },
    {
        name: "sandals",
        category: "footwear",
        price: 25 
    },
]


btn.addEventListener("click", function () {
});

//make 1 html card, comment it out
//select the container
//forEach on items to inject to screen
//select add cart buttons


//make sure to use a class instead


function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" data-item="${item.name}">
        <h2 class="card-title">${item.name}</h2>
        <img class= "card-img" src="${item.name}.png" alt="" />
        <p> $${item.price}</p>
        <button id="btn" class="card-btn">Add to cart</button>
      </div> `,
  );
    const buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach((button) =>
button.addEventListener("click", function (event) {
  console.log(event.target.closest(".card").getAttribute("data-item"));
}),
);

}

const cart = []

function addcart(item) {
cart.push(item)
}

/* function removecart(item) {
cart.pop(item.item)
} */

let totalprice = 0
function addtotalprice() {
for(let i = 0; i<cart.length; i++) {
    totalprice = totalprice+cart[i].price
    }
}
/* 
console.log(items[7].item) */
addcart(items[5])
addcart(items[3])
addcart(items[2])
addcart(items[1])
addcart(items[6])
addtotalprice()
/* removecart(items[3]) */

for(let i = 0; i<=20; i++){
inject(items[i])
}
console.log(i)
console.log(cart)
console.log(totalprice)





