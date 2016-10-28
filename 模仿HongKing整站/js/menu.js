$(function() {
	function turncircle() {
		$("#menu li>a>img").attr("src", "img/menu_off.png")
	}

	function turnrect(e) {
		e.attr("src", "img/menu_on.png")
	}
	//	turncircle();
	var num=0;
	$("#menu li>a>img").click(function() {
		turncircle();
		turnrect($(this));
		num=$(this).attr("data-num")
		console.log(num);
	})
// using bind
$(document).bind('mousewheel', function(event, delta, deltaX, deltaY) {
    if (window.console && console.log) {
         console.log(delta+"     "+deltaX+"        "+deltaY);
    }
    //向下滚delta和deltay均为-1，向上为1
    if(deltaY>0){
    	if(num>0){
    		num--;
    		turncircle();
    		turnrect($("#menu li>a>img").eq(num));
    	}else{
    		
    	}
    }else{
    	if(num<3){
    		num++;
    		turncircle();
    		turnrect($("#menu li>a>img").eq(num));
    	}
    }
});
//使得在导航细表上滚动鼠标滚轮，不会导致下面页面的翻页动作
$(".web_area2").bind('mousewheel', function(event, delta, deltaX, deltaY) {
	event.stopPropagation();
// return false;
});

})