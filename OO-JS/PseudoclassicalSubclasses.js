var Car = function(loc){
    this.loc = loc;
};

Car.prototype.move = function(){
    this.loc++;
};

var Van = function (loc){
    Car.call(this, loc);
};

Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van; //set Van constructor to Van. It was changed to Car in the code above

Van.prototype.grab = function(){/*...*/};



var zed = new Car(3);
zed.move();

var amy = new Van(9);
amy.move();
amy.grab();