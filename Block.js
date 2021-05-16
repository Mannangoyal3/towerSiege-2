class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :1.0,
      }
      this.visiblity = 225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image= loadImage("block.png")
      World.add(world, this.body);
      
    }
   
    display(){
      
      var position= this.body.position;
      if(this.body.speed <5){
        imageMode(CENTER);
        image(this.image,position.x,position.y,this.width, this.height);
      }
    else{
      World.remove(world, this.body);
      push();
      this.visiblity = this.visiblity - 3;
      tint(180,this.visiblity);
      image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
      pop();
    }
  }
}