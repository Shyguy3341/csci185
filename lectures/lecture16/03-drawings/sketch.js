function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    // fill("teal")
    // circle(550, 100, 100);

    // https://p5js.org/reference/#/p5/rect
   

    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);
   
    fill('red')
    rect(300, 300, 55, 250);
    rect(350,200,250,400)
    rect(350,600,75,100)
    rect(525,600,75,100)
    
    

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    fill('red');
    // ellipse(100, 200, 60, 100);
    strokeWeight(0);
    circle(475,200,250)
    fill('white')
    rect(450,200,150,75)

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}