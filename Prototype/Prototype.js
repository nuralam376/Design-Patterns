class Address {
  constructor(streetAddress, city, country) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.country = country;
  }

  toString() {
    return `Address : ${this.streetAddress}, ${this.city}, ${this.country}`;
  }

  deepCopy() {
    return new Address(this.streetAddress, this.city, this.country);
  }
}

class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  toString() {
    return `${this.name} lives at ${this.address}`;
  }

  deepCopy() {
    return new Person(this.name, this.address.deepCopy());
  }

  greet() {
    return `Hello, I'm ${this.name} and I live at ${this.address.toString()}`;
  }
}

class Serializer {
  constructor(types) {
    this.types = types;
  }

  markRecursive(object) {
    let idx = this.types.findIndex((t) => t.name === object.constructor.name);

    if (idx !== -1) {
      object["typeIndex"] = idx;

      for (let key in object) {
        if (object.hasOwnProperty(key) && object[key] != null) {
          this.markRecursive(object[key]);
        }
      }
    }
  }

  reconstructRecursive(object) {
    if (object.hasOwnProperty("typeIndex")) {
      let type = this.types[object.typeIndex];
      let obj = new type();

      for (let key in object) {
        if (object.hasOwnProperty(key) && object[key] != null) {
          obj[key] = this.reconstructRecursive(object[key]);
        }
        delete obj.typeIndex;
        return obj;
      }
    }
    return object;
  }

  clone(object) {
    this.markRecursive(object);
    let copy = JSON.parse(JSON.stringify(object));
    return this.reconstructRecursive(copy);
  }
}

const person1 = new Person(
  "Person1",
  new Address("123, Angel Road", "London", "UK")
);

person2 = person1.deepCopy();

person2.name = "Person2";
person2.address.streetAddress = "234, Demo Road";

console.log(person1.toString());
console.log(person2.toString());

let person3 = JSON.parse(JSON.stringify(person1));
let s = new Serializer([Person, Address]);
person3 = s.clone(person1);
console.log(person2.greet());
