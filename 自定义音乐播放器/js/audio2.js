window.onload = function() {
	var myaudio = document.getElementById("audio");
	var btnPlay = document.getElementById("play");
	var btnBefore = document.getElementById("btnBefore")
	var btnNext = document.getElementById("btnNext")
	var arrMusics = [];

	function init(element, url) {
		var element = element;
		element.setAttribute("src", url);
		//paused为只读属性，不允许赋值。
		//		element.paused = true;
		//添加这一句为自动播放功能
		//		element.play();
		btnPlay.addEventListener("click", function() {
			play(element);
		});
		//测试paused属性
		//"undefined"
		console.log(event.paused);
		//“true”
		setTimeout(function() {
			console.log(element.paused);
		}, 1000);

		btnBefore.addEventListener("click", function() {

		})
		btnNext.addEventListener("click", function() {

		})
	}
	//可以实现
	//	init(myaudio, "music/music/anlian-史红庆-20120521.mp3")
	//也可以播放，只是没有画面
	init(myaudio, "video/浮夸.mp4")
		//本意为第一次播放设置标记，调试后发现不用
		//var firstPlay=true;
	function play(element) {

		var element = element;

		//		if(firstPlay){
		//			element.play();
		//			btnPlay.innerHTML = "暂停"
		//			firstPlay=false;
		//		}else{
		if(element.paused) {
			//替代上面的if判断，测试用
			//		if(true) {
			element.play();
			btnPlay.innerHTML = "暂停";
		} else {
			element.pause();
			btnPlay.innerHTML = "开始";
 
		}
		//		}

	}

	function btnBefore() {

	}

	function btnnext() {

	}
}