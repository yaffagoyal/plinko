var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var divisions= [];
var particle;
var turn=0;
var gameState= "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}
function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);

  noStroke();
  textSize(25);
  fill("white")
  text("Score= " + score, 650,50)

  text("500", 20, 525)
  text("500", 100, 525)
  text("500", 180, 525)
  text("500", 260, 525)
  text("100",340,525)
  text("100",420,525)
  text("100",500,525)
  text("100",580,525)
  text("200",660,525)
  text("200",740,525)
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
    }

    if (particle!=null) {
      particle.display();
 
      if (particle.body.position.y>760) {
        if (particle.body.position.x < 300) {
          score = score + 500;
          particle=null;
          if (turn>=5) gameState = "end"
        }
      }
    }
 
    if (particle!=null) {
     particle.display();
 
     if (particle.body.position.y>760) {
       if (particle.body.position.x > 301 && particle.body.position.x < 600) {
         score = score + 100;
         particle=null;
         if (turn>=5) gameState = "end"
       }
     }
   }
 
   if (particle!=null) {
     particle.display();
 
     if (particle.body.position.y>760) {
       if (particle.body.position.x > 601 && particle.body.position.x < 900) {
         score = score + 200;
         particle=null;
         if (turn>=5) gameState = "end"
       }
     }
   }
 
   if (turn===5) {
     gameState= "end"
   noStroke();
   textSize(50);
   fill("white")
   text("GAME OVER", 250,450)
   }
 
    for (var k = 0; k < divisions.length; k++) {
      
      divisions[k].display();
    }
    ground.display();
 }
 
 function mousePressed() {
   if (gameState!=="end") {
     turn++;
     particle= new Particle(mouseX, 10,10,10,10);
   }
 }