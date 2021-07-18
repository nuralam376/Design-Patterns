class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  set width(width) {
    this._width = width;
  }

  set height(height) {
    this._height = height;
  }

  get Area() {
    return this._width * this._height;
  }

  get iSquare() {
    return this._width === this._height;
  }

  toString() {
    return `${this._width} x ${this._height} = ${this.Area}`;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  set width(value) {
    this._width = this._height = value;
  }

  set height(value) {
    this._height = this._width = value;
  }
}

const useClass = (rc) => {
  let width = rc._width;
  rc.height = 10;
  console.log(`Expected area : ${10 * width} but got ${rc.Area}`);
};

let rc = new Rectangle(5, 10);
console.log(rc.toString());
useClass(rc);

let sq = new Square(5);
sq.width = 10;
console.log(sq.toString());
useClass(sq);
