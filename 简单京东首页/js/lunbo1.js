/**
 * Author:Hungking Hsi
 * Email:imisslovelove@live.com
 * Date:2015-1-28 11:05:09
 **/
$(function() {
	//声明索引变量和获取相应html元素
	var index = 0;
	var slide = $("#slide");
	var pics = $("#pics li");
	var pic = pics.find("img");
	var btns = $("#contros #btnleft, #contros #btnright");
	var thumb = $("#thumb > a");
	var pic_thumb = thumb.find("img");
	var len = pics.length;
	var text = $("#text");
	var h3 = text.find("h3:first");
	//选中p的第一个子元素<i>
	var p = text.find("p:first");
	//声明变量timer，用来接收定时器的id，初始化为null
	var timer = null;

	var toggle = function(i) {
		/*stop([clearQueue],[jumpToEnd])
		clearQueue:如果设置成true，则清空队列。可以立即结束动画
        gotoEnd:让当前正在执行的动画立即完成，并且重设show和hide的原始样式，调用回调函数等。*/

		//设置大图的轮播效果，清空等待队列，立即结束当前动画，之后淡出，
		//再选中pics数组下标为i的元素，再清空等待队列，立即结束当前动画，再淡入
		pics.stop(true, true).fadeOut(300).eq(i).stop(true, true).fadeIn(300);
		//移除所有thunb数组元素中的active类名，再为下标为i的元素添加active类名
		thumb.removeClass("active").eq(i).addClass("active");
		//在h3和p中插入html文档，并从响应数组中读取内容
		h3.html($('<a href="' + thumb.eq(i).attr("href") + '" target="_blank">' + pic.eq(i).attr("alt") + '</a>'));
		p.html($('<a href="' + thumb.eq(i).attr("href") + '" target="_blank">' + pic_thumb.eq(i).attr("alt") + '</a>'));
	};
	//初始化
	toggle(0);
	//设置小图悬停效果
	thumb.mouseenter(function() {
		//取得index，知道进入的是哪张图
		var inx = thumb.index(this);
		if(inx != index) {
			index = inx;
			toggle(index);
		}
	});
	//设置图片向右播放一次的函数rightPlay
	var rightPlay = function() {
		index = index >= (len - 1) ? 0 : ++index;
		toggle(index);
	};
	//设置左右按钮点击事件函数
	btns.eq(0).click(function() {
		index = index <= 0 ? (len - 1) : --index;
		toggle(index);
	}).end().eq(1).click(rightPlay);
	//设置自动循环函数，每3秒执行一次rightplay
	var autoPlay = function() {
		timer = setInterval(rightPlay, 3000);
	};
	//执行autoPlay函数，使得页面加载时自动开始轮播
	autoPlay();
	//设置鼠标移入悬停时清除定时器停止轮播，移出开始自动轮播
	slide.hover(function() {
		clearInterval(timer);
	}, autoPlay);
});