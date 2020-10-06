class dustbin{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.image=loadImage("dustbingreen.png");

        this.bottomBody=Bodies.rectangle(this.x,this.y,200,20,{isStatic:true});
        this.leftBody=Bodies.rectangle(this.x-100,this.y-107.5,20,213,{isStatic:true});
        this.rightBody=Bodies.rectangle(this.x+100,this.y-107.5,20,213,{isStatic:true});

        World.add(world,this.bottomBody); 
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);    
    }
    display(){
        push();
        translate(this.leftBody.position.x,this.leftBody.position.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(this.angle);
        pop();

        push();
        translate(this.rightBody.position.x,this.rightBody.position.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(-1*this.angle);
        pop();

        push();
        translate(this.bottomBody.position.x,this.bottomBody.position.y+10);
        imageMode(CENTER);
        angleMode(RADIANS);
        image(this.image,0,-107.5,200,213);
        pop();
    }
}