//Объявляем множители
var raw, column, prod;
//Получаем произведения
for(raw=1;raw<=9;raw++){
    for(column=1;column<=9;column++){
        //Выводим произведения
        prod = raw*column;
        if(prod.length<2){
            document.write("  " + prod);
        }
        document.write(prod);
    }
    document.write("<br>");
}

