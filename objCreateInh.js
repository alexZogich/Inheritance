var Man = {
	constructor: function (name,age){
		this.name = name;
		this.age = age;
	},
	live: function () {
		console.log(this.name + " has been living for " + this.age + " years" );
	}
}

var Student = Object.create(Man);
Student.study = function () {
	console.log(this.name + " is studying");
}

function duckTypes (obj) {
	if("study" in obj){
		return "Student";
	} else {
		return "Man";
	}
}

function duckTypes2 () {
	var obj = this;
	if("study" in obj){
		return "Student";
	} else {
		return "Man";
	}	
}

var st = Object.create(Student);
st.constructor("Sasha",22);
var mn = Object.create(Man);
mn.constructor("Paul",37);

console.log(duckTypes2.call(st));
console.log(duckTypes(st));
console.log(duckTypes2.call(mn));
console.log(duckTypes(mn));