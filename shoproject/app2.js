
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