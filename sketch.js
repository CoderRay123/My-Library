var sprite1, sprite2, sprite3, sprite4, sprite5;
function setup() {
  createCanvas(800,400);
  sprite1 = createSprite(400,200,50,80);
  sprite2 = createSprite(700,100,80,30);
  sprite3 = createSprite(200,50,60,50);
  sprite4 = createSprite(200,350,90,60);
  sprite5 = createSprite(300,200,20,50);
  sprite1.debug=true;
  sprite2.debug=true;
  sprite3.debug=true;
  sprite4.debug=true;
  sprite5.debug=true;
  sprite1.shapeColor = "yellow";
  sprite2.shapeColor = "yellow";
  sprite3.shapeColor = "yellow";
  sprite4.shapeColor = "yellow";
  sprite5.shapeColor = "yellow";
  sprite3.velocityY = 5;
  sprite4.velocityY = -5;
}

function draw() {
  background("lightBlue");  
  
  sprite5.x=World.mouseX;
  sprite5.y=World.mouseY;

 if (touching(sprite1,sprite5)){
   sprite1.shapeColor = "green";
   sprite5.shapeColor = "green";
 } else {
  sprite1.shapeColor = "yellow";
  sprite5.shapeColor = "yellow";
 }

 bounce(sprite3,sprite4);

  drawSprites();
}