$(function(){
	var width=$('.banner1>.banner_in>img').outerWidth();
	var scroll=$('.banner1').scrollLeft();
	var disc=$(".banner1 .disc>img");
	var index=0;
	function run(){
		$('.banner1 .banner_in').stop(true,true).animate({marginLeft:"-=100%"},1000,function(){
			if(index<3){
				index++;
			}else{
				index=0;
				$(this).css("marginLeft","0%");
			}
			
			disc.attr("src","img/discoff.png");
			disc.eq(index).attr("src","img/discon.png");
			
		});
//注意，一定要给设置scroll的元素设置overflow hidden，不然无效
//		$('.banner1').animate({scrollLeft:"100%"},1000);
		
//		console.log(11);
	}
	setInterval(run,2000);
	
})
