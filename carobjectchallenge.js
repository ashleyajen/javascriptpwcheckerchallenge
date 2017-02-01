function createCar (make, model, color) {
  return {
    make: make,
    model: model,
    color: color,
    getData: function(){return this.make + " " + this.model + " " + this.color}
  }
}
var car = createCar("Honda", "2008", "silver")



// Story 2

function createCar(make, model, color) {
  var speed = 0
  return {
    make: make,
    model: model,
    color: color,
    getData: function(){return this.make + " " + this.model + " " + this.color},
    getspeed: function(){return speed},
    getAccelerate: function(){speed = speed+10},
    getBrake: function(){speed = speed-7}
  }
}

var car = createCar("Honda", "2008", "silver");

while (car.getspeed() < 70) {
  car.getAccelerate();
  console.log(car.getspeed());
}

while (car.getspeed() > 0){
  car.getBrake();
  console.log(car.getspeed());

}


///// story 4
function createCar(make, model, color) {
  var speed = 0
  return {
    make: make,
    model: model,
    color: color,
    getData: function(){return this.make + " " + this.model + " " + this.color},
    getspeed: function(){return speed},
    getAccelerate: function(){speed = speed+10},
    getBrake: function(){speed = speed-7}
    }
  }

  var car = createCar("Honda", "2008", "silver")

  while (car.getspeed() <= 85) {
    car.getAccelerate() }
  if (car.getspeed() > 85){
    car.getBrake()}




///////
