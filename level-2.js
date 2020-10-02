// Level 1

// Question 1

var stringValue = "";

//Question 2

var person = {
	sex: "Male",
	modell: 1992,
};

//Question 3

var outOfStock = false;
if (outOfStock === true) {
	console.log("Out of stock");
} else {
	console.log("In stock");
}

//Question 4

var numbers = [4, 5, 8, 10, 17];
for (var i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}

// Question 5

var counter = 15;
for (var counter = 15; counter < 26; counter++) {
	console.log(counter);
}

// Question 6

for (var counter = 15; counter < 26; counter++) {
	if (counter === 20) {
		console.log(counter);
	}
}

// Question 7

var arrayObject = [
	{
		sex: "Male",
		modell: 1992,
		alive: true,
	},
	{
		sex: "Female",
		modell: 1995,
		alive: true,
	},
	{
		sex: "Male",
		modell: 1921,
		alive: false,
	},
];
for (var i = 0; i < arrayObject.length; i++) {
	console.log(arrayObject[i].sex);
	console.log(arrayObject[i].alive);
}

// Question 8

var whatIDontLike = (thingsIDontLike) => {
	console.log("I dont like " + thingsIDontLike);
};
whatIDontLike("The smell of bad seafood");

// Question 9

var subtractNumbers = (num1, num2) => {
	console.log(num2 - num1);
};
subtractNumbers(243, 123);

// Question 10

var emptyArray = [];
var oneArgumentFunction = (addToArray) => {
	emptyArray.push(addToArray);
};
oneArgumentFunction(true);
console.log(emptyArray);

//Level 2

// Question 1

for (var counter = 15; counter < 26; counter++) {
	if (counter % 2 === 0) {
		console.log(counter);
	}
}

//Question 2

var innerFunction = () => {
	console.log("I am a function");
};

var outerFunction = (argument) => {
	innerFunction(argument);
};
outerFunction();
