let scene = document.querySelector("#scene");
let text = document.querySelector("#text");
let fighting;

// Character stats
let xp = 0;
let health = 100;
let gold = 50;
let inventory = ["stick"];

// Character Stat text
let xpText = document.querySelector("#xpText");
let healthText = document.querySelector("#healthText");
let goldText = document.querySelector("#goldText");
let inventoryText = document.querySelector("#inventoryText");

let currentWeapon = 0;

// Monster Stats
let monsterStats = document.querySelector("#monsterStats");
let monsterName = document.querySelector("#monsterName");
let monsterHealthText = document.querySelector("#monsterHealth");
let monsterHealth;

// Buttons
let controls = document.querySelector("#controls");

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

button1.onclick = startGame;
button2.onclick = goCave;
button3.onclick = fightDragon;

// Location
const locations = [
    {
        name: "store",
        scene: "url(assets/images/store.svg)",
        text: "You enter the store.",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button action": [buyHealth, buyWeapon, goTown]
    },
    {
        name: "cave",
        scene: "url(assets/images/cave.svg)",
        text: "You enter the cave. You see some monsters.",
        "button text": ["fight slime", "fight fanged beast", "Go to town square"],
        "button action": [fightSlime, fightBeast, goTown]
    },
    {
        name: "town",
        text: 'You are in the town square. You see a sign that says "Store".',
        scene: "url(assets/images/town.svg)",
        "button text": ["go to store", "go to cave", "fight dragon"],
        "button action": [goStore, goCave, fightDragon]
    },
    {
        name: "fighting",
        text: "You are fighting a monster.",
        scene: "url(assets/images/cave.svg)",
        "button text": ["attack", "dodge", "run"],
        "button action": [attack, dodge, goTown]
    },
    {
        name: "defeat monster",
        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
        scene: "url(assets/images/cave.svg)",
        "button text": ["Go to town square", "Go to town square", "Go to town square"],
        "button action": [goTown, goTown, goTown]
    },
    {
        name: "lose",
        text: "You die. &#x2620;",
        scene: "url(assets/images/start.svg)",
        "button text": ["Restart", "Restart", "Restart"],
        "button action": [restart, restart, restart]
    },
    {
        name: "win",
        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;",
        scene: "url(assets/images/start.svg)",
        "button text": ["Restart", "Restart", "Restart"],
        "button action": [restart, restart, restart]
    }
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
      scene: "url(assets/images/slime.svg)",
    },
    {
      name: "fanged beast",
      level: 8,
      health: 60,
      scene: "url(assets/images/beast.svg)",
    },
    {
      name: "dragon",
      level: 20,
      health: 300,
      scene: "url(assets/images/dragon.svg)",
    }
]


// Functions

function update(location) {
    monsterStats.style.display = "none";
    text.innerHTML = location.text;
    controls.style.paddingBottom = "0";
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
    fighting = 0;
    goFight();
}

function fightBeast() {
    fighting = 1;
    goFight();
}

function fightDragon() {
    fighting = 2;
    goFight();
}

function goFight() {
    update(locations[3]);
    controls.style.paddingBottom = "15px";
    monsterStats.style.display = "flex";

    monsterHealth = monsters[fighting].health
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
    scene.style.backgroundImage = monsters[fighting].scene;
}

function attack() {
    text.innerText = `The ${monsters[fighting].name} attacks. You attack it with your ${weapons[currentWeapon].name}`
    health -= monsters[fighting].level;
    monsterHealth -= weapons[currentWeapon].power;
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if (monsterHealth <= 0)
    {
        defeatMonster();
    }
    else if (health <= 0)
    {
        lose();
    }
}

function dodge() {
    text.innerText = `You dodge the attack from the ${monsters[fighting].name}`;
}

function lose() {
    update(locations[5]);
}

function defeatMonster() {
    gold += 13;
    xp += monsters[fighting].level;
    xpText.innerText = xp;
    goldText.innerText = gold;
    update(locations[4]);
}

function restart() {
    xp = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = ["stick"];

    xpText.innerText = xp;
    healthText.innerText = health;
    goldText.innerText = gold;
    inventoryText.innerText  = inventory;

    goTown();
}

function winGame() {
    update(locations[6]);
}

