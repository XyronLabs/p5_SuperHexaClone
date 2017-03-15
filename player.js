function Player() {
    this.angle = 0;
    this.keys = {
        left: LEFT_ARROW,
        right: RIGHT_ARROW
    }
}

Player.prototype.update = function() {

}

Player.prototype.show = function(hue) {
    push();
    rotate(this.angle);
    noStroke();
    fill(hue, 255, 90);
    triangle(54, -7, 54, 5, 64, 0);
    pop();
}