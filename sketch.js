var bullet, speed, weight;
var wall, thickness;
var wallImg;

function setup() {
  createCanvas(1600, 400);

  bullet = createSprite(50, 200, 10, 10);
  bullet.scale = 0.3;
  bullet.width = 50;
  //console.log(bullet.width)
  speed = random(223, 321);
  weight = random(30, 50);
  thickness = random(22.83);

  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = color(80, 80, 80);

  bullet.velocityX = speed;
}

function draw() {
  background(0);
  textSize(20);
  textAlign(CENTER);
  fill(0);

  if (hasCollided()) {
    bullet.velocityX = 0;
    var damage = ((0.5 * weight * speed * speed) / (thickness * thickness * thickness * 100));
    console.log(damage);

    if (damage > 10) {
      wall.shapeColor = color(255, 0, 0);
      fill(color(255, 0, 0));
      text("Wall is not effective", 1200, 50);
    }
    else {
      wall.shapeColor = color(0, 255, 0);
      fill(color(0, 255, 0));
      text("Wall is effective", 1200, 50);

    }
  }
  drawSprites();
}
function hasCollided() {

  bulletRightEdge = bullet.x + bullet.width / 2;
  wallLeftEdge = wall.x - wall.width / 2;
  if (bulletRightEdge > wallLeftEdge)
    return true;
  return false;
}