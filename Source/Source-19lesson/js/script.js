window.onload = function () {
	/*
	var obj = document.getElementById("textfield1");
	
	obj.onkeydown = function(e) {
		alert("bn");
	}
	*/
	//var h2 = document.getElementById("for_test");
	
	//h2.addEventListener("click",my_func,false);
	//h2.addEventListener("click",my_func2,false);
	
	//h2.attachEvent("onclick",my_func);
	//h2.attachEvent("onclick",my_func2);
	
	//get_hendler(h2,"click",my_func);
	//get_hendler(h2,"click",my_func2);
	
}


function get_hendler(target,type,func) {
	if(target.addEventListener) {
		target.addEventListener(type,func,false);
	}
	else if(target.attachEvent) {
		target.attachEvent("on"+type,func);
	}
}

// stopPropagation();
// window.event.cancelBubble = true;
//removeEventListener()
//detachEvent()
function my_func(e) {
		
		e = e || window.event;
		
		if(e.preventDefault) {
			e.preventDefault();
		}
		else if(e.returnValue) {
			e.returnValue = false;
		}
		alert(e);
		
}

function my_func2(e) {
		alert('hello2');
}
	

