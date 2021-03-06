"use strict";

let game = new PIXI.Application({
  width: 800,
  height: 800,
  antialias: true,
});

document.body.appendChild(game.view)

game.renderer.backgroundColor = 0x00e1fb;

// Create the main stage for your display objects
let stage = new PIXI.Container();

// Initialize the pixi Graphics class
let graphics = new PIXI.Graphics();

// Set the fill color
graphics.beginFill(0xe74c3c); // Red

// Draw a circle
graphics.drawCircle(60, 185, 40); // drawCircle(x, y, radius)

// Applies fill to lines and shapes since the last call to beginFill.
graphics.endFill();

// Set a new fill color
graphics.beginFill(0x3498db); // Blue

// Draw an ellipse
graphics.drawEllipse(170, 185, 45, 25); // drawEllipse(x, y, width, height)
graphics.endFill();

graphics.beginFill(0x9b59b6); // Purple

// Draw a rectangle
graphics.drawRect(240, 150, 75, 75); // drawRect(x, y, width, height)
graphics.endFill();

graphics.beginFill(0x2c3e50); // Dark blue gray 'ish

// Draw a rectangle with rounded corners
graphics.drawRoundedRect(350, 160, 75, 50, 10); // drawRoundedRect(x, y, width, height, radius)
graphics.endFill();

graphics.beginFill(0xf1c40f); // Yellow

// Draw a polygon to look like a star
graphics.drawPolygon([550, 100, // Starting x, y coordinates for the star
                      570, 150, // Star is drawn in a clockwork motion
                      630, 155,
                      585, 195,
                      600, 250,
                      550, 220,
                      500, 250,
                      515, 195,
                      470, 155,
                      530, 150
                    ]);

graphics.endFill();

// Add the graphics to the stage
stage.addChild(graphics);

// Start animating
animate();
function animate() {
    //Render the stage
    game.render(stage);
    requestAnimationFrame(animate);
}
