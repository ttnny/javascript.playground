var firstNameSymbol = Symbol();
var lastNameSymbol = Symbol();

export class Person {
	constructor(firstName, lastName) {
		this[firstNameSymbol] = firstName;
		this[lastNameSymbol] = lastNameSymbol;
	}

	greet(name) {
		return "Hello, " + name + ". My name is " + this.firstName;
	}

	get firstName() {
		return this[firstNameSymbol];
	}

	get lastName() {
		return this[lastNameSymbol];
	}

	static renamePerson(person, lastName) {
		person[lastNameSymbol] = lastName;
	}
}