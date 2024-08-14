export default class Hole {
  hole = null;

  constructor(x, y, radius = 15, color = "black") {
    this.pos = { x, y };
    this.radius = radius;
    this.color = color;
  }
}