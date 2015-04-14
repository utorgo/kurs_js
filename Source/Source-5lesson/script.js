
/*
var i = 10;

while(i < 10) {
	document.write("Итерация № - " + i + "<br>");
	i++;
}
	
*/

/*
var i = 1;

do {
	//kod cikla
	if(i == 3) {
		break;
	}
	document.write("Итерация № do-while  - " + i + "<br>");
	i++;
}
while(i <= 10);



for(var i = 1; i <= 10; i++) {
	document.write(i);
	
	for(var j = 10; j > 0; j--) {
		document.write(j);
	}
	document.write("<br>");
}

*/
var i,j,summ;
summ = 1;
for(i = 0, j = 10; i < 10; i++, j--) {
	summ = summ + (i*j);
}
document.write(summ);

//for in
/*
// 1.
var x = 104;
// 2.

123456789
246810
3
4 12
5
6
7
8
9
*/