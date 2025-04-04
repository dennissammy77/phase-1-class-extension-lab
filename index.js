class Polygon {
    constructor(sides) {
        if (!Array.isArray(sides) || sides.some(side => typeof side !== 'number' || side <= 0)) {
            throw new Error("Invalid sides: Must be an array of positive numbers.");
        }
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3) return false;
        const [a, b, c] = this.sides;
        return (a + b > c) && (a + c > b) && (b + c > a);
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) return false;
        return this.sides.every(side => side === this.sides[0]);
    }

    get area() {
        return this.isValid ? this.sides[0] ** 2 : null;
    }
}