class Bob {

    constructor(x,y) {

        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0.1,
            density: 0.7

        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        World.add(world,this.body);

    }
    display() {
        push ();
        translate(this.body.position.x,this.body.position.y);

        ellipseMode(RADIUS)
        ellipse(0,0, this.radius, this.radius);
        //console.log(this.body.position);
        pop();
    }
}