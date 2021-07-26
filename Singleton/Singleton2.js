class Person {
  get name() {
    return Person._name;
  }

  set name(value) {
    Person._name = value;
  }

  get age() {
    return Person._age;
  }

  set age(value) {
    Person._age = value;
  }

  toString() {
    return `I'm ${this.name} and I'm ${this.age} years old`;
  }
}

Person._name = undefined;
Person._age = undefined;

let p1 = new Person();
p1.name = "Person1";
p1.age = 23;

let p2 = new Person();
p2.name = "Person2";
p2.age = 25;

console.log(p1.toString());
console.log(p2.toString());
