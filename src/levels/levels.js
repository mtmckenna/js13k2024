import Ball from "../ball.js";
import Hole from "../hole.js";
import Wall from "../wall.js";

export class Level {
    balls = [];
    walls = [];
    holes = [];
    number=0;
    transitioningAway = false;
    backgroundColor = "red";
    cssBackgroundColor = "red";
    cssButtonColor = "red";
    cssButtonShadowColor = "red";
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

        const wallEl = document.getElementById("js-place-wall");
        wallEl.style.display = "block";
        // remove jiggle class from wallEl
        wallEl.classList.remove('jiggle');

        if (this.number < 5) {
            wallEl.style.display = "none";
        } else if(this.number === 5) {
            wallEl.classList.add('jiggle');
        }
    }

    get solved() {
        for (let i = 0; i < this.balls.length; i++) {
            if (!this.balls[i].hole) {
                return false;
            }
        }

        return true;
    }

    update() {
    }

    draw(ctx) {
    }
}

class Level01 extends Level {
    backgroundColor = "#B4E7CE";
    cssBackgroundColor = "#59A96A";
    cssButtonColor = "#9BDEAC";
    cssButtonShadowColor = "#474A2C";
    number = 1;

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
    number= 2;

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
    number= 3;

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
    number= 4;

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
    number=5;

    constructor() {
        super();
        this.holes = [new Hole(400, 125), new Hole(400, 375)];
        this.balls = [new Ball(150, 125), new Ball(250, 375, 0)];
        this.walls = [
            new Wall(25, 0, 25, 500, false),
            new Wall(475, 0, 475, 500, false)
        ];
    }

    draw(ctx) {
        // draw dashed rectangle to the left of the first hole
        ctx.beginPath();
        ctx.setLineDash([5, 15]);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.rect(100, 75, 20, 100);
        ctx.stroke();
    }
}

class Level06 extends Level {
    backgroundColor = "#F2F6D0";
    cssBackgroundColor = "#D9D2B6";
    cssButtonColor = "#D0E1D4";
    cssButtonShadowColor = "#71697A";
    number= 6;

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
    number=7;

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
    number= 8;

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
    number= 9;

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
    number= 10;

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
    backgroundColor = "#93B5C6";
    cssBackgroundColor = "#F0CF65";
    cssButtonColor = "#D7816A";
    cssButtonShadowColor = "#BD4F6C";
    number = 11;

    constructor() {
        super();
        this.holes = [
            new Hole(100, 100),
            new Hole(250, 100),
            new Hole(400, 100)
        ];
        this.balls = [
            new Ball(250, 200, Math.PI),
            new Ball(175, 325, Math.PI/4),
            new Ball(325, 325, -Math.PI/4),

        ];
        this.walls = [
            // new Wall(100, 200, 200, 100, false),
        ];
    }
}

class Level12 extends Level {
    backgroundColor = "#524948";
    cssBackgroundColor = "#7CB4B8";
    cssButtonColor = "#70F8BA";
    cssButtonShadowColor = "#57467B";
    number = 12;

    constructor() {
        super();
        this.holes = [
            new Hole(200, 200),
            new Hole(300, 200),
        ];
        this.balls = [
            new Ball(100, 250, Math.PI),
            new Ball(400, 250, Math.PI/3),
        ];
        this.walls = [
            new Wall(125, 125, 175, 300, false),
            new Wall(375, 125, 325, 300, false),
            new Wall(125, 125, 175, 150, false),
            new Wall(375, 125, 325, 150, false),
            new Wall(175, 150, 325, 150,false),
            new Wall(175, 300, 325, 300,false),
            // now the cat smile
            new Wall(200, 250, 200, 275, false),
            new Wall(300, 250, 300, 275, false),
            new Wall(200, 275, 300, 275, false),

        ];
    }
}

class Level13 extends Level {
    backgroundColor = "#6A8D73";
    cssBackgroundColor = "#E4FFE1";
    cssButtonColor = "#FFE8C2";
    cssButtonShadowColor = "#F0A868";
    number = 13;

    constructor() {
        super();
        this.holes = [
            new Hole(250, 250),
        ];
        this.balls = [
            new Ball(250, 100, Math.PI),
        ];

        let leftWallX1 = 175;
        let leftWallY1 = 150;
        let leftWallX2 = 175;
        let leftWallY2 = 350;
        let rightWallX1 = 325;
        let rightWallY1 = 150;
        let rightWallX2 = 325;
        let rightWallY2 = 350;
        let topWallX1 = 185;
        let topWallY1 = 160;
        let topWallX2 = 315;
        let topWallY2 = 160;
        let bottomWallX1 = 185;
        let bottomWallY1 = 340;
        let bottomWallX2 = 315;
        let bottomWallY2 = 340;

        const w1= new Wall(leftWallX1, leftWallY1, leftWallX2, leftWallY2, false);
        const w2= new Wall(rightWallX1, rightWallY1, rightWallX2, rightWallY2, false);
        const w3= new Wall(topWallX1, topWallY1, topWallX2, topWallY2, false);
        const w4 = new Wall(bottomWallX1, bottomWallY1, bottomWallX2, bottomWallY2, false);

        this.walls = [w1, w2, w3, w4];
        this.levelWalls = [w1, w2, w3, w4];
    }

    update() {
        super.update();
        for (let i = 0; i < this.levelWalls.length; i++) {
            const wall = this.levelWalls[i];
            wall.rotate(.01, 250, 250);
        }
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
    new Level12(),
    new Level13()
];

