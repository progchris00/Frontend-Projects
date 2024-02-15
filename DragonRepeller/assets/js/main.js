let scene = document.querySelector("#scene");
let currentLocation = 0;

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

let locations = [
    {
        name: "store",
        scene: "url(/assets/images/store.svg)",
    },
    {
        name: "store",
        scene: "url(/assets/images/store.svg)",
    },
    {
        name: "cave",
        scene: "url(/assets/images/cave.svg)",
    },
    {
        name: "dragon",
        scene: "url(/assets/images/dragon.svg)",
    }
]

button1.onclick = startGame;
button2.onclick = goCave;
button3.onclick = fightDragon;


function startGame() {
    button1.innerText = "go to store";
    button1.onclick = goStore;
    button2.style.display = "block";
    button3.style.display = "block";
}

function goStore() {
    update(locations[1]);
}

function goCave() {
    update(locations[2]);
}

function fightDragon() {
    update(locations[3])
}

function update(location) {
    scene.style.backgroundImage = location.scene;
}
