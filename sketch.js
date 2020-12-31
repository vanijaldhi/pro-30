const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box;

function preload(){
  
}

function setup() {
	createCanvas(1600, 600);
	engine = Engine.create();
    world = engine.world;

    polygon = new P(200,200,30,40);

    box1 = new Box(330,300);
    box2 = new Box(360,300);
    box3 = new Box(390,300);
    box4 = new Box(420,300);
    box5 = new Box(450,300);
    box6 = new Box(480,300);
    box7 = new Box(510,300);
    
    box8 = new Box(360,26);
    box9 = new Box(390,260);
    box10= new Box(420,260);
    box11= new Box(450,260);
    box12= new Box(480,260);

    box13= new Box(390,220);
    box14= new Box(420,220);
    box15= new Box(450,220);
   
    box16= new Box(420,180);
    table1 = new Table(480,300);
    ground1= new Ground(800,550,1600,50);

    slingShot = new Slingshot(this.polygon,{x:100,y:200});

    Engine.run(engine);
}
function draw() {
    background(230,30,10);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();

    polygon.display();
    table1.display();
    ground1.display();

    slingShot.display();

    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}


