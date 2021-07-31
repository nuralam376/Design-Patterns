class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }

  addValue(value) {
    this.value = this.value + value;
  }

  subtractValue(value) {
    this.value = this.value - value;
  }

  multiplyValue(value) {
    this.value = this.value * value;
  }

  divideValue(value) {
    this.value = this.value / value;
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }

  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

class SubtractCommand {
  constructor(value) {
    this.valueToSubtract = value;
  }

  execute(currentValue) {
    return currentValue - this.valueToSubtract;
  }

  undo() {
    return currentValue + this.valueToSubtract;
  }
}

class AddThenSubtract {
  constructor(valueToAdd, valueToSubtract) {
    this.addCommand = new AddCommand(valueToAdd);
    this.subtractCommand = new SubtractCommand(valueToSubtract);
  }

  execute(currentValue) {
    const newValue = this.addCommand.execute(currentValue);
    return this.subtractCommand.execute(newValue);
  }

  undo() {
    const newValue = this.subtractCommand.execute(currentValue);
    return this.addCommand.undo(newValue);
  }
}

const calculator = new Calculator();
calculator.executeCommand(new AddCommand(5));
calculator.executeCommand(new AddCommand(5));

calculator.executeCommand(new SubtractCommand(5));
calculator.executeCommand(new AddThenSubtract(20, 10));
console.log(calculator.value);
