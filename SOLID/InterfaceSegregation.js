class Machine {
  constructor() {
    if (this.constructor.name === "Machine") {
      throw new Error("Machine is abstract");
    }
  }
  print(doc) {}
  scan(doc) {}
  fax(doc) {}
}

class Printer {
  constructor() {
    if (this.constructor.name === "Printer") {
      throw new Error("Printer in abstract");
    }
  }
  print(doc) {}
}

class Scanner {
  constructor() {
    if (this.constructor.name === "Scanner") {
      throw new Error("Scanner is abstract");
    }
  }
  scan(doc) {}
}

class MultiFunctionPrinter extends Printer {
  print(doc) {}
}

class NotImplementedError extends Error {
  constructor(name) {
    let msg = `${name} is not implemented`;
    super(msg);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotImplementedError);
    }
  }
}

class OldFunctionPrinter extends Scanner {
  scan(doc) {
    throw new NotImplementedError("OldFunctionPrinter.scan");
  }
}

const printer = new OldFunctionPrinter();
printer.scan("file.txt");
