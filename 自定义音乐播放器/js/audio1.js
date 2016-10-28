window.onload = function() {
	var liWidth = 25,
		div_ul = 100;
		var divList=document.getElementById("div_list");
	var myaudio = document.getElementById("audio");
	var myvideo = document.getElementById("video");
	var btnPlay = document.getElementById("play");
	var btnBefore = document.getElementById("btnBefore")
	var btnNext = document.getElementById("btnNext")
	var divOut = document.getElementById("div_out");
	var divIn = document.getElementById("div_in");
	var divBuffer = document.getElementById("div_buffer");
	var spanCurrent = document.getElementById("spanCurrentTime");
	var spanDuration = document.getElementById("spanDuration");
	var arrMusics = ["music/music/yigeren-史红庆-201100917.mp3",
		"music/music/xiangxiangweidao-史红庆-20091021.mp3",
		"music/music/hebao-史红庆-20110301.mp3",
		"music/music/anlian-史红庆-20120521.mp3",
		"http://sc.111ttt.com/up/mp3/240940/B47F9E30173C1FC1E7997D652C4B6BDD.mp3",
		"http://cc.stream.qqmusic.qq.com/C200003aAYrm3GE0Ac.m4a?vkey=C135B42CCAE3071AD19816DADB54FBEEA63790294DD5D83608FC300892371A970FC6C235F600E08D680C3998C95D3CC111597F0860FFB82E&guid=7104771195&fromtag=30",
		"video/浮夸.mp4",
		"http://yinyueshiting.baidu.com/data2/music/6d9424ab2922414984099dd2bc3f2d3c/268415258/26841522975600128.mp3?xcode=689e547a18baa63959dc68219d22c373",
		"http://yinyueshiting.baidu.com/data2/music/d45017da8bc6b8f11cc7b3189c122614/256513964/23407456144000128.mp3?xcode=021323ffbcb152efd7984b79751f9d39"
	];
	var width = 700;
	console.log(arrMusics[5]);
	console.log(myvideo.paused);
	console.log(arrMusics[1]);
	var index = 0;
	var length = arrMusics.length;
	var arrList = document.getElementsByClassName("li_list");
	var myaddrate = document.getElementById("btnadd");
	var mysubrate = document.getElementById("btnsub");
	var mybtnSingle = document.getElementById("btnSingle");
	var mybtnAllLoop = document.getElementById("btnAll");
	var mybtnRandom = document.getElementById("btnRandom");
	var loopStyle = 0;
	var ulList = document.getElementById("ul_list");
	//读取lrc
	var text;
	var btnShowLrc = $("#btnShowLrc");
	var pContent = document.getElementById("p_content");
	//增减音量
	var btnAddvolume = document.getElementById("btnAddVolume");
	var btnSubvolum = document.getElementById("btnSubVolume");
	var p_test=document.getElementById("p_test");

	function init(element, url) {
		var element = element;
		element.setAttribute("src", url);
		divIn.style.width = 0 + "px";
		divBuffer.style.width = 0 + "px";
		//paused为只读属性，不允许赋值。
		//		element.paused = true;
		//添加这一句为自动播放功能
		//		element.play();
		btnPlay.addEventListener("click", function() {
			play(element);
		});
		//测试paused属性
		//"undefined"，很奇怪，代码写长了，这里就变成true了，应该是meta数据已经读取到了，对比audio2.js
		console.log(element.paused);
		//“true”
		setTimeout(function() {
			console.log(element.paused);
		}, 1000);

		btnBefore.addEventListener("click", function() {
			btnBeforefun(element);
		})
		btnNext.addEventListener("click", function() {
			btnnextfun(element);
		})

		element.addEventListener("ended", changeLoopStyle(element))

		//		setInterval(myBuffer(myvideo), 50);

		for(var i = 0; i < arrList.length; i++) {
			arrList[i].addEventListener("click", function() {
				var ele = this;
				listFun(element, ele);
			});
		}
		//列表背景色
		initListBackground()
		changeBackground()
			//时间
		setInterval(function() {
			return spancTime();
		}, 50);
		//加速减速
		element.addEventListener("ratechange", function() {

		});
		myaddrate.addEventListener("click", function() {
			addrate(element);
		});
		mysubrate.addEventListener("click", function() {
			subtract(element);
		});

		mybtnSingle.addEventListener("click", function() {
			loopStyle = 1;
		});
		mybtnAllLoop.addEventListener("click", function() {
			loopStyle = 2;
		});
		mybtnRandom.addEventListener("click", function() {
			loopStyle = 3;
		})
		btnAddvolume.addEventListener("click", function() {
			volumAdd(element);
		})
		btnSubvolum.addEventListener("click", function() {
			volumeSub(element);
		})
	}

	init(myvideo, arrMusics[index])
		//本意为第一次播放设置标记，调试后发现不用
		//var firstPlay=true;

	var myIntervarId;

	function play(element) {

		var element = element;

		//		if(firstPlay){
		//			element.play();
		//			btnPlay.innerHTML = "暂停"
		//			firstPlay=false;
		//		}else{
		//以秒为单位，写在这里测试ended事件需要
		//		element.currentTime = 280;
		if(element.paused) {
			//替代上面的if判断，测试用
			//		if(true) {
			if(!myIntervarId) {
				myIntervarId = setInterval(coverprogress(element), 5);
			}

			console.log(element.duration);
			console.log(element.currentTime);
			element.play();
			btnPlay.innerHTML = "暂停";
		} else {
			element.pause();
			clearInterval(myIntervarId);
			//清除了也是保留数字的，所以要手动赋空
			//			alert(myIntervarId);
			myIntervarId = null;
			btnPlay.innerHTML = "开始";
			console.log(element.currentTime);

		}
		//		}
		initListBackground()
		changeBackground()

	}

	function btnBeforefun(e) {
		btnPlay.innerHTML = "暂停";
		if(index == 0) {
			index = length - 1;
			e.setAttribute("src", arrMusics[index])

			//			alert(length-1)
		} else {
			index--;
			e.setAttribute("src", arrMusics[index])
		}
		if(!myIntervarId) {
			myIntervarId = setInterval(coverprogress(e), 5);
		}
		e.play();
		initListBackground()
		changeBackground()
	}

	function btnnextfun(e) {
		btnPlay.innerHTML = "暂停";
		if(index == length - 1) {
			index = 0;
			e.setAttribute("src", arrMusics[index])

			//			alert(length-1)
		} else {
			index++;
			e.setAttribute("src", arrMusics[index])
		}
		if(!myIntervarId) {
			myIntervarId = setInterval(coverprogress(e), 5);
		}
		e.play();
		initListBackground()
		changeBackground()
	}
	//报错： "Uncaught IndexSizeError: Failed to execute 'end' on 'TimeRanges': The index provided (0) is greater than or equal to the maximum bound (0)."
	//		setInterval(myBuffer(myvideo), 50);

	function progress(e) {
		//播放进度
		var a = e.currentTime / e.duration * width;
		divIn.style.width = a + "px";
		//缓存进度，end（0），返回第一段缓冲段的结束位置时间
		var b = e.buffered.end(0) / e.duration * width;
		divBuffer.style.width = b + "px";
	}

	function coverprogress(e) {
		return function() {
			progress(e);
		}
	}

	function myBuffer(e) {
		return function() {
			var b = e.buffered.end(0) / e.duration * width;
			divBuffer.style.width = b + "px";
		}
	}

	//歌曲列表选中事件函数
	function listFun(e, ele) {
		console.log(ele.getAttribute("data-index"));
		index = parseInt(ele.getAttribute("data-index"));
		//		alert(index);
		btnPlay.innerHTML = "暂停";
		if(!myIntervarId) {
			myIntervarId = setInterval(coverprogress(e), 5);
		}
		e.setAttribute("src", arrMusics[index]);
		e.play();
		initListBackground();
		changeBackground(ele);
	}

	function initListBackground() {
		for(var i = 0; i < arrList.length; i++) {
			arrList[i].style.backgroundColor = "white";
		}
	}

	function changeBackground(e) {
		if(e) {
			e.style.backgroundColor = "gray";
		} else {
			arrList[index].style.backgroundColor = "gray";
		}

		//		ulList.style.marginTop=50-25*index+"px"
		divList.scrollTop = liWidth / 2 +liWidth * (index-2) ;

	}

	function spancTime() {
		if(myvideo.duration && myvideo.currentTime) {
			var a = parseInt(myvideo.currentTime);
			var b = parseInt(myvideo.duration);
			var a1 = parseInt(a / 60);
			var a2 = a % 60;
			var b1 = parseInt(b / 60);
			var b2 = b % 60;
			if(a1 < 10) {
				a1 = "0" + a1;
			}
			if(a2 < 10) {
				a2 = "0" + a2;
			}
			if(b1 < 10) {
				b1 = "0" + b1;
			}
			if(b2 < 10) {
				b2 = "0" + b2;
			}
			spanCurrent.innerText = a1 + "：" + a2;
			spanDuration.innerText = b1 + "：" + b2;
		}

	}

	function addrate(e) {
		e.playbackRate += 0.5;
	}

	function subtract(e) {
		if(e.playbackRate > 0.5) {
			e.playbackRate -= 0.5;
		}

		//火狐会报错，NS_ERROR_NOT_IMPLEMENTED: 
		//		e.playbackRate=-1;

	}
	//function() {
	//			btnPlay.innerHTML = "开始";
	//			//			clearInterval(myIntervarId);
	//			//			myIntervarId = null;
	//			//			alert("触发ended事件")
	//
	//		}
	function changeLoopStyle(e) {
		function mychange() {
			switch(loopStyle) {
				case 0:
					btnPlay.innerHTML = "开始";
					break;
				case 1:
					e.setAttribute("src", arrMusics[index]);
					e.play();
					break;
				case 2:
					if(index == arrMusics.length - 1) {
						index = 0;
					} else {
						index++;
					}
					e.setAttribute("src", arrMusics[index]);
					e.play();
					break;
				case 3:
					index = Math.floor(Math.random() * arrMusics.length);
					e.setAttribute("src", arrMusics[index]);
					e.play();
					break;

			}
			initListBackground();
			changeBackground();
		}
		//		alert(mychange)
		return mychange;
	}

	//读取歌词
	$(document).ready(function() {
		btnShowLrc.click(function() { //绑定事件
			htmlobj = $.ajax({
				//				url: "music/music/anlian-史红庆-20120521.lrc",
				url: "video/浮夸.lrc",
				async: false
			}); //获取music/music/anlian-史红庆-20120521.lrc内容并赋值
			//		$("#p_content").html(htmlobj.responseText); //替换标签内的html
			text = htmlobj.responseText;
			$("#p_content").html(text); //替换标签内的html

			//		parseLyric(text);
			setInterval(function() {
				myShowLrcFun(parseLyric(text));
			}, 50);
			myShowLrcFun(parseLyric(text));
		});
	});

	function parseLyric(text) {
		lyric = text.split(/[\n]/); //先按行分割
		var _l = lyric.length; //获取歌词行数
		console.log("_l: " + _l)
		lrc = new Array(); //新建一个数组存放最后结果
		for(i = 0; i < _l; i++) {
			var d = lyric[i].match(/\[\d{2}:\d{2}((\.|\:)\d{2})\]/g); //正则匹配播放时间
			console.log("d: " + d)
			var t = lyric[i].split(d); //以时间为分割点分割每行歌词，数组最后一个为歌词正文
			console.log("t: " + t[1])
			if(d != null) { //过滤掉空行等非歌词正文部分
				//换算时间，保留两位小数
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
			if(e[i][0] - myvideo.currentTime < 0.1) {
				console.log(myvideo.currentTime);
				//		alert("我是在显示歌词函数中的宝宝");
				$("#p_content").html(e[i][1]);
				console.log("e[i][1]" + e[i][1]);

			}
		}
	}

	//增减音量
	function volumAdd(e) {
		var vol = e.volume;
		if(vol < 0.95) {
			vol += 0.05;
		} else {
			vol = 1;
		}
		e.volume = vol;
		p_test.innerText=vol;
	}

	function volumeSub(e) {
		var vol = e.volume;
		if(vol > 0.05) {
			vol -= 0.05;
		} else {
			vol = 0;
		}
		e.volume = vol;
		p_test.innerText=vol;
	}

}