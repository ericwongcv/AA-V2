const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {

    // Fill this in

    let item = this.currentRoom.getItemByName(itemName);
    this.items.push(item);
    
    this.currentRoom.items.forEach( (roomItem, i) => {
      if (roomItem === item) {
        let roomItemList = this.currentRoom.items;
        return this.currentRoom.items = roomItemList.slice(0, i).concat(roomItemList.slice(i + 1));
      }
    })

    return item;
  }

  dropItem(itemName) {

    // Fill this in

    let item = this.getItemByName(itemName);
    this.currentRoom.items.push(item);
    
    this.items.forEach( (playerItem, i) => {
      if (playerItem === item) {
        return this.items = this.items.slice(0, i).concat(this.items.slice(i + 1));
      }
    })

    return item;
  }

  eatItem(itemName) {

    // Fill this in

    let item = this.getItemByName(itemName);

    if (item instanceof Food) { 

      this.items.forEach( (playerItem, i) => {
        if (playerItem === item) {
          return this.items = this.items.slice(0, i).concat(this.items.slice(i + 1));
        }
      })
    
      return item;
    }
  }

  getItemByName(name) {

    // Fill this in

    let itemObj;
    
    this.items.forEach( item => {
      if (item.name === name) {
        return itemObj = item;
      }
    })

    return itemObj;

  }

  hit(name) {

    // Fill this in
    let enemy = this.currentRoom.getEnemyByName(name);
    enemy.attackTarget = this;

  }

  die() {
    console.log("You are dead!");
    process.exit();
  }
}

module.exports = {
  Player,
};
