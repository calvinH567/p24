
 class Rubber {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':50,
          'density':1
      }
      this.body = Bodies.circle(x,y,width, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("green");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  
  