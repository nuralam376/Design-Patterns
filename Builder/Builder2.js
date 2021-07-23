class Person {
  constructor() {
    this.streetAddress = this.postCode = this.city = "";

    this.companyName = this.position = this.annualIncome = "";
  }

  toString() {
    return `Person lives at ${this.streetAddress}, ${this.city}, ${this.postCode} and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`;
  }
}

class PersonBuilder {
  constructor(person = new Person()) {
    this.person = person;
  }

  get lives() {
    return new PersonAddressBuilder(this.person);
  }

  get works() {
    return new PersonJobBuilder(this.person);
  }

  build() {
    return this.person;
  }
}

class PersonJobBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  at(companyName) {
    this.person.companyName = companyName;
    return this;
  }

  asA(role) {
    this.person.position = role;
    return this;
  }

  earning(income) {
    this.person.annualIncome = income;
    return this;
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  at(address) {
    this.person.streetAddress = address;
    return this;
  }

  withPostCode(postCode) {
    this.person.postCode = postCode;
    return this;
  }

  in(city) {
    this.person.city = city;
    return this;
  }
}

const pb = new PersonBuilder();
const person = pb.lives
  .at("Mirpur")
  .withPostCode(1216)
  .in("Dhaka")
  .works.at("Binate")
  .asA("Software Engineer")
  .earning("40k")
  .build();

console.log(person.toString());
