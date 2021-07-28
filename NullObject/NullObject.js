class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === "User1";
  }
}

class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }

  hasAccess() {
    return false;
  }
}

const users = [new User(1, "User1"), new User(2, "User2")];

function getUser(id) {
  const user = users.find((user) => user.id === id);

  if (user) {
    return user;
  } else {
    return new NullUser();
  }
}

function printUser(id) {
  const user = getUser(id);

  //   let name = "Guest";
  //   if (user != null && user.name != null) name = user.name;
  //   console.log("Hello " + name);

  //   if (user != null && user.hasAccess != null && user.hasAccess()) {
  //     console.log("You have access");
  //   } else {
  //     console.log("You do not have access");
  //   }

  console.log("Hello " + user.name);
  if (user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You do not have access");
  }
}

printUser(1);
printUser(2);
printUser(3);
