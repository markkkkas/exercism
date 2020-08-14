//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  _isZero() {
    return !this.a || !this.b || !this.c;
  }

  isEquilateral() {
    if (!this._isZero()) {
      if (this.a === this.b && this.b === this.c) return true;
    }
    return false;
  }

  isIsosceles() {
    if (!this._isZero()) {
      if (this.a === this.b || this.a === this.c || this.b === this.c)
        return true;
    }
    return false;
  }

  isScalene() {
    if (!this._isZero()) {
      if (this.a != this.b && this.a != this.c && this.b != this.c) return true;
    }
    return false;
  }
}
