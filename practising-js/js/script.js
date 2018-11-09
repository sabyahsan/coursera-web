

(function (name) {
	console.log("Hellow " + name);
})("world");


/********Declaring arrays and looping over them ************/

// var names = ["Alpha", "Bravo", "Charlie"];

// var myObj = {
// 	name: "John",
// 	course: "boring",
// 	platform: "wobbly"
// }

// for (var prop in myObj){
// 	console.log(prop + ": " + myObj[prop])
// }

// for (var name in names) {
// 	console.log("hello " + names[name])
// }

// var wacky = new Array(); 
// wacky[0] = "saba";
// wacky[2] = 1;
// wacky[25] = function hello(argument) {
// 	console.log("hellow world")
// };



// console.log(wacky);

/********OBJECT Literals and 'this'************/

// var literalCircle = {
// 	radius: 10,

// 	getArea: function () {
// 		var self = this; 
// 		console.log(self);

// 		var increaseRadius = function () {
// 			self.radius = 20; 
// 		}
// 		increaseRadius();
// 		return Math.PI * Math.pow(self.radius, 2);
// 	}
// };

// console.log(literalCircle.getArea()); 


/********FUNCTION CONSTRUCTORS and PROTOTYPE and 'this'************/

/*Coding convention: Use Capital letter to start function constructor names*/
// function Circle (radius) {
// 	this.radius = radius;  /*this here refers to the new created object*/
// }

// /*Using protoype instead of writing function as a member of the
// function constructor keeps it from being created over and over 
// each time a new object is created using that constructor - save memory*/
//  Place the prototype outside so the code doesn't run every time you
// create a new object - save processing 
// Circle.prototype.getArea =
// 	function () {
// 			return Math.PI * Math.pow(this.radius, 2);
// 		}

// var myCircle = new Circle (10);
// console.log(myCircle.getArea()); 
// console.log(myCircle); 



/********DIFFERENT WAYS OF DECLARING OBJECTS *****/

// var company = new Object (); 
// company.name = "Waazeh"; 
// company.ceo = new Object ();
// company.ceo.firstName = "Hussnain";
// company.ceo.favColor = "blue"
// company["stock of company"] = 110; 
// console.log(company);



// var company2 = {
// 	name: "Waazeh",
// 	ceo: {
// 		firstName: "Hussnain",
// 		favColor: "blue"
// 	},
// 	"stock of company": 110
// };
// console.log(company2);


/*******FUCNTIONS AS OBJECTS******/
// function multiply (x, y) {
// 	return x*y; 
// }

// console.log(multiply(5,3));

// multiply.version = "v1.0.0"

// console.log(multiply.version)

// function makeMultiplier (multiplier){
// 	var func = function (x) {
// 		return multiplier * x; 
// 	};
// 	return func; 
// }

// var doubler = makeMultiplier (2); 

// console.log(doubler); 
// console.log(doubler(3))