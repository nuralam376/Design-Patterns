class Address {
  constructor(zip, city) {
    this.zip = zip;
    this.city = city;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  setAddress(zip, city) {
    this.user.address = new Address(zip, city);
    return this;
  }

  build() {
    return this.user;
  }
}
const user = new UserBuilder("Abc")
  .setAge(20)
  .setAddress("123", "Dhaka")
  .build();
console.log(user);
