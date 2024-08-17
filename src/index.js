import Joystick  from "./joystick.js";
import Wall from "./wall.js";
import Arrow from "./arrow.js";
import WallPoint from "./wall_point.js";
import {calculateSeparation} from "./collision.js";
import {generateLevels} from "./levels/levels.js";

const BALL_MADE_THRESHOLD = 0.25;
const BALL_STOPPED_THRESHOLD = 0.15

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const INPUT_MODES = {
    hit: 1 << 0,        // 00001
    wall: 1 << 1,       // 00010
    moveHandle: 1 << 2, // 00100
    moveWall: 1 << 3,   // 01000
    bump: 1 << 4,       // 10000
    placeAny: (1 << 1) | (1 << 4),
    watching: 1 << 5,
    moving: (1 << 1) | (1 << 2) | (1 << 4)
};

let global = {
    stillAt: null,
    selectedWall: null,
    selectedVertex: null,
    inputMode: INPUT_MODES.hit,
    lastInputMode: INPUT_MODES.hit
};
global.ui = document.getElementById("game-ui");
global.title = document.getElementById("title-container");
global.holeNumber = document.getElementById("hole-number");
global.canvasContainer = document.getElementById("canvas-container");
document.getElementById("js-hit-ball").addEventListener("click", (e) => {
    e.preventDefault();
    if (e.currentTarget.classList.contains("disabled")) return;
    global.inputMode = INPUT_MODES.hit;

    e.currentTarget.classList.add("active");
    document.getElementById("js-place-wall").classList.remove("active");
    document.getElementById("js-place-bump").classList.remove("active");
    document.getElementById("js-hit-ball").style.boxShadow = `0 2px ${currentLevel.cssButtonShadowColor}`;
    document.getElementById("js-place-wall").style.boxShadow = `0 5px ${currentLevel.cssButtonShadowColor}`;
    document.getElementById("js-place-bump").style.boxShadow = `0 5px ${currentLevel.cssButtonShadowColor}`;

});
document.getElementById("js-place-wall").addEventListener("click", (e) => {
    e.preventDefault();
    if (e.currentTarget.classList.contains("disabled")) return;
    global.inputMode = INPUT_MODES.wall;
    e.currentTarget.classList.add("active");
    document.getElementById("js-hit-ball").classList.remove("active");
    document.getElementById("js-place-bump").classList.remove("active");
    document.getElementById("js-hit-ball").style.boxShadow = `0 5px ${currentLevel.cssButtonShadowColor}`;
    document.getElementById("js-place-wall").style.boxShadow = `0 2px ${currentLevel.cssButtonShadowColor}`;
    document.getElementById("js-place-bump").style.boxShadow = `0 5px ${currentLevel.cssButtonShadowColor}`;
});

document.getElementById("js-place-bump").addEventListener("click", (e) => {
    e.preventDefault();
    if (e.currentTarget.classList.contains("disabled")) return;
    global.inputMode = INPUT_MODES.bump;
    e.currentTarget.classList.add("active");
    document.getElementById("js-hit-ball").classList.remove("active");
    document.getElementById("js-place-wall").classList.remove("active");
    document.getElementById("js-hit-ball").style.boxShadow = `0 5px ${currentLevel.cssButtonShadowColor}`;
    document.getElementById("js-place-wall").style.boxShadow = `0 5px ${currentLevel.cssButtonShadowColor}`;
    document.getElementById("js-place-bump").style.boxShadow = `0 2px ${currentLevel.cssButtonShadowColor}`;
});

document.getElementById("js-reset").addEventListener("click", (e) => {
    e.preventDefault();
    currentLevel.reset();
    globalReset();
});

function getCanvasScalingFactor() {
    const widthScale = window.innerWidth / canvas.width;
    const heightScale = window.innerHeight / canvas.height;
    return Math.min(widthScale, heightScale);
}

const preWall = new Wall(0, 0, 0, 0, true, true);

const levels = generateLevels();
// const a = [.5, .5, .5];
// const b = [.5, .5, .5];
// const c = [2.0,1.0,0.0];
// const d = [0.5, 0.2, 0.25];

// for (let i = 0; i < levels.length; i++) {
//     const t = i / levels.length + .01;
//     // const t2 = ((i + 1) % levels.length) / levels.length + .01;
//     // const t3 = ((i + 2) % levels.length) / levels.length + .01;
//
//     const t2 = ((i + levels.length / 2) % levels.length) / levels.length + .01;
//     const t3 = ((i + 2) % levels.length) / levels.length + .01;
//
//     levels[i].backgroundColor = getColor(t, a, b, c, d);
//     levels[i].cssBackgroundColor = getColor(t2, a, b, c, d);
//     levels[i].cssHoleNumberColor = levels[i].cssBackgroundColor;
//     levels[i].cssHoleNumberBackgroundColor = levels[i].backgroundColor;
//
//     const buttonColor = getColor(t3, a, b, c, d);
//     // make a shadow color that is slightly darker than the button color BASED ON BUTTON COLOR
//     const shadowColor = getColor(t3, a, b, c, d).slice(5).split(",").map((v, i) => {
//         if (i === 3) return 1.0;
//         return Math.max(parseFloat(v)/2, 0.0);
//     }).join(",");
//
//     // make a UI background color that is the background color but slightly darker
//     const uiColor = getColor(t3, a, b, c, d).slice(5).split(",").map((v, i) => {
//         if (i === 3) return 0.5;
//         return Math.max(parseFloat(v)/2, 0.0);
//     }).join(",");
//     levels[i].cssButtonColor = buttonColor;
//     levels[i].cssButtonShadowColor = `rgba(${shadowColor})`;
//     levels[i].textColor = getTextColorForBackground(...rgbFromRgba(buttonColor));
//     levels[i].cssUiBackgroundColor = `rgba(${uiColor})`;
// }

let currentLevelIndex = 0;
let nextLevelIndex = (currentLevelIndex + 1) % levels.length;
let currentLevel = levels[currentLevelIndex];
currentLevel.reset();
let nextLevel = levels[nextLevelIndex];

const arrows = [];
const MAX_CIRCLE_RADIUS = Math.hypot(canvas.width, canvas.height) / 2;
let currentCircleRadius = MAX_CIRCLE_RADIUS;
const CIRCLE_SHRINK_RATE = 5;
const joystick = new Joystick(canvas, clickCallback, releaseCallback, moveCallback);

let wallPoint = new WallPoint();

function clickCallback() {
    // global.title.style.display = "none";
    global.title.style.opacity = 0;
    for (let i = 0; i < currentLevel.walls.length; i++) {
        const wall = currentLevel.walls[i];
        if (!wall.player) continue;

        const vertex = wall.pointInHandle(joystick.currentPos.x, joystick.currentPos.y);
        if (wall.pointInCloseButton(joystick.currentPos.x, joystick.currentPos.y)) {
            currentLevel.walls.splice(i, 1);
            return;
        } else if (vertex) {
            global.lastInputMode = global.inputMode;
            global.inputMode = INPUT_MODES.moveHandle;
            global.selectedWall = wall;
            global.selectedVertex = vertex;
            return;
        } else if (wall.isPointInside(joystick.currentPos.x, joystick.currentPos.y)) {
            global.lastInputMode = global.inputMode;
            global.inputMode = INPUT_MODES.moveWall;
            global.selectedWall = wall;
            global.selectedVertex = null;
        }
    }

    for (let i = 0; i < currentLevel.bumps.length; i++) {
        const wall = currentLevel.bumps[i];
        if (!wall.player) continue;

        const vertex = wall.pointInHandle(joystick.currentPos.x, joystick.currentPos.y);
        if (wall.pointInCloseButton(joystick.currentPos.x, joystick.currentPos.y)) {
            currentLevel.bumps.splice(i, 1);
            return;
        } else if (vertex) {
            global.lastInputMode = global.inputMode;
            global.inputMode = INPUT_MODES.moveHandle;
            global.selectedWall = wall;
            global.selectedVertex = vertex;
            return;
        } else if (wall.isPointInside(joystick.currentPos.x, joystick.currentPos.y)) {
            global.lastInputMode = global.inputMode;
            global.inputMode = INPUT_MODES.moveWall;
            global.selectedWall = wall;
            global.selectedVertex = null;
        }
    }

    // handle clicking on blank space
    if (global.inputMode === INPUT_MODES.hit) {
        hitBallClickCallback();
    } else if (global.inputMode & INPUT_MODES.placeAny) {
        placeWallPointClickCallback();
    }
}

function hitBallClickCallback() {
    arrows.length = 0;
    for (let i = 0; i < currentLevel.balls.length; i++) {
        const ball = currentLevel.balls[i];
        arrows.push(new Arrow(ball.pos.x, ball.pos.y, joystick.normalizedPos.x, joystick.normalizedPos.y));
    }
}

function placeWallPointClickCallback() {
    wallPoint.vertices.push({x: joystick.currentPos.x, y: joystick.currentPos.y});
}

function releaseCallback() {
    if (global.inputMode === INPUT_MODES.hit) {
        hitBallReleaseCallback();
    } else if (global.inputMode & INPUT_MODES.placeAny) {
        placeWallPointReleaseCallback();
    } else if (global.inputMode === INPUT_MODES.moveHandle) {
        global.inputMode = global.lastInputMode;
        global.selectedWall = null;
        global.selectedVertex = null;
    } else if (global.inputMode === INPUT_MODES.moveWall) {
        global.inputMode = global.lastInputMode;
        global.selectedWall = null;
        global.selectedVertex = null;
    }

    global.ui.style.backgroundColor = null;
}

function hitBallReleaseCallback() {
    if (arrows.length === 0) return;
    for (let i = 0; i < currentLevel.balls.length; i++) {
        const ball = currentLevel.balls[i];
        if (ball.hole) continue;

        const arrow = arrows[i];
        const x = Math.cos(arrow.angle) * arrow.magnitude * .05;
        const y = Math.sin(arrow.angle) * arrow.magnitude * .05;
        ball.vel.x = x;
        ball.vel.y = y;
    }

    arrows.length = 0;
    currentLevel.hit = true;
    global.inputMode = INPUT_MODES.watching;
    canvas.style.cursor = "not-allowed";
    document.getElementById("js-hit-ball").classList.add("disabled");
    document.getElementById("js-place-wall").classList.add("disabled");
    document.getElementById("js-place-bump").classList.add("disabled");
    const resetButton = document.getElementById("js-reset");
    resetButton.classList.remove("disabled");

    Array.from(document.getElementsByClassName("button")).forEach(button => {
        if (button.id === "js-reset") return;
        button.style.backgroundColor = null;
        button.style.boxShadow = null;
    });

    resetButton.style.backgroundColor = currentLevel.cssButtonColor;
    resetButton.style.boxShadow = `0 5px ${currentLevel.cssButtonShadowColor}`;
    resetButton.style.color = currentLevel.textColor;
}

function placeWallPointReleaseCallback() {
    if (wallPoint.vertices.length < 2) return;

    if (global.inputMode === INPUT_MODES.wall) {
        currentLevel.walls.push(new Wall(
            wallPoint.vertices[0].x,
            wallPoint.vertices[0].y,
            wallPoint.vertices[1].x,
            wallPoint.vertices[1].y,
            true
        ));
    } else if (global.inputMode === INPUT_MODES.bump) {
        currentLevel.bumps.push(new Wall(
            wallPoint.vertices[0].x,
            wallPoint.vertices[0].y,
            wallPoint.vertices[1].x,
            wallPoint.vertices[1].y,
            true,
            false
        ));
    }

        wallPoint = new WallPoint();

}

function moveCallback() {
    if (global.inputMode === INPUT_MODES.hit) {
        moveHitBallCallback();
    } else if (global.inputMode & INPUT_MODES.placeAny && joystick.pressed) {
        moveWallPointClickCallback();
    } else if (global.inputMode === INPUT_MODES.moveHandle) {
        moveHandleCallback();
    } else if (global.inputMode === INPUT_MODES.moveWall) {
        moveWallCallback();

    }
}

function moveHandleCallback() {
    if (global.selectedVertex) {
        if (global.selectedVertex === global.selectedWall.v1) {
            global.selectedWall.setVertices(
                joystick.currentPos.x,
                joystick.currentPos.y,
                global.selectedWall.v2.x,
                global.selectedWall.v2.y
            );
        } else {
            global.selectedWall.setVertices(
                global.selectedWall.v1.x,
                global.selectedWall.v1.y,
                joystick.currentPos.x,
                joystick.currentPos.y
            );
        }
    }
}

function moveWallCallback() {
    if (global.selectedWall) {
        const dx = joystick.currentPos.x - global.selectedWall.pos.x;
        const dy = joystick.currentPos.y - global.selectedWall.pos.y;
        global.selectedWall.setVertices(
            global.selectedWall.v1.x + dx,
            global.selectedWall.v1.y + dy,
            global.selectedWall.v2.x + dx,
            global.selectedWall.v2.y + dy
        )
    }
}

function moveHitBallCallback() {
    let angleOffset = 1;

    for (let i = 0; i < arrows.length; i++) {
        const arrow = arrows[i];
        const ball = currentLevel.balls[i];
        if (ball.hole) continue;


        angleOffset = ball.startAngle;

        const angle = angleOffset + angleFromJoystick(joystick);

        const magnitude = calculateMagnitude(
            joystick.innerPos.x,
            joystick.innerPos.y,
            joystick.outerPos.x,
            joystick.outerPos.y
        );

        arrow.angle = angle;
        arrow.magnitude = magnitude;
    }
}

function moveWallPointClickCallback() {
    // TODO: delete function?
    // wallPoint.vertices[wallPoint.vertices.length - 1].x = joystick.currentPos.x;
    // wallPoint.vertices[wallPoint.vertices.length - 1].y = joystick.currentPos.y;
}

function angleFromJoystick(joystick) {
    return Math.atan2(
        -(joystick.innerPos.y - joystick.outerPos.y),
        -(joystick.innerPos.x - joystick.outerPos.x)
    );
}

function checkEdgeCollisions(ball) {
    if (ball.pos.x + ball.radius < 0) {
        ball.pos.x = canvas.width - ball.radius;
    }

    if (ball.pos.x - ball.radius > canvas.width) {
        ball.pos.x = ball.radius;
    }

    if (ball.pos.y + ball.radius < 0) {
        ball.pos.y = canvas.height - ball.radius;
    }

    if (ball.pos.y - ball.radius > canvas.height) {
        ball.pos.y = ball.radius;
    }
}

function circlesIntersect(circle1, circle2) {
    const dx = circle1.pos.x - circle2.pos.x;
    const dy = circle1.pos.y - circle2.pos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < circle1.radius + circle2.radius;
}

function normalizedAmountOfCircleOverlap(circle1, circle2) {
    const dx = circle1.pos.x - circle2.pos.x;
    const dy = circle1.pos.y - circle2.pos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance > (circle1.radius + circle2.radius)) return 0.0;

    const max = circle1.radius + circle2.radius;

    return (max - distance) / max;
}

function resolveBallCollision(ball1, ball2) {
    // Calculate the vector between the ball centers
    const dx = ball2.pos.x - ball1.pos.x;
    const dy = ball2.pos.y - ball1.pos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Check if the distance is zero (to avoid division by zero)
    if (distance === 0) return; // Balls are exactly on top of each other

    // Calculate the minimum translation distance to push balls apart after intersecting
    const mtvDistance = (ball1.radius + ball2.radius) - distance;
    const normalX = dx / distance;
    const normalY = dy / distance;

    // Apply the mtv only if the balls are overlapping
    if (mtvDistance > 0) {
        ball1.pos.x -= mtvDistance * normalX * (ball2.mass / (ball1.mass + ball2.mass));
        ball1.pos.y -= mtvDistance * normalY * (ball2.mass / (ball1.mass + ball2.mass));
        ball2.pos.x += mtvDistance * normalX * (ball1.mass / (ball1.mass + ball2.mass));
        ball2.pos.y += mtvDistance * normalY * (ball1.mass / (ball1.mass + ball2.mass));
    }

    // Relative velocity in normalized direction
    const relativeVelocity = {
        x: ball2.vel.x - ball1.vel.x,
        y: ball2.vel.y - ball1.vel.y
    };
    const relativeSpeed = relativeVelocity.x * normalX + relativeVelocity.y * normalY;

    // Don't resolve if velocities are separating
    if (relativeSpeed > 0) return;

    // Calculate impulse scalar
    // const e = 0.9; // Coefficient of restitution (0 = perfectly inelastic, 1 = perfectly elastic)
    const e = 1; // Coefficient of restitution (0 = perfectly inelastic, 1 = perfectly elastic)
    const impulse = -(1 + e) * relativeSpeed / (1 / ball1.mass + 1 / ball2.mass);
    // const impulse = (2 * relativeSpeed) / (ball1.mass + ball2.mass);


    // Apply impulse to the velocity of each ball
    ball1.vel.x -= (impulse / ball1.mass * normalX);
    ball1.vel.y -= (impulse / ball1.mass * normalY);
    ball2.vel.x += (impulse / ball2.mass * normalX);
    ball2.vel.y += (impulse / ball2.mass * normalY);

}

function calculateMagnitude(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function drawBall(ball) {
    // draw on both sides if the ball is on the edge of the screen
    if ((ball.pos.x - ball.radius < 0)) {
        drawSingleBall(ball, ball.pos.x + canvas.width, ball.pos.y);
    }

    if ((ball.pos.x + ball.radius > canvas.width)) {
        drawSingleBall(ball, ball.pos.x - canvas.width, ball.pos.y);
    }

    if ((ball.pos.y - ball.radius < 0)) {
        drawSingleBall(ball, ball.pos.x, ball.pos.y + canvas.height);
    }

    if ((ball.pos.y + ball.radius > canvas.height)) {
        drawSingleBall(ball, ball.pos.x, ball.pos.y - canvas.height);
    }

    drawSingleBall(ball, ball.pos.x, ball.pos.y);
}

function drawSingleBall(ball, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${ball.alpha})`;
    ctx.strokeStyle = `rgba(0, 0, 0, ${ball.alpha})`;
    ctx.lineWidth = 5;
    ctx.setLineDash([]);
    ctx.closePath();

    ctx.stroke();
    ctx.fill();

}

function drawHole(hole) {
    ctx.beginPath();
    ctx.arc(hole.pos.x, hole.pos.y, hole.radius, 0, Math.PI * 2);
    ctx.fillStyle = hole.color;
    ctx.fill();
    ctx.closePath();
}

function drawLevel(level) {
    global.canvasContainer.style.backgroundColor = level.backgroundColor;
    global.holeNumber.style.color = level.cssBackgroundColor;
    global.holeNumber.innerText = `${currentLevelIndex + 1}`;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < level.holes.length; i++) {
        const hole = level.holes[i];
        drawHole(hole);
    }

    for (let i = 0; i < level.walls.length; i++) {
        const wall = level.walls[i];
        wall.draw(ctx);
    }

    for (let i = 0; i < level.bumps.length; i++) {
        const bump = level.bumps[i];
        bump.draw(ctx);
    }

    if ((global.inputMode & INPUT_MODES.placeAny) && wallPoint.vertices.length > 0) {
        preWall.setVertices(wallPoint.vertices[0].x, wallPoint.vertices[0].y, joystick.currentPos.x, joystick.currentPos.y);

        preWall.wall = global.inputMode === INPUT_MODES.wall;
        preWall.draw(ctx);
    }

    for (let i = 0; i < level.balls.length; i++) {
        const ball = level.balls[i];
        drawBall(ball);
    }
}

function drawCircleStencil() {
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, currentCircleRadius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (currentLevel.solved) {
        drawLevel(nextLevel);
        ctx.save();
        drawCircleStencil();
    }

    drawLevel(currentLevel);

    if (currentLevel.solved) {
        ctx.restore();
    }

    for (let i = 0; i < arrows.length; i++) {
        const arrow = arrows[i];
        const ball = currentLevel.balls[i];
        if (ball.hole) continue;
        drawArrow(arrow);
    }


    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    global.ui.innerText = "";

    if (global.inputMode & INPUT_MODES.moving) {
        let wall;
        if (global.inputMode & INPUT_MODES.moveHandle) {
            // ctx.fillText("handle", 10, 30);
            wall = global.selectedWall;
        } else if (global.inputMode & INPUT_MODES.placeAny) {
            // ctx.fillText("place", 10, 30);
            wall = wallPoint;
        }

        // get angle between two vertices in wall (in degrees)
        if (wall && wall.vertices.length > 0) {

            if (wall.vertices.length === 1) {
                const dx = joystick.currentPos.x - wall.vertices[0].x;
                const dy = joystick.currentPos.y - wall.vertices[0].y;
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                global.ui.innerText = `${angle.toFixed(0)}`;
                if (angle === -0) global.ui.innerText = "0";
            } else {
                const dx = wall.vertices[1].x - wall.vertices[0].x;
                const dy = wall.vertices[1].y - wall.vertices[0].y;
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                global.ui.innerText = `${angle.toFixed(0)}`;
                if (angle === -0) global.ui.innerText = "0";
            }

            global.ui.style.color = getTextColorForBackground(...hexToRgb(currentLevel.cssButtonColor));
            global.ui.style.backgroundColor = currentLevel.cssButtonColor;
        } else {
            global.ui.style.backgroundColor = null;
        }
    }
}

function drawArrow(arrow) {
    drawSingleArrow(ctx, arrow.startPos.x, arrow.startPos.y, arrow.endPos.x, arrow.endPos.y);

    const xMagnitude = Math.abs(arrow.startPos.x - arrow.endPos.x);
    const yMagnitude = Math.abs(arrow.startPos.y - arrow.endPos.y);

    let mirrorXStart = arrow.startPos.x;
    let mirrorXEnd = arrow.endPos.x;
    let mirrorYStart = arrow.startPos.y;
    let mirrorYEnd = arrow.endPos.y;

    if (arrow.endPos.x < 0) {
        mirrorXStart = arrow.startPos.x + canvas.width;
        mirrorXEnd = mirrorXStart - xMagnitude;
    }

    if (arrow.endPos.x > canvas.width) {
        mirrorXStart = arrow.startPos.x - canvas.width;
        mirrorXEnd = mirrorXStart + xMagnitude;
    }

    if (arrow.endPos.y < 0) {
        mirrorYStart = arrow.startPos.y + canvas.height;
        mirrorYEnd = mirrorYStart - yMagnitude;
    }

    if (arrow.endPos.y > canvas.height) {
        mirrorYStart = arrow.startPos.y - canvas.height;
        mirrorYEnd = mirrorYStart + yMagnitude;
    }

    drawSingleArrow(ctx, mirrorXStart, mirrorYStart, mirrorXEnd, mirrorYEnd);

}

function drawSingleArrow(ctx, fromx, fromy, tox, toy) {
    const magnitude = calculateMagnitude(fromx, fromy, tox, toy);
    var headlen = Math.min(magnitude, 20);  // length of head in pixels
    var angle = Math.atan2(toy - fromy, tox - fromx);
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 5;

    // Arrow shaft
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox - headlen / 2 * Math.cos(angle), toy - headlen / 2 * Math.sin(angle));

    ctx.stroke();
    ctx.strokeStyle = "#fff";
    ctx.fillStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Arrowhead
    ctx.beginPath();
    ctx.moveTo(tox, toy);
    ctx.lineTo(
        tox - headlen * Math.cos(angle - Math.PI / 6),
        toy - headlen * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
        tox - headlen * Math.cos(angle + Math.PI / 6),
        toy - headlen * Math.sin(angle + Math.PI / 6)
    );
    ctx.closePath();  // this will draw the last line of the triangle back to the starting point
    ctx.fill();
    // ctx.stroke();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000";
    ctx.stroke();
    ctx.fillStyle = "#fff";
    ctx.fill();

    // Arrow shaft
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox - headlen / 2 * Math.cos(angle), toy - headlen / 2 * Math.sin(angle));

    // ctx.stroke();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();


    // draw small black cirlce at from
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(fromx, fromy, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

}

function update(timestep) {
    for (let i = 0; i < currentLevel.balls.length; i++) {
        const ball = currentLevel.balls[i];
        const arrow = arrows[i];

        ball.update(timestep);

        // if (!ball.falling && !currentLevel.solved) ball.alpha = 1.0;

        for (let j = 0; j < currentLevel.balls.length; j++) {
            if (i === j) continue;
            const otherBall = currentLevel.balls[j];
            if (ball.hole || otherBall.hole || ball.alpha < .5) continue;
            if (circlesIntersect(ball, otherBall)) {
                resolveBallCollision(ball, otherBall);
            }
        }

        if (arrow) {
            arrow.startPos.x = ball.pos.x;
            arrow.startPos.y = ball.pos.y;
        }

        if (global.inputMode === INPUT_MODES.watching) {
            checkEdgeCollisions(ball);
            checkHoleCollisions(ball);
            checkWallCollision(ball);
            checkBumpCollision(ball);
        }
    }


    if (currentLevel.solved) {
        // currentLevel.transitioningAway = true; // TODO: maybe we don't need transitioningAway?

        currentCircleRadius -= CIRCLE_SHRINK_RATE;

        if (currentCircleRadius <= 0) {
            goToLevel(currentLevelIndex + 2); // +2 because it's 0-indexed
        }
    }

    if (currentLevel.hit) {
        for (let i = 0; i < currentLevel.balls.length; i++) {
            const ball = currentLevel.balls[i];
            if (ball.hole) continue;
            if (global.stillAt === null) global.stillAt = Date.now();
            if (calculateMagnitude(ball.vel.x, ball.vel.y, 0, 0) < BALL_STOPPED_THRESHOLD) {
                if (global.stillAt === null) global.stillAt = Date.now();
            } else {
                global.stillAt = null;
            }

            if (global.stillAt !== null && Date.now() - global.stillAt > 1000) {
                currentLevel.reset();
                globalReset();
            }
        }
    }

    for (let i = 0; i < currentLevel.walls.length; i++) {
        const wall = currentLevel.walls[i];
        if (wall.broken) {
            wall.update();
        }
    }

}

function checkWallCollision(ball) {
    for (let i = 0; i < currentLevel.walls.length; i++) {
        const wall = currentLevel.walls[i];
        if (wall.broken) continue;

        const collision = calculateSeparation(ball, wall);
        if (collision) {
            const speed = Math.hypot(ball.vel.x, ball.vel.y) * .5;
            wall.collided(speed);
            // bounce ball based on angle of collision.
            ball.pos.x += collision.mtv.x;
            ball.pos.y += collision.mtv.y;

            // Reflect velocity off wall
            const normal = collision.axis;
            const dot = ball.vel.x * normal.x + ball.vel.y * normal.y;

            ball.vel.x -= 2 * dot * normal.x;
            ball.vel.y -= 2 * dot * normal.y;
        }
    }
}


function checkBumpCollision(ball) {
    ball.timeFactor = 1.0;
    for (let i = 0; i < currentLevel.bumps.length; i++) {
        const bump = currentLevel.bumps[i];

        const collision = calculateSeparation(ball, bump);
        if (collision) {
            ball.friction = 0.09;
        } else {
            ball.friction = 0.0;
        }
    }
}

function goToLevel(levelNum) {
    currentLevelIndex = (levelNum - 1) % levels.length;
    const nextLevelIndex = (currentLevelIndex + 1) % levels.length;
    currentLevel = levels[currentLevelIndex];
    nextLevel = levels[nextLevelIndex]
    currentCircleRadius = MAX_CIRCLE_RADIUS;
    currentLevel.reset();
    globalReset();
    location.hash = `#/${currentLevelIndex + 1}`;

}

function globalReset() {
    document.getElementById("js-hit-ball").classList.add("active");
    document.getElementById("js-place-wall").classList.remove("active");
    document.getElementById("js-place-bump").classList.remove("active");
    document.getElementById("js-reset").classList.remove("active");

    document.getElementById("js-hit-ball").classList.remove("disabled");
    document.getElementById("js-place-wall").classList.remove("disabled");
    document.getElementById("js-place-bump").classList.remove("disabled");
    const jsReset =document.getElementById("js-reset")
    jsReset.classList.add("disabled");

    Array.from(document.getElementsByClassName("button")).forEach(button => {
            button.style.backgroundColor = currentLevel.cssButtonColor;
            button.style.boxShadow = `0 5px ${currentLevel.cssButtonShadowColor}`;
            button.style.color = getTextColorForBackground(...hexToRgb(currentLevel.cssButtonColor));

    });

    jsReset.style.backgroundColor = null;
    jsReset.style.boxShadow = null;
    jsReset.style.color = null;

    global.stillAt = null;
    global.selectedWall = null;
    global.selectedVertex = null;
    global.inputMode = INPUT_MODES.hit;
    canvas.style.cursor = "crosshair";
}

function checkHoleCollisions(ball) {
    ball.falling = false;
    for (let i = 0; i < currentLevel.holes.length; i++) {
        const hole = currentLevel.holes[i];
        const dx = hole.pos.x - ball.pos.x;
        const dy = hole.pos.y - ball.pos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const velocityMagnitude = Math.sqrt(ball.vel.x * ball.vel.x + ball.vel.y * ball.vel.y);

        if (distance <= (hole.radius - ball.radius) && velocityMagnitude < BALL_MADE_THRESHOLD) {
            ball.hole = hole;
            ball.falling = true;
        } else if (circlesIntersect(ball, hole)) {
            const gravity = normalizedAmountOfCircleOverlap(ball, hole) * .2;
            const forceX = gravity * dx / distance;
            const forceY = gravity * dy / distance;
            ball.vel.x += forceX;
            ball.vel.y += forceY;
            ball.alpha -= .01;
            ball.alpha = Math.max(ball.alpha, 0.0);
            ball.falling = true;
        }
    }
    if (!ball.falling) ball.alpha = 1.0;
}

const FIXED_TIMESTEP = 1000 / 60;  // 60 updates per second
let accumulatedTime = 0;
let lastTime = 0;

function loop(timestamp) {
    const deltaTime = timestamp - lastTime;

    lastTime = timestamp;
    accumulatedTime += deltaTime;

    while (accumulatedTime >= FIXED_TIMESTEP) {
        update(FIXED_TIMESTEP);
        accumulatedTime -= FIXED_TIMESTEP;
    }

    draw();
    requestAnimationFrame(loop);
}

function getLevelFromHash() {
    const hash = window.location.hash.substring(2)
    if (hash.length === 0) return 1;
    return parseInt(hash, 10);
}


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return  result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}


function calculateBrightness(r, g, b) {
    return 0.299 * r + 0.587 * g + 0.114 * b;
}

function getTextColorForBackground(r, g, b) {
    const brightness = calculateBrightness(r, g, b);
    return brightness > 128 ? 'black' : 'white';
}

loop(0);
document.addEventListener('DOMContentLoaded', () => {
    goToLevel(getLevelFromHash());
    document.getElementById("js-hit-ball").click();
});

window.addEventListener("hashchange", () => {
    goToLevel(getLevelFromHash());
});

window.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();

    let pointer = "crosshair";

    for (let i = 0; i < currentLevel.walls.length; i++) {
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        const wall = currentLevel.walls[i];

        x /= getCanvasScalingFactor();
        y /= getCanvasScalingFactor();

        if (wall.pointInCloseButton(x, y)) {
            pointer = "pointer";
        } else if (wall.pointInHandle(x, y)) {
            pointer = "grab";
        } else if (wall.isPointInside(x, y)) {
            pointer = "grab";
        }
    }

    for (let i = 0; i < currentLevel.bumps.length; i++) {
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        const wall = currentLevel.bumps[i];

        x /= getCanvasScalingFactor();
        y /= getCanvasScalingFactor();

        if (wall.pointInCloseButton(x, y)) {
            pointer = "pointer";
        } else if (wall.pointInHandle(x, y)) {
            pointer = "grab";
        } else if (wall.isPointInside(x, y)) {
            pointer = "grab";
        }
    }

    if (global.inputMode === INPUT_MODES.watching) {
        pointer = "not-allowed";
    }

    canvas.style.cursor = pointer;
});