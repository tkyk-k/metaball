let num = 5;
let blobs = [];
let speed = 2.0;

function setup() {
    createCanvas(800, 600);

    for (let i = 0; i < num; i++) {
        blobs.push(new Blob(random(width), random(height)));
    }
}

function draw() {
    loadPixels();

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let sum = 0;
            for (let blob of blobs) {
                let dx = x - blob.position.x;
                let dy = y - blob.position.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                sum += blob.radius / distance;
            }

            let index = (x + y * width) * 4;
            pixels[index] = 0;
            pixels[index + 1] = 0;
            pixels[index + 2] = sum * 80;
            pixels[index + 3] = 255;
        }
    }

    updatePixels();

    for (let blob of blobs) {
        blob.update(speed);
    }
}
