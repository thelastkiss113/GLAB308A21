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