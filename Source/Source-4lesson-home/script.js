/*
var a,b,c,y;

a = 50;
b = 200;
c = 10;
*/
/*
if(a == b)	{
	if(b == c) {
		alert("b=c"); 
	}
	else {
		/////
	}
}
else {
	alert("a не равно b"); 
}


if(a > b || b < c)	{
	alert("a > b but b < c");
}
else if(a == c){
	alert("a = c"); 
}
else if(b == c) {
	alert("b < c"); 
}
else {
	alert("NOT");
}

*/

/*
y = (a > b)	? true : false;
alert(y);		
*/	
/* 
var test = '10';

switch(test) {
	
	case "":
	case null:
		alert("null");
		///
		////
		/////
	break;
	
	default:
		alert("default");
		////
		///
		//
		///
	break;		
	
	case "string":
		alert("string");
	break;
	
	case '10':
		alert(10);
	break;
	
		
	
}	
*/
///
///
///
/*
var i = '10';
//+i;
//alert(i++);
var b = -i;
alert(typeof(b));
alert(b);	
*/
/*
var str1 = "NEW 2";
var str2 = "NEW 2";
if(str1 >= str2) {
	document.write("str1 больше str2");
}
else {
	document.write("str1 меньше str2");
}

///

//

var  n = '20';
var len = n.length;
alert(n[len-1]);
*/

/*
//////Home Work/////
*/
///  1.

var test, result;
var type;

test = null;
type = typeof(test);

if(type == "number") {
	result = "В переменной test содержится число, увеличенное значение числа - " + (++test);
}
else if(type == "string") {
	result = "Переменная test содержит в себе строку - " + test;
}
else {
	result = "В переменной test ничего не записано";
}

document.write("<p>" + result +"</p>");

// 2.
var date = 10;
var e_m, res, last_n;

e_m = 31 - date;
if(e_m < 0) {
	alert("Введена не корректная дата");
}

res = String(e_m);
last_n = res[res.length-1];

if(e_m > 4 && e_m < 21) {
	e_m = e_m + " дней";
}
else if(last_n == 1) {
	e_m = e_m + " день";
}
else if(last_n == 2 || last_n == 3 || last_n == 4) {
	e_m = e_m + " дня";
}
else {
	e_m = e_m + " дней";
}

document.write("<h2>До конца месяца осталось - " + e_m + "</h2>");