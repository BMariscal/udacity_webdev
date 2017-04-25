var Car = function(loc){
    var obj = Object.create(Car.prototype);
    obj.loc = loc;
    return obj;
};

Car.prototype.move = function(){
   this.loc++;

}

var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();

console.log(Car.prototype.constructor);
console.log(amy.constructor);
console.log(amy instanceof Car);

