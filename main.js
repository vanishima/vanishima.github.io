function Person(name = "John", age = 15){
	let me = {};	// {} is an object in JavaScript
	let count = 0;

	me.name = name;
	me.age = age;
	me.count = count;
	
	console.log(`${name} is ${age} years old. \n\tHas been greeted ${count} times`);
	me.count += 1;

	return me;
}


const john = Person("John", 15);
const alexis = Person("Alexis", 23);

// const [name, age] = john;

console.log(`My name is ${john.name}`);

console.log("object = ", john);

// console.log(`${name} is ${age} years old`);

// const sayName = (name, age) => {
// 	console.log(`${name} is ${age} years old`);
// };


// sayName(age, name);