import Ball from "../ball.js";
import Hole from "../hole.js";
import Wall from "../wall.js";

export class Level {
    balls = [];
    walls = [];
    holes = [];
    transitioningAway = false;
    backgroundColor = "red";
    cssBackgroundColor = "red";
    cssButtonColor = "red";
    cssButtonShadowColor = "red";
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

class Level01 extends Level {
    backgroundColor = "#B4E7CE";
    cssBackgroundColor = "#59A96A";
    cssButtonColor = "#9BDEAC";
    cssButtonShadowColor = "#474A2C";

    constructor() {
        super();
        this.holes = [new Hole(400, 250)];
        this.balls = [new Ball(250, 250)];
    }

}

class Level02 extends Level {
    backgroundColor = "#BB8A89";
    cssBackgroundColor = "#977390";
    cssButtonColor = "#AC7B7D";
    cssButtonShadowColor = "#785589";

    constructor() {
        super();
        this.holes = [new Hole(400, 125), new Hole(400, 375)];
        this.balls = [new Ball(250, 125), new Ball(250, 375)];
    }
}

class Level03 extends Level {
    backgroundColor = "#F4F4F9";
    cssBackgroundColor = "#586F7C";
    cssButtonColor = "#B8DBD9";
    cssButtonShadowColor = "#2F4550";

    constructor() {
        super();
        this.holes = [new Hole(100, 125), new Hole(400, 375)];
        this.balls = [new Ball(250, 125), new Ball(250, 375, 0)];
    }
}


class Level04 extends Level {
    backgroundColor = "#AFB3F7";
    cssBackgroundColor = "#7A93AC";
    cssButtonColor = "#92BCEA";
    cssButtonShadowColor = "#617073";

    constructor() {
        super();
        this.holes = [new Hole(400, 125), new Hole(400, 375)];
        this.balls = [new Ball(50, 125), new Ball(250, 375, 0)];
        this.walls = [new Wall(100, 50, 100, 200, false)];
    }
}

class Level05 extends Level {
    backgroundColor = "#FEC0AA";
    cssBackgroundColor = "#84732B";
    cssButtonColor = "#EC4E20";
    cssButtonShadowColor = "#574F2A";

    constructor() {
        super();
        this.holes = [new Hole(400, 125), new Hole(400, 375)];
        this.balls = [new Ball(150, 125), new Ball(250, 375, 0)];
        this.walls = [
            new Wall(25, 0, 25, 500, false),
            new Wall(475, 0, 475, 500, false)
        ];
    }
}

class Level06 extends Level {
    backgroundColor = "#F2F6D0";
    cssBackgroundColor = "#D9D2B6";
    cssButtonColor = "#D0E1D4";
    cssButtonShadowColor = "#71697A";
    constructor() {
        super();
        this.holes = [new Hole(250, 150), new Hole(100, 350), new Hole(400, 350)];

        const ballPos = [
            {x: 100, y: 200},
            {x: 400, y: 200},
            {x: 250, y: 400}
            ]

        // Calculate the centroid of the triangle formed by the holes
        const centroidX = (ballPos[0].x + ballPos[1].x + ballPos[2].x) / 3;
        const centroidY = (ballPos[0].y + ballPos[1].y + ballPos[2].y) / 3;

        // Calculate the angles for the balls to point towards the centroid
        const angleToCentroid = (ballX, ballY) => {
            return Math.atan2(centroidY - ballY, centroidX - ballX);
        };

        this.balls = [
            new Ball(ballPos[0].x,ballPos[0].y, angleToCentroid(100, 200)),
            new Ball(ballPos[1].x, ballPos[1].y, angleToCentroid(400, 200)),
            new Ball(ballPos[2].x, ballPos[2].y, angleToCentroid(250, 400))
        ];
        this.walls = [];
    }
}

class Level07 extends Level {
    backgroundColor = "#FAA275";
    cssBackgroundColor = "#CE6A85";
    cssButtonColor = "#FF8C61";
    cssButtonShadowColor = "#985277";

    constructor() {
        super();
        this.holes = [new Hole(150, 400), new Hole(250, 400), new Hole(350, 400)];
        this.balls = [new Ball(150, 150), new Ball(250, 200), new Ball(350, 250)];
        this.walls = [];
    }
}

class Level08 extends Level {
    backgroundColor = "#BEEF9E";
    cssBackgroundColor = "#828C51";
    cssButtonColor = "#A6C36F";
    cssButtonShadowColor = "#335145";

    constructor() {
        super();
        this.holes = [new Hole(250, 250)];
        const d = 150;
        this.balls = [
            new Ball(250 + d, 250, 0),
            new Ball(250 + d * Math.cos(Math.PI), 250 + d * Math.sin(Math.PI), Math.PI),
        ];
    }
}

class Level09 extends Level {
    backgroundColor = "#CF9893";
    cssBackgroundColor = "#A96DA3";
    cssButtonColor = "#BC7C9C";
    cssButtonShadowColor = "#3B3B58";

    constructor() {
        super();
        this.holes = [
            new Hole(250, 300),
            new Hole(200, 250)
        ];
        this.balls = [
            new Ball(250, 200, -Math.PI),
            new Ball(300, 250, -Math.PI/2),
        ];
        this.walls = [
            new Wall(200, 200, 300, 300, false),
            new Wall(300, 200, 200, 300, false),
        ];
    }
}

class Level10 extends Level {
    backgroundColor = "#FFA9E7";
    cssBackgroundColor = "#7F2CCB";
    cssButtonColor = "#FF84E8";
    cssButtonShadowColor = "#414361";
    constructor() {
        super();
        this.holes = [
            new Hole(200, 200),
            new Hole(400, 400)
        ];
        this.balls = [
            new Ball(250, 250, -Math.PI),
            new Ball(300, 300, -Math.PI/2),
        ];
        this.walls = [
            // new Wall(300, 400, 400, 300, false),
            new Wall(100, 200, 200, 100, false),
        ];
    }
}

class Level11 extends Level {
    backgroundColor = "#FFA9E7";
    cssBackgroundColor = "#7F2CCB";
    cssButtonColor = "#FF84E8";
    cssButtonShadowColor = "#414361";
    constructor() {
        super();
        this.holes = [
            new Hole(450, 50),
            new Hole(450, 250),
            new Hole(450, 475)
        ];
        this.balls = [
            new Ball(250, 200, -Math.PI),
            new Ball(175, 325, -Math.PI/2),
            new Ball(325, 325, -Math.PI/3),

        ];
        this.walls = [
            // new Wall(100, 200, 200, 100, false),
        ];
    }
}

export const generateLevels = () => [
    new Level01(),
    new Level02(),
    new Level03(),
    new Level04(),
    new Level05(),
    new Level06(),
    new Level07(),
    new Level08(),
    new Level09(),
    new Level10(),
    new Level11(),
];