var angle = 0;

function setup() {
    createCanvas(800, 480);
    colorMode(HSB);
}

function draw() {
    background(0);

    // Move to center and rotate
    translate(width / 2, height / 2);
    rotate(angle);

    // Render
    renderBackground(frameCount % 360);
    renderCenter(frameCount % 360);


    // Handle angle
    angle = frameCount * 0.01;
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