window.onload = function() {
	var div_header = document.getElementById("div_header");
	var div_header_p = div_header.getElementsByTagName("p")[0];
	//头部月亮背景移动
	var moonX = 0
	var vx = 1;

	function movemoon(x) {
		div_header_p.style.backgroundPositionX = x + "%";
		if(x >= 100 && vx > 0) {
			vx *= -1;
		} else if(x <= 0 && vx < 0) {
			vx *= -1;
		}
		x += vx;
		moonX = x;
	}
	setInterval(function() {
		movemoon(moonX)
	}, 50);
	//div_header_p.style.backgroundPositionX="100%";
	//文字闪动
	var dimradius = 0;
	var dimV = 1;

	function blingText() {
		if(dimradius >= 8 && dimV > 0) {
			dimV *= -1;
		} else if(dimradius <= -2 && dimV < 0) {
			dimV *= -1;
		}
		dimradius += dimV;
		div_header_p.style.textShadow = "0 0 " + dimradius + "px rgba(255, 255, 255, .8)";
	}
	setInterval(blingText, 200);
	//canvas
	var mycanvas = document.getElementById("myCanvas");
	var mycanvasX = mycanvas.offsetLeft;
	var mycanvasY = mycanvas.offsetHeight;
	var ctx = mycanvas.getContext("2d");
	//	console.log(ctx);
	function getImg(myurl) {
		var img = new Image();
		img.src = myurl;
		//		img.onload = function() {
		//			ctx.drawImage(img, 0, 0);
		//		}
		return img;
	}

	function addImg(url1, x, y, width, height) {
		ctx.drawImage(getImg(url1), x, y, width, height)
	}
	//	for(var i = 0; i < 6; i++) {
	//		addflower(arrflowers[0], 50, 50, i * 5);
	//	}
	//	
	//	var img2 = new Image();
	//	
	//	//当我们采用相对路径的时候，在css和js中引用图片的相对路径的基准是不一样的。
	////	在css中出现的相对路径，是以css文件所在路径为基准的，而js中的路径则是以导入此js的网页文件所在的位置为基准的。
	//		img2.src = "img/22014087_115945669000_1.jpg";
	//		img2.onload=function(){
	//			ctx.drawImage(img2,0,0);
	//		}
	var canvasRect = mycanvas.getBoundingClientRect()

	function drawText(msg, offX) {
		//画布宽度1000px/字数16=62px
		ctx.font = "62px 楷体"
		ctx.strokeStyle = "antiquewhite"
//					ctx.strokeText(msg, parseInt(canvasRect.width * 0.05 + offX), parseInt(canvasRect.height * 0.5))
			//用上面那句无法将文字居中，而下面这句可以实现想要的效果
		ctx.strokeText(msg, parseInt(mycanvas.width * 0.05 + offX), parseInt(mycanvas.height * 0.5))
	}
	var arrText = ["恭", "祝", "大", "家", "，", "2", "0", "1", "6", "年", "中", "秋", "节", "快", "乐", "！"];
	var showText = "";

	function init() {
		canvasRect = mycanvas.getBoundingClientRect();
		//清除
		//		ctx.clearRect(0,0,canvasRect.width, canvasRect.height)
		ctx.clearRect(0, 0, 1000, 1000)
			//		背景

		//		var a=Number(document.getElementById("body").style.width);//0
		var a = window.innerWidth * 0.66;
		var b = window.innerHeight * 0.5;
		console.log(a);

		//这里不包裹parseInt会出现问题
		//			width: 66%;
		//	height: 50%;
		//		addImg("img/u=2387415342,2374494057&fm=21&gp=0.jpg", 0, 0,parseInt(canvasRect.width), parseInt(canvasRect.height));
		//		addImg("img/u=2387415342,2374494057&fm=21&gp=0.jpg", 0, 0, a, b);
		var c = canvasRect.right - canvasRect.left;
		var d = canvasRect.bottom - canvasRect.top;
		console.log(window.innerHeight * 0.5 + "*************************" + canvasRect.height + "————————————————" + d);
//				addImg("img/u=2387415342,2374494057&fm=21&gp=0.jpg", 0, 0, c, d);

		//这里canvas画背景用canvas的height和width属性，符合预期，虽然输出的时候它的值用于是300*150是不变的。
		addImg("img/u=2387415342,2374494057&fm=21&gp=0.jpg", 0, 0, mycanvas.width, mycanvas.height);
		//		for(var i = 0; i < arrText.length; i++) {
		//			
		//			showText+=arrText[i];
		//			var msg=arrText[i];
		//			var offx=i*22;
		//			setTimeout(function(){
		//				drawText(msg,offx);
		//			},i*50);
		//		}
		drawText(showText, 0);

	}
	var k = 0;

	function updata() {
		init();
		if(k < arrText.length) {
			showText += arrText[k];
			k++;
		} else {
			showText = "";
			k = 0;
		}
		//		drawFlower();
	}
	//要获取canvas的宽高需要使用getBoundingClientRect，因为未在html中定义宽高，所以这里直接获取的宽高属性值是默认的300和150
	console.log("mycanvas.width：" + mycanvas.width + "     " + canvasRect.width);
	console.log("mycanvas。height：" + mycanvas.height + "    " + canvasRect.height);

	var arrflowers = ["img/烟花1.png", "img/烟花2.png", "img/烟花3.png", "img/烟花4.png"]
	var obj = [];
	//烟花
	function addflower(url, x, y, r) {
		var flower = {
			"url": url,
			"x": x,
			"y": y,
			"width": r
		}
		obj.push(flower);
	}

	function drawFlower(obj) {

		for(var i = 0; i < obj.length; i++) {
			var obj1 = obj;
			ctx.drawImage(getImg(obj1[i].url), obj1[i].x, obj1[i].y, obj1[i].width, obj1[i].width);
		}
	}
	//这里直接画图片会画不出来，因为图片还未加载成功
	//	init();

	//	setInterval(init, 500);
	setInterval(updata, 500);
	//init();

}