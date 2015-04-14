
var a = "hello world 123 world dshjg jdsdhf sddskf sbf";
//var a = new String("hello world");
//alert(a);


//alert(a.charAt(7));//a[7];
//document.write(a.concat("1234567890"));//+

//document.write(a.indexOf("world"));
//document.write(a.lastIndexOf("world"));\
/*
var s = "hello,world,word";
var array = s.split("");

if(Array.isArray(array)) {
	document.write(array);
}
*/

//document.write(a.replace("jdsdhf","new string"));

//document.write(a.substr(-3));
//document.write(a.substring(0,6));


//document.write(a.toUpperCase());

//var str = a.toUpperCase();
//var str = a.toLocaleUpperCase();
//document.write(str.toLocaleLowerCase());

//document.write(a.slice(6,-12));

//document.write(a.search(/[0-9]/));


var reg = a.match(/[0-9]+/);
document.write(reg[0]);


//document.write(a.link("http://google.com"));

var c = "строка 2";
var b = "строка 1";

alert(c.localeCompare(b));



