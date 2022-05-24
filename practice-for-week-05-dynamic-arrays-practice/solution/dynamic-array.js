class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.data = Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;

  }

  read(index) {

    // Your code here

    return this.data[index];
  }

  unshift(val) {

    // Your code here

    for (let i = this.capacity + 1; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = val;
    this.length++;

    return this.data;
  }
}


module.exports = DynamicArray;
