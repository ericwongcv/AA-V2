class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.capacity = defaultSize;
    this.length = 0;
    this.data = Array(this.capacity);
  };

  read(index) {

    // Your code here
    return this.data[index];
  }

  push(val) {

    // Your code here
    if (this.length >= this.capacity) { this.resize() };
    
    this.data[this.length] = val;
    this.length++;

    return this.data;
  };


  pop() {

    // Your code here
    let popped = this.data[this.length - 1];

    this.data[this.length - 1] = undefined;
    this.length--;

    return popped;
  };

  shift() {

    // Your code here
    let first = this.data[0];
    this.length--;

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    };

    return first;
  };

  unshift(val) {

    // Your code here
    if (this.length >= this.capacity) { this.resize() };
    
    this.length++;

    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i]
    };

    this.data[0] = val;
    return this.data;
  };

  indexOf (val) {

    // Your code here
    let index = -1;

    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        index = i;
        break;
      }
    }

    return index;
  }

  resize () {

    // Your code here
    this.capacity *= 2;
    let newArray = Array(this.capacity);

    for(let i = 0; i < this.length; i++) {
      newArray[i] = this.data[i];
    }

    this.data = newArray;
    return this.data;
  }

}


module.exports = DynamicArray;
