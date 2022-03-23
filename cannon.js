class Cannon {
    constructor (x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.cannon = loadImage ("./assets/canon.png");
        this.cannonBase = loadImage ("./assets/cannonBase.png");
    }

    display() {
        push ();
           // translate used to separate x and y coordinates
           translate(this.x,this.y);
           rotate(this.angle);
           imageMode (CENTER);
           image(this.cannon,0,0,this.width,this.height);
        pop ();
            image(this.cannonBase,70,20,200,200);

            noFill();
    }
}