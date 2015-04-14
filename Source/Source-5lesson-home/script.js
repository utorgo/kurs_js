
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

*/

/*
for(var i = 1; i <= 10; i++) {
	document.write(i);
	
	for(var j = 10; j > 0; j--) {
		document.write(j);
	}
	document.write("<br>");
}


var i,j,summ;
summ = 1;
for(i = 0, j = 10; i < 10; i++, j--) {
	summ = summ + (i*j);
}
document.write(summ);

//for in
*/

/*
/////HOME WORK
*/
// 1.
/*
var x = 1024;

while( x > 0 ) {
	x = x/2;
	
	if(x%2 != 0) {
		continue;
	}
	
	if(x == 0) {
		break;
	}
	
	document.write(x + "<br>");
}
*/

// 2.

/*
123456789
24
3
4
5   25
6
7
8
9
*/
var color_tr,color_td;
document.write("<table border='1px'>");

for(var i = 1; i < 10; i++) {
	
	if(i == 1) {
		color_tr = "#c3c3c3";
	}
	else {
		color_tr = "#ffffff";
	}
	
	document.write("<tr style='height:30px;background-color:" + color_tr + "'>");

	for(var j = 1; j < 10; j++) {
		
		if(j == 1 || i == 1) {
			color_td = "#c3c3c3";
		}
		else {
			color_td = "#ffffff";
		}
			
		document.write("<td style='width:30px;background-color:" + color_td + "'>" + i*j + "</td>");
	}
	document.write("</tr>");
}

document.write("</table>");
