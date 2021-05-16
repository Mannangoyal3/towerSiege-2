const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world;
var holder,polygon,ground;
var stand1,stand2,stand3;
var polygon;
var slingShot;
var polygonImage;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12;
var block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23;
var block24,block25,block26,block27,block28,block29,block30,block31,block32;

function preload(){

polygonImage = loadImage("polygon.png");


}
function setup(){
var  canvas = createCanvas(2000,1200);
engine =  Engine.create();
world = engine.world;
Engine.run(engine);




ground = new Ground(1000,1180,1999,40);

stand1 = new Ground(1180,950,380,30);
stand2 = new Ground(1650,600,450,30);
stand3 = new Ground(690,850,440,30);

block1 = new Block(550,800,80,125);
block2 = new Block(610,820,80,125);
block3 = new Block(690,820,80,125);
block4 = new Block(760,820,80,125);
block5 = new Block(830,820,80,125);

block6 = new Block(580,705,80,125);
block7 = new Block(650,705,80,125);
block8 = new Block(720,705,80,125);
block9 = new Block(800,705,80,125);

block10 = new Block(650,550,80,125);
block11 = new Block(730,550,80,125);
block12 = new Block(690,430,80,125);

//second stand
block13 = new Block(1070,900,120,155);
block14 = new Block(1185,900,120,155);
block15 = new Block(1285,900,120,155);
block16 = new Block(1180,760,120,155);

//third stand
block17 = new Block(1500,550,50,90);
block18 = new Block(1550,550,50,90);
block19 = new Block(1600,550,50,90);
block20 = new Block(1650,550,50,90);
block21 = new Block(1700,550,50,90);
block22 = new Block(1750,550,50,90);
block23 = new Block(1800,550,50,90);

block24 = new Block(1550,450,50,90);
block25 = new Block(1600,450,50,90);
block26 = new Block(1650,450,50,90);
block27 = new Block(1700,450,50,90);
block28 = new Block(1750,450,50,90);

block29 = new Block(1600,370,50,90);
block30 = new Block(1650,370,50,90);
block31 = new Block(1700,370,50,90);

block32 = new Block(1650,270,50,90);

polygon = Bodies.circle(500,500,100);
World.add(world,polygon);

slingShot = new Slingshot(this.polygon,{x:350,y:700});

}

function draw() {
background(56,44,44); 


strokeWeight(4);
stroke(15);
fill("skyblue");
ground.display();
stand1.display();
stand2.display();
stand3.display();

push();
fill("purple");

strokeWeight(4);
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
pop();


push();
fill("green");
strokeWeight(4);
block6.display();
block7.display();
block8.display();
block9.display();
pop();




push();
fill("red");
strokeWeight(4);
block10.display();
block11.display();
pop();
push();
fill("navy");
strokeWeight(4);
block12.display();
pop();

push();
fill("pink");
strokeWeight(4);
block13.display();
block14.display();
block15.display();
pop();

push();
fill("white");
strokeWeight(4);
block16.display();
pop();


push();
fill("magenta");
strokeWeight(4);
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
pop();


push();
fill("lime")
strokeWeight(4);
block24.display();
block25.display();
block26.display();
block27.display();
block28.display();
pop();

push();
fill("orange");
strokeWeight(4);
block29.display();
block30.display();
block31.display();
pop();

push();
fill("cyan");
strokeWeight(4);
block32.display();
pop();

imageMode(CENTER)
  image(polygonImage,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}