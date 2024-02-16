let scene = document.querySelector("#scene");
let text = document.querySelector("#text");
let inventoryText = document.querySelector("#inventoryText");
let inventory = ["stick"];
let currentWeapon = 0;
let monsterStats = document.querySelector("#monsterStats");
let monsterName = document.querySelector("#monsterName");
let monsterHealth = document.querySelector("#monsterHealth");

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

// Location
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
        name: "town",
        text: 'You are in the town square. You see a sign that says "Store".',
        scene: "url(/assets/images/town.svg)",
        "button text": ["go to store", "go to cave", "fight dragon"],
        "button action": [goStore, goCave, fightDragon]
    },
]

// Weapons
const weapons = [
    { name: 'stick', power: 5 },
    { name: 'dagger', power: 30 },
    { name: 'claw hammer', power: 50 },
    { name: 'sword', power: 100 }
  ];


// Monsters 
const monsters = [
    {
      name: "slime",
      level: 2,
      health: 15,
      scene: "url(/assets/images/slime.svg)",
    },
    {
      name: "fanged beast",
      level: 8,
      health: 60,
      scene: "url(/assets/images/beast.svg)",
    },
    {
      name: "dragon",
      level: 20,
      health: 300,
      scene: "url(/assets/images/dragon.svg)",
    }
]


// Functions

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

function goTown() {
    monsterStats.style.display = "none";
    update(locations[2]);
}

function buyHealth() {
    if (gold >= 10)
    {
        health += 10;
        healthText.innerText = health;
        gold -= 10;
        goldText.innerText = gold;
        text.innerText = "You bought health."
    } else {
        text.innerText = "Not enough gold to buy health."
    }
}

function buyWeapon() {
    if (currentWeapon < weapons.length - 1)
    {
        if (gold >= 30)
        {
            currentWeapon += 1;
            inventory.push(weapons[currentWeapon].name);
            inventoryText.innerText += "," + " " + inventory[currentWeapon];
            gold -= 30;
            goldText.innerText = gold;
            text.innerText = "You bought " + weapons[currentWeapon].name + " for 30 gold.";
        } else {
            text.innerText = "Not enough gold to buy " + weapons[currentWeapon + 1].name + ".";
        }
    } else {
        text.innerText = "You already have the best weapon";
    }
}

function fightSlime() {
    goFight(monsters[0]);
}

function fightBeast() {
    goFight(monsters[1]);
}

function fightDragon() {
    goFight(monsters[2]);
}

function goFight(monster) {
    monsterStats.style.display = "block";
    monsterName.innerText = monster.name;
    monsterHealth.innerText = monster.health;
    button1.innerText = "attack";
    button2.innerText = "dodge";
    button3.innerText = "run";
    button1.onclick = attack;
    button2.onclick = dodge;
    button3.onclick = goTown;
    text.innerText = "You are fighting a monster.";
    scene.style.backgroundImage = monster.scene;
}


function attack() {

}

function dodge() {
    
}