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
    `<div class="card" data-item="${item.item}">
        <h2 class="card-title">${item.item}</h2>
        <img class= "card-img" src="${item.item}.png" alt="" />
        <p> $${item.price}</p>
        <button class="card-btn">Add to cart</button>
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



btn.addEventListener("click", function () {
  x++;
  rgb();
});

//make 1 html card, comment it out
//select the container
//forEach on items to inject to screen
//select add cart buttons


//make sure to use a class instead
const buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach((button) =>
button.addEventListener("click", function (event) {
  console.log(event.target.closest(".card").getAttribute("data-item"));
}),
);