$(function() {
	var sliderbtn = $("#slides>div.a img");
	var previousSlider = $("#slides>div.a img").eq(0);
	var sotporstart = $("#slides>div.a img").eq(1);
	var nextSlider = $("#slides>div.a img").eq(2);
	var v = 4;
	var v1 = $(".visual1"),
		v2 = $(".visual2"),
		v3 = $(".visual3"),
		v4 = $(".visual4");

	function initZindex() {
		v1.css("z-index", 0);
		v2.css("z-index", 0);
		v3.css("z-index", 0);
		v4.css("z-index", 0);
	}

	function run() {
		initZindex();
		switch(v) {
			case 1:
				v2.css("z-index", 1);
				v = 2;
				break;
			case 2:
				v3.css("z-index", 1);
				v = 3;
				break;
			case 3:
				v4.css("z-index", 1);
				v = 4;
				break;
			case 4:
				v1.css("z-index", 1);
				v = 1;
				break;
		}
	}
	sliderbtn.eq(0).click(function() {
		initZindex();
		switch(v) {
			case 1:
				v4.css("z-index", 1);
				v = 4;
				break;
			case 2:
				v1.css("z-index", 1);
				v = 1;
				break;
			case 3:
				v2.css("z-index", 1);
				v = 2;
				break;
			case 4:
				v3.css("z-index", 1);
				v = 3;
				break;
		}
		if(myID) {
			sliderbtn.eq(1).trigger("click");
		}

	}).end().eq(2).click(function() {

		run();
		if(myID) {
			sliderbtn.eq(1).trigger("click");
		}
	})
	var myID;
	myID = setInterval(function() {
		run();
		console.log("我在跑");
		console.log(v);
	}, 2000);
	sliderbtn.eq(1).toggle(function() {
		var a = sliderbtn.eq(1).attr("src").replace("stop", "play");
		sliderbtn.eq(1).attr("src", a);
		clearInterval(myID);
		myID = null;
	}, function() {
		var a = sliderbtn.eq(1).attr("src").replace("play", "stop");
		sliderbtn.eq(1).attr("src", a);
		myID = setInterval(function() {
			run();
			console.log("我在跑");
			console.log(v);
		}, 2000);
	})
	$("#page3>ul>li:nth-child(1)>a").click(function(){
		$("#page3>ul>li:nth-child(1)>div").css("display","block");
		$("#page3>ul>li:nth-child(2)>div").css("display","none");
	});
	$("#page3>ul>li:nth-child(2)>a").click(function(){
		$("#page3>ul>li:nth-child(2)>div").css("display","block");
		$("#page3>ul>li:nth-child(1)>div").css("display","none");
	});
})