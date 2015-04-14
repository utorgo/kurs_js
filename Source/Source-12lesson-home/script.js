/*
var object = {
	x : 100,
	y : 20,
	string : "hello",
	g : {
		a : 50,
		b : "string"
	}
};
delete object.x;
// Object.prototype
var object2 = new Object();
var date = new Date();//Date.prototype
//var object2 = [];
//var str = new String();
//var numb = new Nuber();
object.title = "new title";
object2.text = "text text";

//object["x"] = 200;
var object2 = Object.create(object);
object2.title = "new title";
object2.discription = "text";
//object2.x = "var x";


//document.write(object.toString());
var object3 = Object.create(object2);
object.h = "new string";
for(var var_name in object3) {
	document.write(var_name + " => " + object3[var_name] + "<br>");
}
//document.write("x - " + object.x);


/*
var object = {
	x1 : 100,
	x2 : 300,
	x3 : 400
}

for (var i = 1; i < 4; i++) {
	document.write(object["x" + i]);
}
*/
//alert("y" in object2);
//alert(object2.hasOwnProperty("y"));

//alert(object.propertyIsEnumerable("y"));

/*
var object = {
	x : 100,
	y : 20,
	
	get test() {
		/// kod function
		return this.x + this.y;
	}
	,
	set test(b) {
		this.x = b;
		return this.x + this.y;
	},
	
	my_method : function (n) {
		alert(this.x*n + " - " + this.y*n);
	} 
};

var object2 = new Object();
object2.x = 2;
object2.y = 3;
object2.method = function (n) {
		alert(this.x*n + " - " + this.y*n);
	} 
object2.method(20);	
//object.test = 1000;
//document.write(object.test);
//object.my_method = get_var;

object.my_method(3);
*/
/*
function User(name,family) {
	this.name = name;
	this.family = family;
}

var Vasya = new User("Вася","Иванов");
document.write(Vasya.name + " " + Vasya.family);

var Sergey = new User("Сергей","Сидоров");
document.write(Sergey .name + " " + Sergey .family);

цвет|тип кузова
*/
///////////////HOME WORK/////////////////
function Car(p_data) {
	this.data = p_data;
	
	this.get_param = function () {
		var result = this.data.split("|");
		this.color = result[0];
		this.type = result[1];
	}
	this.show_car = function () {
		document.write("New car: color - " + this.color + " Type - " + this.type);
	}
}
var d = prompt("Введите данные о авто");
var obj = new Car(d);
obj.get_param();
obj.show_car();