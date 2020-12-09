class Sling{
 constructor(bodyA,bodyB){
     var option={
         bodyA:bodyA,
         bodyB:bodyB,length:10,stiffness:0.4
     }
     this.chain=Matter.Constraint.create(option)
     World.add(world,this.chain)
 }
 display(){
     var ta=this.chain.bodyA.position
     var tb=this.chain.bodyB.position
     push()
     strokeWeight(3)
     stroke("green")
     line(ta.x,ta.y,tb.x,tb.y)
     pop()
 }

}
