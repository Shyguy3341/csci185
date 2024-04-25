const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const colors = ["#14E3DD ", "#400AAB", "#E71313 ", "#E713E3"];

function randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(1); // how many redraws per second

    fill("#08415c");

    // generate a random x-position, y-position, and size:
    let counter = 0
    while (counter < 250) {
        let color = colors[randomInt(0,3)];
        fill(color);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let z = randomInt(0,canvasHeight)
        let size = randomInt(25, 125)
         triangle(
            X,  Y -size*sqrt3/3,
            X - size /2, Y +size*sqrt3/6,
            X + size /2, Y + size*sqrt3/6);
        counter +=1;
    }
}
// Draw a random circle:




/***********************************+*
 * ANIMATION LOOP
 * Anything that you want to animate
 * goes in the draw() function
 * *********************************
 */
function draw() {
    clear();

    let counter = 0
    while (counter < 500) {
        let color = colors[randomInt(0,3)];
        fill(color);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(25, 125)
        square(x, y, size);
        counter +=1;
    }
}