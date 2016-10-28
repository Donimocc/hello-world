var text;
var btnShowLrc = $("#btnShowLrc");
var myvideo2 = document.getElementById("video");
var pContent = document.getElementById("p_content");
$(document).ready(function() {
	btnShowLrc.click(function() {
		htmlobj = $.ajax({
			url: "music/music/anlian-史红庆-20120521.lrc",
			async: false
		});
		text = htmlobj.responseText;
		$("#p_content").html(text); 
		setInterval(function() {
			myShowLrcFun(parseLyric(text));
		}, 50)
		myShowLrcFun(parseLyric(text));
	});
});

function parseLyric(text) {
	lyric = text.split(/[\n]/); 
	var _l = lyric.length; 
	console.log("_l: " + _l)
	lrc = new Array();
	for(i = 0; i < _l; i++) {
		var d = lyric[i].match(/\[\d{2}:\d{2}((\.|\:)\d{2})\]/g); 
		console.log("d: " + d)
		var t = lyric[i].split(d); 
		console.log("t: " + t[1])
		if(d != null) { 
			var dt = String(d).split(':');
			console.log("dt: " + dt)
			var _t = Math.round(parseInt(dt[0].split('[')[1]) * 60 * 100 + parseFloat(dt[1].split(']')[0]) * 100) / 100;
			console.log("_t: " + _t);
			lrc.push([_t, t[1]]);
			console.log("t[1] : " + t[1]);
		}

	}
	return lrc;
}

function myShowLrcFun(e) {
	for(var i = 0; i < e.length; i++) {
		console.log("e[i][0]: " + e[i][0]);
		if(e[i][0] - myvideo2.currentTime < 0.1) {
			console.log(myvideo2.currentTime);
			//		alert("我是在显示歌词函数中的宝宝");
			$("#p_content").html(e[i][1]);
			console.log("e[i][1]" + e[i][1]);

		}
	}
}