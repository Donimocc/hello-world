$(function() {
	//各种初始化
	var divSliderOut = $("#div_slider_out");
	divSliderOut.scrollLeft(450);
	var a_new = $("#a_new");
	a_new.css("color", "#000000").css("text-align", "center");
	var a_before = $("#a_before");
	a_before.css("color", "#FFFFFF")
	var imgFont = $(".img_font");
	imgFont.eq(0).attr("src", "img/img_font_on.gif");
	var li_before = $("#li_cwq");
	var li_new = $("#li_list1");
	li_before.css("border-bottom", "none");
	var imgHover2 = $(".hover2");
	imgHover2.parent().css("display", "block");
	//	imgHover2.hover(function(){
	//		$(this).parent().parent().css("border-top","2px solid rgb(112, 2, 12)")
	//	},function(){
	//		
	//	})
	var div_slider_out = $("#div_slider_out");
	var sliderleft = $("#img_slider_btnLeft");
	var sliderright = $("#img_slider_btnRight");
	var intervalID = null;
	var i = 1;
	var imgNum = 1;
	sliderleft.bind("click", function() {
		if(!div_slider_out.is(":animated")) {
			var temp = div_slider_out.scrollLeft();
			//			div_slider_out.stop(true, true);
			if(imgNum == 1 || imgNum == 6) {
				div_slider_out.animate({
					"scroll-left": 450 + 5 * 780 + ""
				}, 0);
				imgNum = 1;
			}

			temp = div_slider_out.scrollLeft();
			div_slider_out.animate({
				"scroll-left": temp - 780 + ""
			}, 1000);
			imgNum++;
		}

		//		if(intervalID) {
		//			clearInterval(intervalID);
		//			inintervalID = null;
		//		}
		//

		//		intervalID = setInterval(function() {
		//			if(i < 40) {
		//				div_slider_out.scrollLeft(temp -= 20);
		//				i++
		//			} else {
		//				clearInterval(intervalID);
		//				i = 1;
		//				inintervalID = null;
		//			}
		//
		//		}, 25)
	})
	sliderright.bind("click", function() {
			var temp = div_slider_out.scrollLeft();
			//		div_slider_out.stop(true,true);
			if(!div_slider_out.is(":animated")) {
				if(imgNum == 6) {
					div_slider_out.animate({
						"scroll-left": 450 + ""
					}, 0);
					imgNum = 1;
				}

				temp = div_slider_out.scrollLeft();
				div_slider_out.animate({
					"scroll-left": temp + 780 + ""
				}, 1000);
				imgNum++;
			}
			//		if(intervalID) {
			//			clearInterval(intervalID);
			//			inintervalID = null;
			//		}
			//		var temp = div_slider_out.scrollLeft();
			//		intervalID = setInterval(function() {
			//
			//			if(i < 40) {
			//				div_slider_out.scrollLeft(temp += 20);
			//				i++
			//			} else {
			//				clearInterval(intervalID);
			//				i = 1;
			//				inintervalID = null;
			//			}
			//
			//		}, 25)

		})
		//自动轮播
	setInterval(function() {
			sliderright.trigger("click");
		}, 5000)
		//变化字体大小
	var smaller = $("#sizeChangeSmall");
	var larger = $("#sizeChangeLarge");
	var font = 1;
	var fontText = $(".text_font");
	smaller.bind("click", function() {
		var thisEle = $("#demofont").css("font-size");
		//			console.log(thisEle);
		var textFontSize = parseInt(thisEle, 10);
		var unit = thisEle.slice(-2); //获取单位
		imgFont.attr("src", "img/img_font.gif");
		switch(font) {
			case 1:
				imgFont.eq(0).attr("src", "img/img_font_on.gif");

				break;
			case 2:
				imgFont.eq(0).attr("src", "img/img_font_on.gif");
				fontText.css("font-size", textFontSize - 2 + unit)

				font--;

				break;
			case 3:
				imgFont.eq(1).attr("src", "img/img_font_on.gif");
				fontText.css("font-size", textFontSize - 2 + unit)

				font--;

				break;
		}

	})
	larger.bind("click", function() {
		imgFont.attr("src", "img/img_font.gif");
		var thisEle = $("#demofont").css("font-size");
		//			console.log(thisEle);
		var textFontSize = parseInt(thisEle, 10);
		var unit = thisEle.slice(-2); //获取单位
		switch(font) {
			case 1:
				imgFont.eq(1).attr("src", "img/img_font_on.gif");
				fontText.css("font-size", textFontSize + 2 + unit)
				font++;
				break;
			case 2:
				imgFont.eq(2).attr("src", "img/img_font_on.gif");
				fontText.css("font-size", textFontSize + 2 + unit)
				font++;

				break;
			case 3:
				imgFont.eq(2).attr("src", "img/img_font_on.gif");

				break;
		}
	})
	a_new.css("border", "none")
		//主体列表淡入淡出
	var div_tab1 = $("#div_tab1");
	var div_tab2 = $("#div_tab2");
	li_new.bind("click", function() {
		if(div_tab2.is(":visible")) {
			div_tab2.stop(true, true).fadeOut("slow");
			div_tab1.stop(true, true).delay(600).fadeIn("slow");
			li_before.css("background", "rgb(205,60,84)");
			a_before.css("background", "rgb(205,60,84)").css("color", "white");
			li_new.css("background", "white");
			a_new.css("background", "white").css("color", "black");

		}

	});
	li_before.bind("click", function() {
		if(div_tab1.is(":visible")) {
			div_tab1.stop(true, true).fadeOut("slow");
			div_tab2.stop(true, true).delay(600).fadeIn("slow");
			li_new.css("background", "rgb(205,60,84)");
			a_new.css("background", "rgb(205,60,84)").css("color", "white");
			li_before.css("background", "white");
			a_before.css("background", "white").css("color", "black");
		}

	});
	//底部banner小轮播，和顶部逻辑不同
	var banner = 1;
	var bottomOut = $("#div_banner");
	var bottomIn = $("#div_bannerIn");

	//	console.log($("#img_background").css("width"));
	var btnleft = $("#img_left_bottom");
	var btnright = $("#img_right_bottom");
	btnright.bind("click",function(){
		if(!bottomOut.is(":animated")) {
				if(banner == 7) {
					bottomOut.animate({
						"scroll-left": 0 + ""
					}, 0);
					banner = 1;
				}

				temp = bottomOut.scrollLeft();
				bottomOut.animate({
					"scroll-left": temp + 230 + ""
				}, 500);
				banner++;
			}
	})
	btnleft.bind("click",function(){
				if(!bottomOut.is(":animated")) {
			var temp = bottomOut.scrollLeft();
			//			div_slider_out.stop(true, true);
			if(banner == 1 || banner == 7) {
				bottomOut.animate({
					"scroll-left": 6* 230 + ""
				}, 0);
				banner = 1;
			}

			temp = bottomOut.scrollLeft();
			bottomOut.animate({
				"scroll-left": temp - 230 + ""
			}, 500);
			banner++;
		}
	})
	setInterval(function(){
		btnright.trigger("click")
	},2000)
})