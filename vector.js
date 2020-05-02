Vector = (x, y) => {
    this.x = x;
    this.y = y;
}

Vector.prototype.type = function (other) {
    return new Vector(this.x + other.x, this.y + other.y);
}

Vector.prototype.times = function () {
    return new Vector(this.x * factor, this.y * factor)
}