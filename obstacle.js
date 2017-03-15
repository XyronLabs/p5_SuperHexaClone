function Obstacle() {
    this.pieces = [];
    this.size = 15;
    this.distance = height;

    for (var i = 0; i < 6; i++) {
        if (random() > 0.7) {
            this.pieces[i] = true;
        }
    }
}

Obstacle.prototype.update = function() {
    this.distance--;
}

Obstacle.prototype.show = function(hue) {
    push();
    noStroke();
    fill(hue, 255, 80);
    for (var i = 0; i < 6; i++) {
        if (this.pieces[i]) {

            push();
                rotate(i * PI / (6/2));

                beginShape();
                    vertex( (this.distance-this.size) * cos(-PI/6), (this.distance-this.size) * sin(-PI/6));
                    vertex( (this.distance+this.size) * cos(-PI/6), (this.distance+this.size) * sin(-PI/6));
                    
                    vertex( (this.distance+this.size) * cos(PI/6), (this.distance+this.size) * sin(PI/6));
                    vertex( (this.distance-this.size) * cos(PI/6), (this.distance-this.size) * sin(PI/6));
                endShape();
            pop();
        }
    }
    pop();
}