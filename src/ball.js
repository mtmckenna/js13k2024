export default class Ball {

  mass = 1;
  
  constructor(x, y, startAngle = 0, radius = 8) {
    this.radius = radius;
    this.color = "#fff";
    this.pos = { x, y };
    this.originalPos = { x, y };
    this.vel = { x: 0, y: 0 };
    this.hole = null;
    this.mass = radius;
    this.startAngle = startAngle;
    this.pos.x = x;
    this.pos.y = y;
    this.alpha = 1.0;
    this.falling = false;
    this.friction = 0;
  }

  project(axis) {
    const centerProjection = this.pos.x * axis.x + this.pos.y * axis.y;
    return {
      min: centerProjection - this.radius,
      max: centerProjection + this.radius
    };
  }

  update() {
    // const BASE_FRICTION = 0.98;
    const MIN_VEL = 0.01;
    const currentFriction = .98 - this.friction;

    // Apply friction scaled by the timeFactor
    this.vel.x *= currentFriction;
    this.vel.y *= currentFriction;

    // If velocity is very small, set it to 0 to prevent jitter
    if (Math.abs(this.vel.x) < MIN_VEL) this.vel.x = 0;
    if (Math.abs(this.vel.y) < MIN_VEL) this.vel.y = 0;

    // Scale the movement step by the timeFactor
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }


  reset() {
    this.pos.x = this.originalPos.x;
    this.pos.y = this.originalPos.y;
    this.hole = null;
    this.vel.x = 0;
    this.vel.y = 0;
    this.falling = false;
    this.alpha = 1.0;
  }
}
