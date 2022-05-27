class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here

    this.count = 0;
    this.capacity = numBuckets;
    this.data = Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here

    if (this.count / this.capacity >= 0.7) this.resize();

    let index = this.hashMod(key);
    // let updated = false;

    if (this.data[index]) {
      let current = this.data[index];

      while (current) {
        if (current.key === key) {
          current.value = value;
          // updated = true;
          return;
        }
        current = current.next;
      }

      // if (!updated) {
        let newNode = new KeyValuePair(key, value);
        newNode.next = this.data[index];
        this.data[index] = newNode;
        this.count++;
      // }

    } else {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    }
  }


  read(key) {
    // Your code here
    let index = this.hashMod(key);

    if (this.data[index]) {
      let current = this.data[index];

      while (current) {
        if (current.key === key) {
          return current.value;
        }
        current = current.next;
      }
    }
    // return undefined;
  }


  resize() {
    // Your code here

    this.capacity *= 2;
    this.count = 0;
    let dupData = this.data.slice();
    this.data = Array(this.capacity).fill(null);
    

    dupData.forEach( node => {
      if (node) {
        let current = node;
        while(current) {
          this.insert(current.key, current.value);
          current = current.next;
        }
      };
    });

  }


  delete(key) {
    // Your code here
    if (this.read(key)) {
      this.insert(key, undefined);
      this.count--;
    } else {
      return 'Key not found';
    }
  }
}


module.exports = HashTable;
