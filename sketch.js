var angle = 0;
var player;
var obstacles = [];

function setup() {
    createCanvas(800, 480);
    colorMode(HSB);
    player = new Player();
}

function draw() {
    background(0);

    // Move to center and rotate
    translate(width / 2, height / 2);
    rotate(angle);

    // Render
    renderBackground(frameCount % 360);

    for (var i = obstacles.length - 1; i >= 0; i--) {
        obstacles[i].update();
        obstacles[i].show(frameCount % 360);

        if(obstacles[i].distance <= 0) {
            obstacles.splice(i, 1);
        }
    }
    
    renderCenter(frameCount % 360);

    // Player
    player.update();
    player.show(frameCount % 360);

    // Handle angle
    angle = frameCount * 0.01;

    if(frameCount % 120 == 0) {
        obstacles.push(new Obstacle());
    }
}


function renderBackground(hue) {
    push();
    noStroke();
    for (var i = 0; i < 6; i++) {
        fill(hue, 255, i % 2 == 0 ? 70 : 50);
        triangle(0, 0, width, height, width, -height);
        rotate(PI / (6/2));
    }
    pop();
}

function renderCenter(hue) {
    push();
    fill(hue, 255, 40);
    stroke(hue, 255, 80);
    strokeWeight(3);
    rotate(PI/6);

    beginShape();
    for (var a = 0; a < TWO_PI; a += TWO_PI / 6) {
        vertex(cos(a) * 40, sin(a) * 40);
    }
    endShape(CLOSE);
    pop();
}