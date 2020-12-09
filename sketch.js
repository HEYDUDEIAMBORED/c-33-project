const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=100
var score=0
var particle,ppos
var turn=15
var gameState="start"
var Blokscore=[35,20,0, 50,10,25,30,15,45,0,20,40 ];
var bloksize=800/12
var oldparticle=[]
function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(400,height,800,10)
   
   for (var k =0; k<=width;k=k+66){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for (var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,125))
  }
  for (var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,225))
  }
  for (var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,325))
  }
  for (var j=15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,425))
  }
}

function draw() {
  background(0);  
  Engine.update(engine)
  ground.display()
 
  for (var j=0;j<plinkos.length;j++){
    plinkos[j].display()
  }
  for (var k=0;k<divisions.length;k++){
    divisions[k].display()
  }

    
  
  //  if (frameCount % 60 === 0){
     // for (var h=15;h<=width;h=h+50){
     //   particles.push(new Particle(random(width/2-10,width/2+10),7,7))
        //particles.push(new Particle(random(width/2-10,width/2+10),7,7));
     // }
 // }
  for (var l=0;l<oldparticle.length;l++){
    oldparticle[l].display()
  }
  for (var h=0;h<particles.length;h++){
    particles[h].display()
    


  //  particle.display()
    console.log(particles[h].y)
    if (particles[h].body.position.y>600){
     ppos=particles[h].body.position.x/bloksize
      score=score+Blokscore[Math.round(ppos)]
     // console.log(ppos)   
      oldparticle.push(particles[h])
      if (h===(particles.length-1)){
        particles.length=particles.length-1
      }
      else {
        particles[h]=particles[particles.length-1]
        particles.length=particles.length-1
      }
    }

  }
  if(turn===0){
    gameState="end"
    textSize(30)
    text("GAME OVER DUDE",360,45)
  }

  drawSprites();
  textSize(15)
  text("Score:"+score,700,15)
 // text(mouseX+", "+mouseY,mouseX,mouseY)
  text("Turns: "+turn,20,15)
}
function mouseClicked(){
  if (gameState!=="end"){
    turn--;
    //particle=new Particle(mouseX,10,7,7)
    particles.push(new Particle(mouseX,10,7,7))
    
  }
}