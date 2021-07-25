const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class HotDrink {
  consume() {}
}

class Tea extends HotDrink {
  consume() {
    console.log("Tea");
  }
}

class Coffee extends HotDrink {
  consume() {
    console.log("Coffee");
  }
}

class HotDrinkfactory {
  prepare(amount) {}
}

class TeaFactory extends HotDrinkfactory {
  prepare(amount) {
    console.log("Tea is preparing");
    return new Tea();
  }
}

class Coffeefactory extends HotDrinkfactory {
  prepare(amount) {
    console.log("Coffee is preparing");
    return new Coffee();
  }
}

let AvailableDrink = Object.freeze({
  coffee: Coffeefactory,
  tea: TeaFactory,
});

class HotDrinkMachine {
  constructor() {
    this.factories = [];

    for (let drink in AvailableDrink) {
      this.factories[drink] = new AvailableDrink[drink]();
    }
  }

  interact(consumer) {
    rl.question("Please specify drink and amount (e.g., tea, 50)", (answer) => {
      let parts = answer.split(" ");
      let name = parts[0];
      let amount = parseInt(parts[1]);
      let d = this.factories[name].prepare(amount);
      rl.close();
      consumer(d);
    });
  }

  make(type) {
    switch (type) {
      case "tea":
        return new TeaFactory().prepare(200);
      case "coffee":
        return new Coffeefactory().prepare(150);
      default:
        throw new Error("Type is not defined");
    }
  }
}

let machine = new HotDrinkMachine();
// rl.question("WHich drink?", function (answer) {
//   let drink = machine.make(answer);
//   drink.consume();

//   rl.close();
// });

machine.interact(function (drink) {
  drink.consume();
});
