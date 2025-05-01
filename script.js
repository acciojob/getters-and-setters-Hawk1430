//complete this code
class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}

	get name(){
		return this._name;
	}
	get age(){
		return this._age;
	}

	set name(newName){
		if(newName.length > 0){
			this._name = newName;
		}
		else{
			console.error("Name cannot be empty");
		}
	}
	
	set age(newAge){
		if(newAge > 0){
			this._age = newAge;
		}
		else{
			console.error("Age cannot be less than 0");
		}
	}
}

class Student extends Person {
	study() {
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name is teaching}`)
	}
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
