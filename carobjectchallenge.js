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





/////// Object Oriented Password Checker
/// Username has to have a length longer than 6 and has to include a $ or #.
/// Password has to have a length longer than 6 and has to include a $ or #.
var userID = "ashley11!"
var password = "ashley11!"

function isUserIdValid(str) { return str.length > 6 && !str.includes("#") || !str.includes("$"); }


function isPasswordValid(str) { return str.length > 6 && (str.includes("#") || str.includes("$")) };

function areCredentialsValid(id, pass) { return isUserIdValid(id) && isPasswordValid(pass); }


function getUserCredentials() {
  var id = prompt("Enter user ID");
  var pass = prompt("Enter password");
  alert("Your credentials are valid: " + areCredentialsValid(id, pass));
}
