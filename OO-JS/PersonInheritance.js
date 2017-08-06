function Person(name, age,sex){
  this.name = name;
  this.age = age;
  this.sex = sex;
  
};

Person.prototype.speech = function(quote){
  this.quote = quote;
  
};

function Celebrity(name, age, sex){
  Person.call(this, name, age, sex);
   
};


Celebrity.prototype = Object.create(Person.prototype);
Celebrity.prototype.constructor = Celebrity; 

Celebrity.prototype.ego = function(ego){
  this.ego = ego;
};

var malala = new Person('Malala', 19, 'female');
malala.speech("When the whole world is silent, even one voice becomes powerful.");

console.log(malala);

var kanye = new Celebrity('Kanye', 40, 'male');
kanye.speech("I'm the best rapper alive. The voice of a generation.");

kanye.ego(100);

console.log(kanye);

