/*
var a,b;
a = 8;
b = 10;
var array = [1,10,5,20,a,b,a + b,,3,5];
var array2 = ["hello","world",2,3,4,true,];
var array3 = [,,];

var array4 = new Array(10,23,34,45,);
var array5 = new Array(5);"hello"

array[1] = 'new';
array["one"] = "hello world";
document.write(array["one"]);
*/

/*
var a = [1,"hello",3,3,4,76,7,8];
/*
for(var i = 0; i < a.length; i++) {
	document.write(a[i] + "<br>");
}


for(var index in a) {
	document.write("Ячейка массива - " + index + " - значение данной ячейки - " + a[index] + "<br>");
}
*/
/*
var arr = [1,2,3,4,["hello","world"]];
document.write(arr[4][1]);
*/
/*
var array = ["мандарин","апельсин","груша","банан"];

//document.write(array.join(" | --- |"));
//array.reverse();
//document.write(array);
*/

/*
var array = [100,200,1,2,11,111,22,222,3,4,5,];
array.sort(
		function (a,b) {
			///kod
			if(a < b) {
				return -1;
			}
			if (a > b) {
				return 1;
			}
			return 0;
		}
	);
document.write(array);
*/
/*
var arr = ["a","b","c"];
var a = arr.concat("d","e","f",[1,2,3,4]);
document.write(a);
*/
/*
var arr = ["a","b","c","d","e","f"];
document.write(arr.slice(-3,-2));

*/
/*
var arr = ["a","b","c","d","e","f"];
//alert(arr.splice(2,3));
arr.splice(2,0,"hello","world",34,45,566,67,[2,3,4])
document.write(arr);
*/

/*
var arr = ["a","b","c","d","e","f"];
arr.push(1,2,3);
alert(arr.push(1,2,3));
//alert(arr.pop());
document.write(arr);
*/
/*
var arr = ["a","b","c","d","e","f"];
arr.unshift(1);
arr.unshift(1);

alert(arr.shift());
*/
/*
var arr = ["a","b","c","d","e","f"];
//delete arr[1];
if(1 in arr) {
	alert(arr[1]);
}
else {
	alert("NOT");
}
document.write(arr);
*/
/*
arr = 1;
if (Array.isArray(arr)) {
	alert("Aray");
}
else {
	alert("FALSE");
}
*/

/*
////////////HOME WORK///////////////
*/

///array[4][5] = 20

var array = new Array(10);

for(var i = 0; i < array.length; i++) {
	array[i] = new Array(10);
}

for(var j = 0; j < array.length; j++) {
	for(var n = 0; n < array[j].length; n++) {
		array[j][n] = j*n
	}
}

alert(array[7][5]);
