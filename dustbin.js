class Dustbin{
    constructor(x,y,height,width){
        var options={
            isStatis:true
        }
        this.body=Bodies.rectangle(x,y,height,width,options)
        this.height=height
        this.width=width
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
    }
}