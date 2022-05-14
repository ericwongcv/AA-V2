const { Food } = require('./food');

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
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
        let obj;
        let index;


        // search through item array in current room for the item being taken
        this.currentRoom.items.forEach( (item, i) => {
            if (item.name === itemName) {
                obj = item;
                index = i;
            }
        })

        // use index of taken obj/item to remove item from room item list
        this.currentRoom.items = this.currentRoom.items.slice(0, index).concat(this.currentRoom.items.slice(index + 1));

        this.items.push(obj);
        return obj;
    }

    dropItem(itemName) {

        // Fill this in
        let obj;
        let index;


        // search through item array in player inventory for the item being dropped
        this.items.forEach( (item, i) => {
            if (item.name === itemName) {
                obj = item;
                index = i;
            }
        })

        // remove the item from player items array
        this.items = this.items.slice(0, index).concat(this.items.slice(index + 1));

        // push the item into the room item array
        this.currentRoom.items.push(obj);
        return obj;
    }

    eatItem(itemName) {
        // Fill this in

        if (this.getItemByName(itemName) instanceof Food) {

            return this.dropItem(itemName);
        }
    }

    getItemByName(name) {

        // Fill this in
        let obj;

        this.items.forEach( item => {
            if (item.name === name) {
                obj = item;
            }
        })

        return obj;
    }
}

module.exports = {
  Player,
};

// let item = new Item("rock", "just a simple rock");
// let player = new Player("player");

// player.items.push(item);

// console.log(player.takeItem('rock'))
// console.log(player.items);
