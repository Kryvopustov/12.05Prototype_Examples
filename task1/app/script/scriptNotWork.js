Car.prototype = new Vehicle();
var vaz = new Car('vaz2108', 60, 15);
console.log(vaz.engine);

function Vehicle(name, speed) { 
  this.start = speed;
  this.name = name;
  this.engine = true;
  this.wheels = true;
  this.addSpeed = function(speed){ 
    this.start = this.start + speed; 
    return this.start;
  }
  this.showSpeed = function(){
    return this.start;
  }
}

function Car(name, speed, age) {
  this.start = speed;
  this.test = true;
  this.age = age;
  this.stop = function() {
    this.start = 0;
    return this.start;
  }
  // this.addSpeed = function(){
  //   alert('test');
  // }
}