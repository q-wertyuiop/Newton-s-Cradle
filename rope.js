class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetY = offsetY;
        this.offsetX = offsetX;
        var options = {
            bodyA: body1,
            bodyB : body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }


    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);

        var Anchor1 = pointA.x;
        var Anchor2 = pointA.y;

        var Anchor3 = pointB.x + this.offsetX;
        var Anchor4 = pointB.y + this.offsetY;

        line (Anchor1,Anchor2,Anchor3,Anchor4);
        }
    }
