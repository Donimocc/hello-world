$(function() {
	//css实在找不出问题啊，只能改改js了
	//实在没办法，加ID单独选择来做
	function fun1(that){
		$(that).animate({
			"backgroundColor": "#12a251"
		}, 500);
		$(that).find(".color1").animate({
			"color": "#ffffff"
		}, 500);
		$(that).find(".color2").animate({
			"color": "#ffffff"
		}, 500);
	}
	function fun2(that){
		$(that).stop(false, true).animate({
			"backgroundColor": "#f2f2f2"
		}, 500);
		$(that).find(".color1").stop(false, true).animate({
			"color": "#333333"
		}, 500);
		$(that).find(".color2").stop(false, true).animate({
			"color": "#999999"
		}, 500);
	}
	$("#indexNewsCenter_li1").eq(0).hover(function() {
		var that=this;
		return fun1(that);
	}, function() {
		var that=this;
		return fun2(that);
	})
	$("#indexNewsCenter_li2").eq(0).hover(function() {
		var that=this;
		return fun1(that);
	}, function() {
		var that=this;
		return fun2(that);
	})
	$("#indexNewsCenter_li3").eq(0).hover(function() {
		var that=this;
		return fun1(that);
	}, function() {
		var that=this;
		return fun2(that);
	})
	
//	for (var i = 0; i < $("#indexNewsCenter>ul>a>li").length; i++) {
//		console.log($("#indexNewsCenter>ul>a>li")[i]+"*******************") 
//	}
})