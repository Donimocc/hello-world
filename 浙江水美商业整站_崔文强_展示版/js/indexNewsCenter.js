$(function() {
	$("#indexNewsCenter>ul>a>li").hover(function() {
		/*
		 
		 * stop(true)等价于stop(true,false): 停止被选元素的所有加入队列的动画。
　　stop(true,true):停止被选元素的所有加入队列的动画，但允许完成当前动画。
　　stop()等价于stop(false,false):停止被选元素当前的动画，但允许完成以后队列的所有动画。
　　stop(false,true):立即结束当前的动画到最终效果，然后完成以后队列的所有动画。
		 * 
		 * */
//可以看出，第一个参数是对动画队列的操作，第二个是对当前动画的操作，设置为true会立即终止动画
		//		$(this).children("li").stop(false,true).animate({"backgroundColor":"#12a251"},500);
		//		$(this).find(".color1").stop(false,true).animate({"color":"#ffffff"},500);
		//		$(this).find(".color2").stop(false,true).animate({"color":"#ffffff"},500);
		//仅为测试参数
		//		$(this).children("li").stop(false,false).animate({"backgroundColor":"#12a251"},500);
		//		$(this).find(".color1").stop(false,false).animate({"color":"#ffffff"},500);
		//		$(this).find(".color2").stop(false,false).animate({"color":"#ffffff"},500);

		//不传参数也是这个意思
		//		$(this).children("li").stop(false,false).animate({"backgroundColor":"#12a251"},500);
		//		$(this).find(".color1").stop(false,false).animate({"color":"#ffffff"},500);
		//		$(this).find(".color2").stop(false,false).animate({"color":"#ffffff"},500);

		//		$(this).children("li").stop(true,false).animate({"backgroundColor":"#12a251"},500);
		//		$(this).find(".color1").stop(true,false).animate({"color":"#ffffff"},500);
		//		$(this).find(".color2").stop(true,false).animate({"color":"#ffffff"},500);

		//		$(this).children("li").stop(true,true).animate({"backgroundColor":"#12a251"},500);
		//		$(this).find(".color1").stop(true,true).animate({"color":"#ffffff"},500);
		//		$(this).find(".color2").stop(true,true).animate({"color":"#ffffff"},500);

		$(this).animate({
			"backgroundColor": "#12a251"
		}, 500);
		$(this).find(".color1").animate({
			"color": "#ffffff"
		}, 500);
		$(this).find(".color2").animate({
			"color": "#ffffff"
		}, 500);
	}, function() {
		$(this).stop(false, true).animate({
			"backgroundColor": "#f2f2f2"
		}, 500);
		$(this).find(".color1").stop(false, true).animate({
			"color": "#333333"
		}, 500);
		$(this).find(".color2").stop(false, true).animate({
			"color": "#999999"
		}, 500);
	})
})