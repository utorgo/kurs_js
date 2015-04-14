
function my_func() {
	//var block = document.getElementById("my_text");
	
	//var block = document.getElementsByName("my_name");
	
	//var block = document.my_name
	
	//var block = document.getElementsByTagName("*");
	
	
	
	///alert(block.getElementsByTagName("p")[0].innerHTML);
	
	//block = document.getElementsByClassName("story");
	
	//var block = document.getElementById("posts");
	
	//alert(block.querySelectorAll(".story")[1].innerHTML);
	
	//var block = document.getElementById("for_parent");
	
	//alert(block.parentNode.innerHTML);
	//alert(block.childNodes[3].innerHTML);
	//alert(block.lastChild.nodeType);
	//alert(block.lastElementChild.nodeType);
	//alert(block.previousElementSibling.nodeName);
	//alert(block.children.length);
	
	////////////////  part2  ///////////////////////
	
	//var  img = document.getElementById("my_text");
	//img.setAttribute("src","images/02.jpg");
	//img.src = "images/02.jpg"
	//alert(img[0].getAttribute("class"));
	
	//alert(img.attributes['src'].value);
	
	
	//var tag = document.getElementsByTagName("h2");
	//alert(tag[1].outerHTML);
	
	//tag[1].outerHTML = "<h4>POSTS</h4>";
	
	
	//tag[2].insertAdjacentHTML("afterend","<strong>NEW STR!!!!</strong>");
	/*
	var  div = document.getElementById("my_div");
	
	div.removeAttribute("class");
	
	if(div.hasAttribute("class")) {
		alert(div.className);
	}
	else {
		alert("No attr");
	}
	
	//alert(div.nodeValue);
	
	*/
	/*
	var newnode = document.createTextNode("Содержимое текстового узла");
	var newelem = document.createElement("div");
	
	//cloneNode();
	
	newelem.appendChild(newnode);
	
	var  div = document.getElementById("posts");
	var parent = document.getElementById("for_parent");
	div.insertBefore(newelem,parent);
	
	*/
	
	//var div = document.getElementsByTagName("h1");
	//div.removeChild(div.firstElementChild);
	
	//div[0].parentNode.removeChild(div[0]);
	//var new_str = document.createTextNode("Новая строка");
	//div[0].parentNode.replaceChild(new_str,div[0]);
	
	/*
	var  frag = document.createDocumentFragment();
	
	var str1 = document.createTextNode("Новая строка 1");
	var str2 = document.createTextNode("Новая строка 2");
	var str3 = document.createTextNode("Новая строка 3");
	var str4 = document.createTextNode("Новая строка 4");
	var str5 = document.createTextNode("Новая строка 5");
	
	frag.appendChild(str1);
	frag.appendChild(str2);
	frag.appendChild(str3);
	frag.appendChild(str4);
	frag.appendChild(str5);
	
	document.getElementById("posts").appendChild(frag);
	*/
	
	//alert(document.forms.my_name.elements.radio[0].type);
	//document.forms.my_name.submit();//reset()
	
	//alert(document.images[1].src);
	
	//alert(document.title);
	///document.open();
	/*
	for(var prop in document) {
		
		document.writeln("<strong>" + prop + "</strong> - " + document[prop] + "<br>");
	}
	///document.close();
	*/
	
///////////////HOME WORK//////////////////
 //1.
 /*
	 var parent = document.getElementById("footer");
	 var c = parent.firstElementChild;
	 
	 var strong = document.createElement("strong");
	 parent.replaceChild(strong,c);
	 
	 strong.appendChild(c);
	*/ 
//2.
	/*	 
 	var li = document.getElementsByTagName("li");
	
	for(var i = 0; i < li.length; i++) {
		var n = i+1;
		//li[i].firstChild.firstChild.nodeValue
		li[i].firstChild.textContent = n + "." + li[i].firstChild.textContent;
	
	}
	*/	
//3.	
	///var n = document.getElementsByTagName("body")[0];
	var n = document.body;
	var f = document.createDocumentFragment();
	
	while(n.lastChild) {
		f.appendChild(n.lastChild);
	}
	
	n.appendChild(f);
	
	
}	
	
