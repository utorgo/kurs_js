function test(x) {
	
	try {
		x *=100;//x =x*100
		x= my_func(x);
		document.write("Ошибок не было - " + x + "<br />");
	}
	catch(e) {
		alert("Обработка исключения: " + e.name + "|" + e.message);
	}
	finally {
		x += 55;
		document.write("Отработал блок finally - " + x + "<br />");
	}
}

function my_func(x) {
	
	try {
		if(x == 0) {
			throw new Error("Параметр х равен нулю <br />");
		}
	}
	catch(e) {
		alert("Обработка исключения в функции my_func: " + e.name + "|" + e.message);
	}
	finally {
		document.write("Отработал блок finally в функции my_func - " + x + "<br />");
	}
	
}

test(0);