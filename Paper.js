class Paper{
    constructor(x,y,r){
        var options ={
        isStatic : false,
        density : 1.2,
        restitution : 0.03,
        friction : 0.01
        }
this.image = loadImage("paper.png");
this.body = Bodies.circle(x,y,(r-20)/2,options);
this.r = r
console.log(this.body);
World.add(world,this.body);
}
display(){
    var pos = this.body.position

    push ();
    translate(pos.x,pos.y);
    imageMode (CENTER);
    //ellipseMode(RADIUS);
    //strokeWeight(3);
    fill(255,0,255);
    image(this.image,0,0,this.r,this.r);
    //ellipse(0,0,this.r,this.r);
    pop ();
}

}