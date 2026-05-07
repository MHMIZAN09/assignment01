// ! Question 1
function filterEvenNumbers(numbers: number[]): number[] {
	return numbers.filter((num) => num % 2 === 0);
}

// ! Question 2

function reverseString(str: string): string {
	return str.split("").reverse().join("");
}

// ! Question 3

type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
	if (typeof input === "string") {
		return "String";
	}
	return "Number";
}

// ! Question 4

function getProperty<T extends object, K extends keyof T>(
	obj: T,
	key: K,
): T[K] {
	return obj[key];
}

// ! Question 5
interface Book {
	title: string;
	author: string;
	publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
	return {
		...book,
		isRead: true,
	};
}

// ! Question 6
class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

class Student extends Person {
	grade: string;
	constructor(name: string, age: number, grade: string) {
		super(name, age);
		this.grade = grade;
	}

	getDetails() {
		return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
	}
}

// ! Question 7
function getIntersection(arr1: number[], arr2: number[]): number[] {
	return arr1.filter((num) => arr2.includes(num));
}
