// JavaScript

// Q 1

/*var ANIMAL = ANIMAL || {};
var Cat = new ANIMAL;
var Dog = new ANIMAL;*/

// Q 2 & 3

/*var Cat = {};// object literal

var Dog = function() {};// object constructor
var myDog = new Dog();*/

// Q 4

/*var Animal = function () {
    this.started = function () {
        return "The animal has been created";
    }
}
var myAnimal = new Animal(" ");
window.console.log(myAnimal.started());*/

// Q 5

/*var Animal = function (x) {
    this.start = x;
};
var myAnimal = new Animal("The animal has been created");
window.console.log(myAnimal.start);*/

// Q 6

/*var Animal = function (a, b, c, d, e) {
    this.type = a;
    this.breed = b;
    this.color = c;
    this.height = d;
    this.length = e;
    this.property = function () {
        return this.type + " " + this.breed + " " + this.color + " " + this.height + " " + this.length;
    };
};
var myAnimal = new Animal("American", "known", "brown", "two feet", "three feet");
window.console.log(myAnimal.property());*/

// Q 7

/*var Animal = function (a, b, c, d, e) {
    this.type = a;
    this.breed = b;
    this.color = c;
    this.height = d;
    this.length = e;
    
};
var myAnimal = new Animal();
for (var property in myAnimal) {
window.console.log(property);
}*/

// Q 8

/*var Animal = function(x) {
    this.color = x;
    };

Animal.prototype.speak = function() {
    
    if( Animal = Dog){
        return "The " + this.color + " dog is barking!";
    } else {
        return "The " + this.color + " cat is meowing!";
    };
};
var Dog;// = new Animal("brown");
var Cat = new Animal("white");
//window.console.log(Dog.speak()); 
window.console.log(Cat.speak()); */

// Q 9

/*var Animal = function (a) {
    var type = a;
    var breed;
    var color;
    var height;
    var length;
    
    var checkType = function (a) {
        if (type == "cat") {
            return "cat";
          
           
        } else {
            return "dog";
            
        };
    };

Animal.prototype.speak = function () {
     checkType();
    window.console.log("The " + checkType() + " has made a noise!");
            
   
};
};
    
var Dog = new Animal("dog");
Dog.speak();*/

// Q 10

/*var findWords = function (x){
    this.prop = x;

    this.appear = function (){
        alert((this.prop.match(/my/g)||[]).length);
    };
}

findWords.prototype = new String; // or String.prototype;

var x = new findWords("my property my property my property  ");
x.appear();*/

// The Recipe Card

 /*var FavRecipe = function (a, b) {
     this.titleOR = a;
     this.serving = b;
     this.ingredients = ["3 Avocados", "1 lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"];
     this.ingList = function () {
       window.console.log(this.titleOR);
	   window.console.log("Serves: " + this.serving);
	   window.console.log("Ingredients:");
        
        for (i = 0; i < this.ingredients.length; i++) {
                window.console.log("- " +  this.ingredients[i]);
}
 
     };
     
 };

var rList = new FavRecipe("Guacamole", "4");
rList.ingList();*/

// The Reading List

var readingList = [
  {title: 'The Hobbit',
   author: 'J.R.R. Tolkien',
   alreadyRead: true
  },
  {title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien',
  alreadyRead: false
  }];

for (var i = 0; i < readingList.length; i++) {
  var book = readingList[i];
  var bookInfo = book.title + '" by ' + book.author;
  if (book.alreadyRead === true) {
    console.log('You already read "' + bookInfo);
  } else {
    console.log('You still need to read "' + bookInfo);
  }
}
 
