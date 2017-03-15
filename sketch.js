function setup() {
    createCanvas(800, 480);
    colorMode(HSB);
}

function draw() {
    background(0);

    translate(width / 2, height / 2);
    renderBackground(frameCount % 360);

}


function renderBackground(hue) {
    noStroke();
    for (var i = 0; i < 6; i++) {
        fill(hue, 255, i % 2 == 0 ? 70 : 50);
        triangle(0, 0, width, height, width, -height);
        rotate(PI / (6/2));
    }
}