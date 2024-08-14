import Level from "../level.js";
import Ball from "../ball.js";
import Hole from "../hole.js";
import Wall from "../wall.js";

class Level01 extends Level {
    backgroundColor = "#8eb087";

    constructor() {
        super();
        this.holes = [new Hole(400, 250)];
        this.balls = [new Ball(250, 250)];
    }

}

class Level02 extends Level {
    backgroundColor = "#ffe55e";

    constructor() {
        super();
        this.holes = [new Hole(400, 125), new Hole(400, 375)];
        this.balls = [new Ball(250, 125), new Ball(250, 375)];
    }
}

class Level03 extends Level {
    backgroundColor = "#ffe55e";

    constructor() {
        super();
        this.holes = [new Hole(100, 125), new Hole(400, 375)];
        this.balls = [new Ball(250, 125), new Ball(250, 375, Math.PI)];
    }
}


class Level04 extends Level {
    backgroundColor = "#374d93";

    constructor() {
        super();
        this.holes = [new Hole(400, 125), new Hole(400, 375)];
        this.balls = [new Ball(50, 125), new Ball(250, 375, Math.PI)];
        this.walls = [new Wall(100, 50, 100, 200, false)];
    }
}

class Level05 extends Level {
    backgroundColor = "#374d93";

    constructor() {
        super();
        this.holes = [new Hole(400, 125), new Hole(400, 375)];
        this.balls = [new Ball(150, 125), new Ball(250, 375, Math.PI)];
        this.walls = [
            new Wall(5, 0, 5, 500, false),
            new Wall(495, 0, 495, 500, false)
        ];
    }
}

class Level06 extends Level {
    backgroundColor = "#374d93";

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
    backgroundColor = "#374d93";

    constructor() {
        super();
        this.holes = [new Hole(150, 400), new Hole(250, 400), new Hole(350, 400)];
        this.balls = [new Ball(150, 150), new Ball(250, 200), new Ball(350, 250)];
        this.walls = [];
    }
}

// class Level08 extends Level {
//     backgroundColor = "#374d93";
//
//     constructor() {
//         super();
//         this.holes = [new Hole(250, 250)];
//         const d = 150;
//         this.balls = [
//             new Ball(250 + d, 250, 0),
//             new Ball(250 + d * Math.cos(Math.PI / 3), 250 + d * Math.sin(Math.PI / 3), Math.PI / 3),
//             new Ball(250 + d * Math.cos(2 * Math.PI / 3), 250 + d * Math.sin(2 * Math.PI / 3), 2 * Math.PI / 3),
//             new Ball(250 + d * Math.cos(Math.PI), 250 + 50 * Math.sin(Math.PI), Math.PI),
//             new Ball(250 + d * Math.cos(4 * Math.PI / 3), 250 + d * Math.sin(4 * Math.PI / 3), 4 * Math.PI / 3),
//             new Ball(250 + d * Math.cos(5 * Math.PI / 3), 250 + d * Math.sin(5 * Math.PI / 3), 5 * Math.PI / 3)
//         ];
//     }
// }

class Level08 extends Level {
    backgroundColor = "#374d93";

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
    backgroundColor = "#374d93";

    constructor() {
        super();
        this.holes = [new Hole(250, 250)];
        this.balls = [
            new Ball(50, 250, 0),
            new Ball(450, 250, Math.PI),
        ];
        this.walls = [
            new Wall(200, 200, 200, 300, false),
            // new Wall(300, 200, 300, 300, false),
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
    new Level09()
];

