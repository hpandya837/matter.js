const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box;
var ball;
var ball1;
var ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var box_option={
    restitution: 0.8
    }
    var ball_options={
        restitution: 0.8
    }
    var ball1_options={
        restitution: 0.8
    }

    var ball2_options={
        restitution: 0.8
    }


    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    box = Bodies.rectangle(100,200,30,300,box_option)
    World.add(world,box);
    console.log(ground);
    ball=Bodies.circle(200,200,20,ball_options);
    World.add(world,ball)
    ball1=Bodies.circle(100,100,40,ball1_options);
    World.add(world,ball1)

    ball2=Bodies.circle(300,300,10,ball2_options);
    World.add(world,ball2)
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(box.position.x,box.position.y,200,40); 
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    ellipse(ball1.position.x,ball1.position.y,30,30)
    ellipse(ball2.position.x,ball2.position.y,40,40)
}