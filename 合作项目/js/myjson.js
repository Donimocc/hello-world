$(function() {
	$("#start").click(function() {
		$.getJSON("myjson.json", function(data) {
			var $name = $(".name");
			var strHtml = ""; //存储数据的变量  
			$name.empty(); //清空内容  
			$.each(data, function(infoIndex, info) {
				//                strHtml += "姓名："+info["name"]+infoIndex+"<br>";  
				//                strHtml += "性别："+info["sex"]+infoIndex+"<br>";  
				//                strHtml += "邮箱："+info["email"]+infoIndex+"<br>";  
				//                strHtml += "<hr>"  
				//				$name[infoIndex].html = info["name"];
				strHtml += info["name"];
				//console.log(strHtml);

			})
			$name[0].html(strHtml); //显示处理后的数据     
			console.log($name[0].id);
			
		})
//		alert("aa")
	})

})