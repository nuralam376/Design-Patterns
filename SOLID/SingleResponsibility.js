const fs = require("fs");

class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c} : ${text}`;
    this.entries[c] = entry;
    return c;
  }

  deleteEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }
}

Journal.count = 0;

class PersistentManager {
  saveToFile(filename, journal) {
    fs.writeFileSync(filename, journal.toString());
  }
}

let journal = new Journal();
journal.addEntry("Lorem Ipsum");
journal.addEntry("Dolor sit");
console.log(journal.toString());

const p = new PersistentManager();
p.saveToFile("file.txt", journal);
