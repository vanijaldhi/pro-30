class Ground
{
	constructor(x,y)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.ground=Bodies.rectangle(x, y,1600,50,options);
 		World.add(world, this.ground);

	}
	display()
	{
			var groundPos=this.ground.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			fill(50,50,11)
			rect(x,y,1600,50);
			pop()
			
	}

}