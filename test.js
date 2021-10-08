function Person(name = "John", age = 15){
	let me = {};	// {} is an object in JavaScript
	let count = 0;

	me.name = function(_){
		if (_ === undefined){
			// getter
			return _;
		}
		// setter
		name = _;
		return me;
	};
	
	me.age = age;
	// me.count = count;

	// this function does not have any parameters
	function sayName() {
		// it has access to all variables outside: name, age, count, me
		console.log(`${name} is ${age} years old. \n\tHas been greeted ${count} times`);
		count += 1;
		// return 1;
	}

	sayName();

	me.sayName = sayName;	// assign the function to this parameter

	me.getCount = () => count;	// return the local variable count

	// me.count = count;

	me.setCount = _count => {count = _count};

	me.gsCount = function (value) {
		// setter
		if (value === undefined){
			return count;
		}
		count = value;
		return me;
	}

	return me;
}


const john = Person("John", 15);
const alexis = Person("Alexis", 23);

// const [name, age] = john;

console.log(`My name is ${john.name}`);

console.log("object = ", john);

console.log("sayName = ", john.sayName);

john.sayName();
john.sayName();
john.sayName();

john.setCount(0);

// console.log(`John = ${john.getCount()} Alexis = ${alexis.getCount()}`);
console.log(`John = ${john.count} Alexis = ${alexis.count}`);


john.gsCount(33);
console.log(`John = ${john.gsCount()}`);

john.gsCount(33).name("Johncito");

console.log(`${john.name} is ${john.age} years old`);

// console.log(`${name} is ${age} years old`);

// const sayName = (name, age) => {
// 	console.log(`${name} is ${age} years old`);
// };


// sayName(age, name);