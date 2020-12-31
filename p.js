class P{
    constructor(){
        this.p = Bodies.rectangle(200,200,30,40);
        this.polygon = loadImage("polygon.png");
        World.add(world,this.p);
    }
    display(){
        push ();
        imageMode(CENTRE);
        image(this.polygon,200,200,30,40);
        pop ();
    }
}