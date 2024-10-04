//part 1

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
};

for (const item of adventurer.inventory) {
    console.log(item);
}

adventurer.companion = {
  name: "Leo",
  type: "Cat",
  companion: {
    name: "Frank",
    type: "Flea",
    belongings: ["small hat", "sunglasses"],
  },
};


console.log(adventurer.companion);

adventurer.roll();
adventurer.roll();
adventurer.roll();
//part 2




class Adventure extends Character { constructor(name,role) {
    
}}