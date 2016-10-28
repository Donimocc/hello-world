$(function(){
	function About(){
		//aboutmenu模块
		//初始化选中的标签，根据自定义的属性data-on,属性选择器不需要加引号，加了会出错
		$("#aboutmenu>ul>li>a[data-on]").css("background","url(images/images/ndho.png) no-repeat center top");
		//绑定点击函数，由于构架是跳转html页面的，所以该点击函数可以不写
//		$("#aboutmenu>ul>li>a").click(function(){
//		$(this).parent().siblings().children("a").css("background","url(images/images/ndh.png) no-repeat center top");
//		$(this).css("background","url(images/images/ndho.png) no-repeat center top");
//		
//	})
	}
	var myabout=new About();
	//悬停放大效果
	var hoverbig = function() {
			var bgimgs = $("#aboutdetail>ul>li.lastchild>div.hover>ul>li .ndiv img.bg");
			var divin = $("#aboutdetail>ul>li.lastchild>div.hover>ul>li .ndiv");

//			console.log(divin[0]);
//			console.log(bgimgs[0]);
			divin.hover(function() {
				$(this).parent().find("img.bg").stop(true, false).animate({
					'width': "136px",
					"height": "136px",
					"left": "-8px",
					"top": "-8px"
				}, 500);
				$(this).find("span").stop(true, false).animate({
					"font-size": "20px"
				}, 500);
				$(this).find("b").stop(true, false).animate({
					"font-size": "16px"
				}, 500)
			}, function() {
				$(this).parent().find("img.bg").stop(true, false).animate({
					'width': "120px",
					"height": "120px",
					"left": "0px",
					"top": "0px"
				}, 500);
				$(this).find("span").stop(true, false).animate({
					"font-size": "16px"
				}, 500);
				$(this).find("b").stop(true, false).animate({
					"font-size": "12px"
				}, 500);
			});
		}
		//启动效果，绑定函数
	hoverbig();
	
})
