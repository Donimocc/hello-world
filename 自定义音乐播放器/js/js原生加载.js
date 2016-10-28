(function(){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(msg){
		if(xhr.readyState==4&&xhr.status==200){
			console.log(xhr.responseText);
			var text=xhr.responseText;
			
		}
	}
})();
