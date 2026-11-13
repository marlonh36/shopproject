const items = [
    {
        item: "shirt",
        category: "clothing",
        price: 10
    },
    {
        item: "pants",
        category: "clothing",
        price: 20
    },
    {
        item: "socks",
        category: "clothing",
        price: 5 
    },
    {
        item: "underwear",
        category: "clothing",
        price: 5 
    },
    {
        item: "wallet",
        category: "storage",
        price: 7 
    },
    {
        item: "backpack",
        category: "storage",
        price: 30
    },
    {
        item: "purse",
        category: "storage",
        price: 50
    },
    {
        item: "fanny pack",
        category: "storage",
        price: 30 
    },
    {
        item: "sunglasses",
        category: "accessories",
        price: 100 
    },
    {
        item: "watch",
        category: "accessories",
        price: 500
    },
    {
        item: "bracelet",
        category: "accessories",
        price: 1000
    },
    {
        item: "necklace",
        category: "accessories",
        price: 2000 
    },
    {
        item: "beanie",
        category: "winter",
        price: 6 
    },
    {
        item: "earmuffs",
        category: "winter",
        price: 12 
    },
    {
        item: "scarf",
        category: "winter",
        price: 6 
    },
    {
        item: "gloves",
        category: "winter",
        price: 6
    },
    {
        item: "sneakers",
        category: "footwear",
        price: 80 
    },
    {
        item: "crocs",
        category: "footwear",
        price: 60 
    },
    {
        item: "boots",
        category: "footwear",
        price: 150 
    },
    {
        item: "sandals",
        category: "footwear",
        price: 25 
    },
]

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.item}</h2>
        <img src="${item.item}.png" alt="" />
        <p>${item.price}</p>
      </div> `,
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

console.log(cart)
console.log(totalprice)