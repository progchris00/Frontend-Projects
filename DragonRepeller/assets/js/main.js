let scene = document.querySelector("#scene");

let text = document.querySelector("#text");

let inventory = ["stick"];

// Stats
let xp = 0;
let health = 100;
let gold = 50;

let xpText = document.querySelector("#xpText");
let healthText = document.querySelector("#healthText");
let goldText = document.querySelector("#goldText");

// Buttons
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

button1.onclick = startGame;
button2.onclick = goCave;
button3.onclick = fightDragon;

let locations = [
    {
        name: "store",
        scene: "url(/assets/images/store.svg)",
        text: "You enter the store.",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button action": [buyHealth, buyWeapon, goTown]
    },
    {
        name: "cave",
        scene: "url(/assets/images/cave.svg)",
        text: "You enter the cave. You see some monsters.",
        "button text": ["fight slime", "fight fanged beast", "Go to town square"],
        "button action": [fightSlime, fightBeast, goTown]
    },
    {
        name: "dragon",
        text: "You are fighting a monster.",
        scene: "url(/assets/images/dragon.svg)",
        "button text": ["attack", "dodge", "run"],
        "button action": [attack, dodge, goTown],
    },
    {
        name: "town",
        text: 'You are in the town square. You see a sign that says "Store".',
        scene: "url(/assets/images/town.svg)",
        "button text": ["go to store", "go to cave", "fight dragon"],
        "button action": [goStore, goCave, fightDragon]
    }
]

function update(location) {
    text.innerText = location.text;
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button action"][0];
    button2.onclick = location["button action"][1];
    button3.onclick = location["button action"][2];
    scene.style.backgroundImage = location.scene;
}

function startGame() {
    button1.innerText = "go to store";
    button1.onclick = goStore;
    button2.style.display = "block";
    button3.style.display = "block";
}

function goStore() {
    update(locations[0]);
}

function goCave() {
    update(locations[1]);
}

function fightDragon() {
    update(locations[2]);
}

function goTown() {
    update(locations[3]);
}

function buyHealth() {
    if (gold > 0)
    {
        health += 10;
        healthText.innerText = health;
        gold -= 10;
        goldText.innerText = gold;
    } else {
        text.innerText = "Not enough gold to buy health."
    }
}

function buyWeapon() {

}

function fightSlime() {

}

function fightBeast() {

}

function attack() {

}

function dodge() {
    
}