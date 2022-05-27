const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = Array(this.capacity).fill(null);
  }

  hash(key) {
    // Your code here
    let hex = sha256(key);
    let value = parseInt(hex.slice(0,8), 16);

    return value;
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    let index = this.hashMod(key);

    if (this.data[index]) {
      throw new Error('hash collision or same key/value pair already exists!');
      
    } else {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    };
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    let index = this.hashMod(key);

    if (this.data[index]) {
      let newHead = new KeyValuePair(key, value);
      newHead.next = this.data[index];
      this.data[index] = newHead;
      this.count++;

    } else {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    };
  }

  insert(key, value) {
    // Your code here
    let index = this.hashMod(key);

    if (this.data[index]) {
      let tracker = this.data[index];
      let updated = false;

      while (tracker) {
        if (tracker.key === key) {
          tracker.value = value;
          updated = true;
        };
        tracker = tracker.next;
      };

      if (!updated) {
        let newHead = new KeyValuePair(key, value);
        newHead.next = this.data[index];
        this.data[index] = newHead;
        this.count++
      };

    } else {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    };
  };

}


module.exports = HashTable;
