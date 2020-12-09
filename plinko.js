class Plinko{
    constructor(x,y){
        var options ={
            isStatic:true
          
        }
        this.body = Matter.Bodies.circle(x,y,10, options);
        
        World.add(world,this.body);
        //this.image=loadImage("paper.png")
    }
    display(){
        var pos=this.body.position;
        
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        fill("yellow")
        ellipseMode(RADIUS);
        ellipse(0,0,10,10);
        pop();
        //imageMode(CENTER);
        //image(this.image, pos.x, pos.y, this.width, this.height);
    }
}