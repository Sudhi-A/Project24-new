class Paper{
    constructor(x,y,radius){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.radius=5
    this.body=Bodies.ellipse(x,y,5,options)
   World.add(world,this.body)
}
display(){
var pos=this.body.position
this.body.position.x=mouseX
this.body.position.y=mouseY
rectMode(CENTER)
fill(255)
ellipse(0,0,5)
}
}