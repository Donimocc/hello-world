$(function() {
	var imgs = $(".sns_area a img");
	console.log(imgs[0]);
	//							imgs[0].src = String(imgs[0].src).replace("off", "on");

	function offtoonhandler(index) {
		return function() {
			//									console.log(index)
			var i = index;
			var a = imgs.eq(i).attr("src").replace("off", "on");
			imgs.eq(i).attr("src", a);
			//									console.log(a);
			imgs[i].src = a;
		}
	}

	function ontooffhandler(index) {
		return function() {
			var i = index;
			var a = imgs.eq(i).attr("src").replace("on", "off");
			imgs.eq(i).attr("src", a);
			imgs[i].src = a;
		}
	}
	for(var i = 0; i < imgs.length; i++) {
		imgs.eq(i).hover(offtoonhandler(i), ontooffhandler(i));
	}
	var open = $(".open").eq(0);
	var lang = $(".absolute").eq(0);
	open.click(function() {
		if(lang.css("display") == 'none') {
			lang.css("display", 'block');
		} else {
			lang.css("display", 'none');
		}
	});

	var secondnav1 = $(".second_nav>ul>li");
	var secondnav2 = $(".second_nav>ul>li>ul>li");
	var secondnav3 = $(".second_nav>ul>li>ul ul")
		//	function hidesecondnav3(){
		//		secondnav3.hide();
		//	}
		//	for (var i = 0; i < secondnav1.length; i++) {
		//		secondnav1.eq(i).hover(function(){},function(){})
		//	}
		//处理secondnav中最终的ul的位置
	for(var i = 0; i < secondnav2.length; i++) {
		secondnav2.eq(i).hover(function(e) {
			var a = $(this).width();
			console.log(a);
			console.log($(this).find("ul"));
			$(this).find(".sub-menu").css("left", a + "px");
		})
	}
	//fullpage.js,加了这个，body就没有侧边滚动条了
	$("#div_content").fullpage({
//		scrollOverflow: true
	});

	//search-close
	$(".search_close").eq(0).click(function() {
		$(".search_area").eq(0).css("display", "none");
	});
	$("#searchclick").click(function() {
		$(".search_area").eq(0).css("display", "block");
	});
	$(".search_area").eq(0).click(function() {
		$(".search_area").eq(0).css("display", "none");
	});
	//小区域点击不隐藏
	$(".search_con").eq(0).click(function(event) {
		$(".search_area").eq(0).css("display", "block");
		//取消事件冒泡且取消默认行为
		//		return false;
		//只取消事件冒泡
		event.stopPropagation();
		//只取消默认行为
		//		event.preventDefault();
	})

	//Open all menu，详细列表页面操作
	$(".showdetail").eq(0).click(function() {
		$(".web_area2").eq(0).css("display", "block");
	})
	$(".opensubmenu").eq(0).click(function() {
		$("#detailnav #detailnavIn>ul.cl>li>ul>li>div a").css("display", "block");
		$(this).css("display", "none");
		$(".closesubmenu").eq(0).css("display", "block");
	});
	$(".closesubmenu").eq(0).click(function() {
		$("#detailnav #detailnavIn>ul.cl>li>ul>li>div a").css("display", "none");
		$(this).css("display", "none");
		$(".opensubmenu").eq(0).css("display", "block");
	});
	//打开和关闭详细列表,  更换了1.8版本的jquery，解决隐藏元素问题
	jQuery(".showdetail img").eq(0).toggle(function(){
		$(".web_area2").css("display","block");
		$(this).attr("src","img/btn_close2.png");
	},function(){
		$(".web_area2").css("display","none");
		$(this).attr("src","img/btn_gnb.png");
	});
	

})