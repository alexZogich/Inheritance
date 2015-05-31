var Man = function (name,age) {
	this.name = name;
	this.age = age;
}

Man.prototype.live = function (){
  console.log( this.name + "has been living for " + this.age);
 }

var Student = function (name, age) {
  Man.apply(this, arguments);
}

Student.prototype = new Man();

Student.prototype.study = function () {
    console.log(this.name + "is studying");
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


var st = new Student("Sasha",22);
var mn = new Man("Paul",37);

console.log(duckTypes2.call(st));
console.log(duckTypes(st));
console.log(duckTypes2.call(mn));
console.log(duckTypes(mn));
