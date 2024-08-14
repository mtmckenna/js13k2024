export default class Level {
  balls = [];
  walls = [];
  holes = [];
  bumps = [];
  transitioningAway = false;
  backgroundColor = "#557ad9";
  cssBackgroundColor = "red";
  cssButtonColor = "red";
  cssButtonShadowColor = "red";
  cssUiBackgroundColor = "red";
  textColor = "#ffffff";
  width = 500;
  height = 500;
  hit = false;

  reset() {
    this.hit = false;
    this.transitioningAway = false;
    this.balls.forEach(ball => {
      ball.reset()
    });

    this.walls.forEach(wall => {
      wall.reset();
    });

    document.getElementById("js-place-wall").classList.remove('disabled');
    document.getElementById("js-place-wall").setAttribute('disabled', false);

    document.body.style.backgroundColor = this.cssBackgroundColor;
  }

  
  get solved() {
    for (let i = 0; i < this.balls.length; i++) {
      if (!this.balls[i].hole) {
        return false;
      }
    }

    return true;
  }
}