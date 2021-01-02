class DustBin {
    constructor(x,y){
        this.dustbinWidth = 200;
        this.dustbinHeight = 100;
        this.wallThickness = 20;
        this.angle =0;
        this.image = loadImage("dustbingreen.png")
        this.bottomBody = Bodies.rectangle(x,y, this.dustbinWidth, this.wallThickness,{isStatic :true})
        this.leftBody = Bodies.rectangle(x-this.dustbinWidth/2, y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
        Matter.Body.setAngle(this.leftBody,this.angle);
        this.RightBody = Bodies.rectangle(x+this.dustbinWidth/2,y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic :true});
        Matter.Body.setAngle(this.RightBody,-1*this.angle);

        World.add(world,this.leftBody);
        World.add(world,this.RightBody);
        World.add(world,this.bottomBody);

    }

    display(){
        var lpos = this.leftBody.position;
        var rpos = this.RightBody.position;
        var bpos = this.bottomBody.position;

        push ();
        translate(lpos.x,lpos.y);
        angleMode(RADIANS)
		fill(255)
		stroke(255)
        rotate(this.angle)
        //rect(0,0,this.wallThickness, this.dustbinHeight);
        pop();

        
        push ();
        translate(rpos.x,rpos.y);
        angleMode(RADIANS)
		fill(255)
		stroke(255)
        rotate(this.angle)
       // rect(0,0,this.wallThickness, this.dustbinHeight);
        pop();

        
        push ();
        translate(bpos.x,bpos.y);
        angleMode(RADIANS)
		fill(255)
        stroke(255)
        rotate(this.angle)
        //rect(0,0,this.dustbinWidth, this.wallThickness);
        imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
        pop();


    }
}