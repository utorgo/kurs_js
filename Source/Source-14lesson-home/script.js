//document.write(location);

//document.write(location.hash);
//document.write(location.host);
//document.write(location.hostname);
//document.write(location.href);
//document.write(location.pathname);
//document.write(location.protocol);

//document.write(location.search);

//location.assign("http://google.com");

//location = "http://google.com";


//location.reload();

//location.replace("http://google.com");

//document.write(history.length);
///history.back();
//history.forward();

//history.go(-2);

//history.replaceState("my_data","my_title","index.html?qw=45");

/*
/////////////HOME WORK/////////////////
*/
//localhost/kurs_js/lessons_14/index.html?param=1&param2=2&name=heloo


//param=1&param2=2&name=heloo
function get_params() {
	var object = {};
	
	var param = location.search.substring(1);
	var params_array = param.split("&");
	
	for(var i = 0; i < params_array.length; i++) {
		var position = params_array[i].indexOf("=");
		
		if(position == -1) {
			continue;
		}
		
		var name = params_array[i].substring(0,position);
		
		var value =  params_array[i].substring(position+1);
		
		object[name] = value;
	}
	
	return object;
}


var result = get_params();

document.write(result.q);






