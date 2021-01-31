var bullet;
var weight,velocity,thickness;
var wall;


function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(400, 200, 50, 10);
  bullet.shapeColor="white";
  

  weight=random(30,52);
  speed=random(223,321);
  thickness=random(22,83);

  bullet.velocityX=speed;

  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor=(80,80,80);

  
}

function draw() {
  background("black");  

  if(wall.x-bullet.x<bullet.width/2 + wall.width/2){
    bullet.velocityX=0;

    var damage=(0.5*weight*speed*speed)/(thickness*thickness);
    if(damage<10){
      wall.shapeColor="green";
    }

    else if(damage>10){
      wall.shapeColor="red";
    }
  }

  else if(bullet.shapeColor="white");
  drawSprites();
}