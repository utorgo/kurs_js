/*
function myFoo() {
	alert("hello");
}
myFoo();
*/

//getSumm(4,5);
/*
function getSumm(a,b) {
	document.write(a+b);
}
*/
///getSumm(10,5);
//getSumm(1,2);
//getSumm(1000,2000);

//var func = function myFoo(a,b) {alert(a - b)};

/*
function getStr() {
	var str = prompt("Введите строку");
	
	if(!str) {
		getStr();
	}
	else {
		alert(str);
		return ;
	}
	
}
getStr();
*/

/*
function getSumm(a,b) {
	var result = a + b;
	return result;
}

function getSumm(a,b) {
	return a + b;
}
//var res = getSumm(12,34);

alert(getSumm(12,34));

*/

//var func = (function (a,b) {alert(a - b)}(10,5));

/*
function myFoo(array) {
	
	if(Array.isArray(array)) {
		var lastEl;
		for(var i = 0; i < array.length; i++) {
			document.write("Ячейка - " + i + "значение" + array[i] + "<br>");
			lastEl = array[i];
		}
		
		return lastEl;
	}
	else {
		alert("wrong parameter");
	}
	
	
}

var result = myFoo(12);
//alert(result);
*/

/*
function foo() {
	var array = arguments[];
	//document.write("<h1>" + arguments[0] + "</h1>");
	
	for(var i = 0; i < array.length; i++) {
			document.write("Ячейка - " + i + "значение " + array[i] + "<br>");
		}
}

foo("hello","hello2","hello3");
*/
/*
function foo(a,b) {
	document.write( a + b);
}
foo(12,5,23,45);
*/

/*
var a = 10;

function myfoo() {
	var a;
	alert(a);
}

myfoo();
alert(a);
*/
/*
function block() {
	/////kod 
	var x1,x2;
}
block();
*/
/*
(function() {
	//
	var x1,x2;
	alert("hello");
}())

*/
/*
function myfoo(x,y) {
	alert(x+y);
	
	function myfoo2() {
		return x-y ;
	}
	
	return myfoo2();
} 

myfoo(myfoo(10,4),1);
*/

//1
//5! = 1*2*3*4*5;
//foo(5);

//2
//foo(12,324,45,1000....)


/*
/////////HOME WORK////////////
*/

// 1.
//5! = 1*2*3*4*5
//5! = 5*4*3*2*1
function getFactorial(x) {
	
	if( x <= 1) {
		return 1;
	}
	
	var result = x * getFactorial(x - 1);
	
	return result;
}
alert(getFactorial(0));

//2.
function myfoo2() {
	var res_max = 0;
	for(var i = 0; i < arguments.length;i++) {
		if(arguments[i] > res_max) {
			res_max = arguments[i];
		}
	}
	
	return res_max;
}

var result = myfoo2(1,2,3,4,10,34,1000,100,23,45,67);
alert(result);
