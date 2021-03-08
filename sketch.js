const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
ground=new Ground()
 box=new Box(200,250,20,20)  
  box2=new Box(220,340,50,20) 

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
ground.display()
box.display()
box2.display()
}