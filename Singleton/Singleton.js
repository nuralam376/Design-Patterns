class Singleton {
  constructor() {
    const instance = this.constructor.instance;

    if (instance) {
      return instance;
    }
    this.constructor.instance = this;
  }
  print() {
    console.log("Instance printing...");
  }
}

const s1 = new Singleton();
const s2 = new Singleton();

console.log(s1 === s2);
s1.print();
