function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');


/********************************* Scenario 1 *********************************/
// eat(); // ?    return 'undefined eats fish food'


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;      return assign function eat to nemo.eat
// nemo.eat(); // ?     return 'Nemo eats fish food'


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;      return assign function eat to nemo.eat
// eat(); // ?          return 'undefined eats fish food


/********************************* Scenario 4 *********************************/
// nemo.swim(); // ?    return 'Nemo swimming in the water'


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;    return nemo.swim function assigned to swim
// swim(); // ?               return throw error. Type Error.
