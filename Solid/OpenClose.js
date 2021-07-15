let Colors = Object.freeze({
  red: "Red",
  green: "Green",
  blue: "Blue",
});

let Sizes = Object.freeze({
  small: "Small",
  medium: "Medium",
  large: "Large",
});

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

class ProductFilter {
  //   filterByColor(products, color) {
  //     return products.filter((p) => p.color === color);
  //   }

  filter(items, spec) {
    return items.filter((item) => spec.isSatisfied(item));
  }
}

class ColorSpecification {
  constructor(color) {
    this.color = color;
  }

  isSatisfied(item) {
    return item.color === this.color;
  }
}

class SizeSpecification {
  constructor(size) {
    this.size = size;
  }

  isSatisfied(item) {
    return item.size === this.size;
  }
}

class AndSpecification {
  constructor(...spec) {
    this.spec = spec;
  }

  isSatisfied(item) {
    return this.spec.every((x) => x.isSatisfied(item));
  }
}

const apple = new Product("Apple", Colors.green, Sizes.medium);
const house = new Product("House", Colors.blue, Sizes.medium);
const tree = new Product("Tree", Colors.green, Sizes.large);

const products = [apple, house, tree];
const productFilter = new ProductFilter();

// for (let product of productFilter.filterByColor(products, Colors.green)) {
//   console.log(`${product.name} is ${product.color}`);
// }

for (let product of productFilter.filter(
  products,
  new ColorSpecification(Colors.green)
)) {
  console.log(`${product.name} is ${product.color}`);
}

for (let product of productFilter.filter(
  products,
  new SizeSpecification(Sizes.large)
)) {
  console.log(`${product.name} is ${product.size}`);
}

for (let product of productFilter.filter(
  products,
  new ColorSpecification(Colors.green),
  new SizeSpecification(Sizes.large)
)) {
  console.log(`${product.name} is ${product.color} and ${product.size}`);
}
