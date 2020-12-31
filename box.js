class Box{
    constructor(x,y){
    this.box = Bodies.rectangle(x,y,20,30);
    World.add(world,this.box);
    this.Visiblity = 255;
    }
    display(){
    if(this.box.speed < 3){
    super.display();
    }
    else{
        World.remove(world, this.box);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        rect( this.box.position.x, this.box.position.y, 50, 50);
        pop();
    }
}
}