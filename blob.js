class Blob {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D().mult(random(1, 3));
        this.radius = 100;
    }

    update(speed) {
        this.position.add(this.velocity.copy().mult(speed));

        if (this.position.x < 0 || this.position.x >= width) {
            this.velocity.x *= -1;
        }
        if (this.position.y < 0 || this.position.y >= height) {
            this.velocity.y *= -1;
        }
    }
}