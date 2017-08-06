//Decorator code
var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() { //because it has access to obj. Obj will be in the closure scope
    obj.loc++;
    };
     return obj;

};

/////
// Here we want to call move with "dot access"
var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();

//Classes

var Car = function(loc){ //this is the class: the notion of the category of things you'd like to build and all the code that supports that category
    var obj = {loc: loc}; //the constructor is the function that you use to produce a new instance of that class
    obj.move = function(){
        obj.loc++;
    };
    return obj;

};

var amy = Car(1); //instance amy calls on the constructor function: instantiating
amy.move();
var ben = Car(9);
ben.move();


//Reducing Duplicity:


//this replaces obj because this function is being called as
// a method on objects created with Car.

var Car = function(loc){
  var obj = {loc: loc};
  obj.move = move;
  return obj;
};

var move = function(){
    this.loc++;
};

var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();



//Adding Methods to Classes:

var Car = function(loc){
  var obj = {loc: loc};
  $.extend(obj, Car.methods); //jQuery: Merge the contents of two or more objects together into the first object.
  return obj;
};

Car.methods = {
  move : function(){
    this.loc++;}
  //,
  // on: function(){},
  // off : function(){}
}










