class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static get factory() {
    return new PointFactory();
  }
}

class PointFactory {
  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}
let p = PointFactory.newCartesianPoint(4, 5);
console.log(p);

p = Point.factory.newPolarPoint(5, Math.PI / 2);
console.log(p);
