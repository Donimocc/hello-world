$(function(){
	var width=$('.banner2>.banner_in>img').outerWidth();
	
	var disc=$(".banner2 .disc>img");
	var i=0;
//	console.log(scroll)
	$('.banner2 .banner_in').css("marginLeft","-300%")
	function run(){
		$('.banner2 .banner_in').stop(true,true).animate({marginLeft:"+=100%"},1000,function(){
			if(i<2){
				i++;
			}else{
				i=0;
				$(this).css("marginLeft","-300%");
			}
			
			disc.attr("src","img/discoff.png");
			disc.eq(i).attr("src","img/discon.png");
			
		});
//注意，一定要给设置scroll的元素设置overflow hidden，不然无效
//		$('.banner1').animate({scrollLeft:"100%"},1000);
		
//		console.log(11);
	}
	setInterval(run,2000);
	
})