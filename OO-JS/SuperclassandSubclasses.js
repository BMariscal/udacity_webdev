var Car = function(){
    var obj = {loc: loc};
    obj.move = function(){
       obj.loc++;
    };
     return obj;
};

var Van = function (loc){
    var obj = Car(loc);
    obj.grab = function{ /*...*/};
    return obj;
};

var Cop = function(loc){
   var obj = Car(loc);
   obj.call = function(){/*...*/};
   return obj;
};

var amy = Van(1);
amy.move();
var ben = Van(9);
ben.move();
var cal = Cop(2);
cal.move();
cal.call();


