/*
function timer() {
	var time = setTimeout("alert('hello this is setTimeOut')",2000);
	clearTimeout(time);
} 
var interval;
function interval() {
	interval = setInterval(my, 3000);
}
var n = 1;
function my() {
	++n;
	alert(n);
	
	if(n == 4) {
		clearInterval(interval);
	}
}
*/
//alert();
//confirm();
//prompt();
/*
var w;
function op() {
	w = window.open("http://yandex.ru","name","width=250,height=200,scrollbars=1");
}
function cl() {
	w.close();
}

var global_var = "Test string";

function get_str() {
	alert(global_var);
	w.edit_var();
	alert(global_var);
	
}

function get_moveto() {
	//w.focus();
	//w.moveTo(300,300);
	//w.moveBy(50,50);
	//w.resizeTo(50,50);
	//w.resizeBy(-50,-50);
	//w.scrollTo(0,100);
	//scrollBy(10,10);
	
}

//window.open("http://google.com","mywindow");
*/
/*
var test = "Переменная главного окна";

function get_fr() {
	alert(test);
}

function get_child() {
	frames.first.get_parent_var();
}
//alert(window.outerHeight);
//alert(window.outerWidth);
//alert(window.screenY);
*/


/*
////////////////HOME WORK//////////////////
*/

// 1.

function get_data() {
	var result = prompt("Введите имя и фамилию через пробел");
	
	var name = result.substring(0,result.indexOf(" "));
	var family = result.substring((result.indexOf(" ")+1));
	
	frames.first.get_name(name);
	frames.second.get_family(family);
	
}