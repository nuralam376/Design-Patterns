const RelationShip = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2,
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

class RelationShipBrowser {
  constructor() {
    if (this.constructor.name === "RelationShipBrowser") {
      throw new Error("RelationshipBrowser is abstract");
    }
  }

  findAllChildrenOf(name) {}
}

class RelationShips extends RelationShipBrowser {
  constructor() {
    super();
    this.data = [];
  }

  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: RelationShip.parent,
      to: child,
    });
  }

  findAllChildrenOf(name) {
    return this.data
      .filter(
        (rel) => rel.from.name === name && rel.type === RelationShip.parent
      )
      .map((r) => r.to);
  }
}

class Research {
  //   constructor(relationShips) {
  //     let relations = relationShips.data;
  //     for (let rel of relations.filter(
  //       (r) => r.from.name === "John" && r.type === RelationShips.parent
  //     )) {
  //       console.log(`John has a child of ${rel.to.name}`);
  //     }
  //   }
  constructor(browser) {
    for (let rel of browser.findAllChildrenOf("John")) {
      console.log(`John has a child ${rel.name}`);
    }
  }
}

let parent = new Person("John");
let child1 = new Person("Jane");
let child2 = new Person("Max");

let rel = new RelationShips();
rel.addParentAndChild(parent, child1);
rel.addParentAndChild(parent, child2);

let research = new Research(rel);
