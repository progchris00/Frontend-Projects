const yesButton = document.querySelector(".yes")
const noButton = document.querySelector(".no")

yesButton.onclick = () =>
{
    alert("YAAAAAAAAAAY!");
}

let verticalPadding = 15;
let horizontalPadding = 60;

noButton.onclick = () =>
{
    verticalPadding *= 2;
    horizontalPadding *= 2;
    yesButton.style.padding = `${verticalPadding}px ${horizontalPadding}px`;
}


function buyHealth() {
    if (gold > 0)
    {
      gold -= 10;
      goldText.innerText = `${gold}`;
      inventory.push("Health pots");
      text.innerText = `Inventory: ${inventory}`
    }
    else
    {
      text.innerText = "Not enough gold";
    }
  }