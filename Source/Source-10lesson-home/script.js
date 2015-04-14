//var now = new Date();
/*
var new_year = new Date(2014,0,1,1,1,1);

var number_days = new_year - now;

alert(parseInt(number_days / (1000*60*60*24)));
*/
//document.write(now);

//document.write(now.toLocaleString());
//document.write("<br>");
//document.write(Date.UTC());
//document.write("<br>");
//document.write(now.toLocaleDateString());
//document.write(now.toLocaleTimeString());

//document.write(now.getDate());
//document.write(now.getMonth());

/*
var number_m = now.getMonth();
var monts = ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"];

document.write(monts[number_m]);
*/
/*
var day_n = now.getDay();
var days = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
document.write(days[day_n]);
*/

/*
now.setFullYear(1990);
now.setMonth(9);
now.setDate(10);
now.setHours(10);
now.setMinutes(59);
now.setMilliseconds(100);

now.setTime(10000000345345);
*/
/*
document.write(now.getFullYear());
document.write("<br>");
var number_m = now.getMonth();
var monts = ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"];


document.write(monts[number_m]);
document.write("<br>");

var day_n = now.getDay();
var days = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
document.write(days[day_n]);
document.write("<br>");
document.write(now.getDate());
document.write("<br>");
document.write(now.getHours());
document.write(":");
document.write(now.getMinutes());
document.write(":");
document.write(now.getSeconds());
document.write(":");
document.write(now.getMilliseconds());
document.write("<br>");
document.write(now.getTime());

function myfoo() {
	alert("hello this is myfoo");
}

setTimeout(myfoo,2000);
*/

/*
////////HOME WORK/////////
*/
// 1.
var now = new Date();
var next  = new Date(2013,8,1,9,0,0);

if(next > now) {
	var raznost  = next - now;
	document.write("До первого сентября осталось - " + parseInt(raznost/(1000*60*60*24)));
	document.write("<br />До первого сентября осталось - " + parseInt(raznost/(1000*60*60)));
}
else {
	document.write("Неверная дата");
}

// 2.
function get_clock() {
	var now;
	var hours,minutes,seconds;
	var result;
	
	now = new Date();
	
	hours = now.getHours();
	minutes = now.getMinutes();
	seconds = now.getSeconds();
	
	result = hours + " : " + minutes + " : " + seconds;
	
	document.getElementById("cl").innerHTML = result;
	
	setTimeout("get_clock()",1000);
	
}

get_clock();