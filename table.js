class Table{
    constructor(x,y){
    var options={
        isStatic:true
    }
    this.table = Bodies.rectangle(x,y,250,30);
    World.add(world,this.table);
    }
    display(){
      push ();
      rectMode(CENTER);
      rect(x,y,250,30);
      pop()
    }
}
