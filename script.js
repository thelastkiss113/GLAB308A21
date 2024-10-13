<<<<<<< HEAD
import Adventurer from "./classes/Adventurer.js"
import Companion from "./classes/Companion.js"
import AdventurerFactory from "./classes/AdventurerFactory.js"


const robin = new Adventurer('Robin', 'Wizard')
robin.loot("sword", "potion", "potion", "artifact")
robin.health = 50
robin.useHealthPotion()
robin.useHealthPotion()

const leo = new Companion('Leo', 'Cat')
leo.attach(robin)
leo.lendAHand('KitKat bar', robin)
// leo.sayInspirationalQuote()

const frank = new Companion('Frank', 'Flea')
frank.attach(leo)
// frank.sayInspirationalQuote()
frank.lendAHand('potion', leo)

const healerFactory = new AdventurerFactory("Wizard")

const gandalf = healerFactory.generate('Gandalf')
const radagastTheBrown = healerFactory.generate('Radagast')


gandalf.duel(radagastTheBrown)
=======
// Part 1: Humble Beginnings

// Initial adventurer object
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
      name: "Leo",
      type: "Cat",
      companion: {
          name: "Frank",
          type: "Flea",
          belongings: ["small hat", "sunglasses"]
      }
  },
  roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod; // Simulates a roll of a 20-sided die
      console.log(`${this.name} rolled a ${result}.`);
  }
};

// Log each item in Robin’s inventory
console.log("Robin's inventory:");
for (let item of adventurer.inventory) {
  console.log(item); // Log each item in the inventory
}

// Test the roll method
console.log("\nRolling for Robin:");
for (let i = 0; i < 3; i++) {
  adventurer.roll(); // Call roll method for Robin
}

// Part 2: Class Fantasy

// Define the Character class
class Character {
  static MAX_HEALTH = 100; // Static property for maximum health

  constructor(name) {
      this.name = name;
      this.health = Character.MAX_HEALTH; // Use static property for health
      this.inventory = [];
  }

  roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod; // Simulates a roll of a 20-sided die
      console.log(`${this.name} rolled a ${result}.`);
  }
}

// Define the Adventurer class extending Character
class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"]; // Static array of roles

  constructor(name, role) {
      super(name); // Call the parent class constructor

      // Check if the given role is valid
      if (!Adventurer.ROLES.includes(role)) {
          throw new Error(`Invalid role: ${role}. Valid roles are: ${Adventurer.ROLES.join(", ")}`);
      }
      
      this.role = role; // Add specific role for the adventurer
      this.inventory.push("bedroll", "50 gold coins"); // Default inventory for adventurers
  }

  scout() {
      console.log(`${this.name} is scouting ahead...`);
      this.roll(); // Call the roll method when scouting
  }
}

// Create Robin as an Adventurer
const robin = new Adventurer("Robin", "Fighter");
robin.inventory.push("sword", "potion", "artifact"); // Add items to Robin's inventory

// Create Robin's companion, Leo
const leo = new Adventurer("Leo", "Cat"); // Leo as an Adventurer
robin.companion = leo; // Set Leo as Robin's companion

// Create Leo's companion, Frank
const frank = new Adventurer("Frank", "Flea"); // Frank as an Adventurer
leo.companion = frank; // Set Frank as Leo's companion
frank.inventory.push("small hat", "sunglasses"); // Add items to Frank's inventory

// Test the roll method for Robin, Leo, and Frank
console.log("\nRolling for Robin:");
for (let i = 0; i < 5; i++) {
  robin.roll(); // Call robin.roll() 5 times
}

console.log("\nRolling for Leo:");
for (let i = 0; i < 5; i++) {
  leo.roll(); // Call leo.roll() 5 times
}

console.log("\nRolling for Frank:");
for (let i = 0; i < 5; i++) {
  frank.roll(); // Call frank.roll() 5 times
}

// Part 3: Class Features

// Define the Companion class extending Character
class Companion extends Character {
  constructor(name, type) {
      super(name); // Call the parent class constructor
      this.type = type; // Specific type of companion
  }

  play() {
      console.log(`${this.name}, the ${this.type}, is playing!`);
  }
}

// Create instances of the Companion class
const leoCompanion = new Companion("Leo", "Cat");
const frankCompanion = new Companion("Frank", "Flea");

// Add companions to Robin and Leo
robin.companion = leoCompanion; // Set Leo as Robin's companion
leoCompanion.companion = frankCompanion; // Set Frank as Leo's companion

// Test the play method for the companions
console.log("\nCompanion actions:");
robin.companion.play(); // Leo plays
leoCompanion.companion.play(); // Frank plays

// Log details of Robin and companions
console.log("\nAdventurer Details:");
console.log(`Name: ${robin.name}, Role: ${robin.role}, Health: ${robin.health}, Inventory: ${robin.inventory}`);
console.log(`Companion: ${robin.companion.name}, Type: ${robin.companion.type}`);
console.log(`Companion's Companion: ${leoCompanion.companion.name}, Type: ${leoCompanion.companion.type}`);

// Part 4: Class Uniforms

// Test static properties
console.log(`\nCharacter Max Health: ${Character.MAX_HEALTH}`); // Log the max health for characters
console.log(`Adventurer Roles: ${Adventurer.ROLES.join(", ")}`); // Log available roles

// Uncomment the following lines to test invalid roles (this will throw an error)
// const invalidAdventurer = new Adventurer("Invalid", "InvalidRole"); // This line will throw an error

>>>>>>> origin/main
