var str_turn = [
	"img/我的少女.jpg",
	"img/电视.jpg",
	"img/口红.jpg",
	"img/汽车.jpg",
	"img/TB1mwBZLXXXXXXhaXXXSutbFXXX.jpg_q100.jpg",
	"img/TB1XrafLXXXXXccXFXXSutbFXXX.jpg_q100.jpg",
];
var str_dirc = ["img/下载 (3).png", "img/下载 (5).png"];
var myImage = document.getElementById("img_body");
var imgDirc = document.getElementsByClassName("img_dirc");

var count_out = 100;

function fadeOut() {
	if(count_out >= 0) {
		myImage.style.opacity = count_out / 100;
		count_out -= 10;
		timeOutId_fadeOut = setTimeout("fadeOut()", 5);
	}

}

var count_in = 0;

function fadeIn() {
	if(count_in <= 100) {
		myImage.style.opacity = count_in / 100;
		count_in += 10;
		timeOutId_fadeIn = setTimeout("fadeIn()", 100);
	}

}
//fadeIn();
//fadeOut();
var img_number = 1;
var flag = 0;

function subTurn() {
	imgDirc[img_number].src = str_dirc[1];
	imgDirc[img_number - 1].src = "img/下载 (3).png";
	myImage.src = str_turn[img_number];
}
//fadeout和fadein是同时作用于对象的，会产生抖动的现象，所以我把fadeout的时间设置得很小。
function turn() {
	if(flag == 0) {
		//加入存在抖动
		//		count_out = 100;
		//		fadeOut();
		switch(img_number) {
			case 0:

				imgDirc[img_number].src = str_dirc[1];
				imgDirc[5].src = str_dirc[0];
				myImage.src = str_turn[img_number];

				break;
			case 1:
				subTurn();
				break;
			case 2:
				subTurn();
				break;
			case 3:
				subTurn();
				break;
			case 4:
				subTurn();
				break;
			case 5:
				subTurn();
				break;
		}
		count_in = 0;
		fadeIn();
		if(img_number < 5) {
			img_number++;
		} else {
			img_number = 0;
		}

	}
	//	setTimeoutid_turn=setTimeout("turn()",5000);
}
//var flag=0;
//function run(){
//	if(flag==0){
//		setIntervalId=setInterval(turn,5000);
//	}
//	
//}
//run();
mysetIntervalId = setInterval(turn, 3000);
aimg = document.getElementById("a_body");
aimg.onmouseover = function() {
	clearInterval(mysetIntervalId);
	//	flag=100;
}
aimg.onmouseout = function() {
	mysetIntervalId = setInterval(turn, 3000);
}

float_right = document.getElementById("div_right_absolute");
float_rights = document.getElementsByClassName("float_right");
float_right.onmouseover = function() {
	float_right.style.backgroundColor = "#222222";
	for(var i = 0; i < float_rights.length; i++) {
		float_rights[i].style.backgroundColor = "#222222";
	}
}

float_right.onmouseout = function() {
	float_right.style.backgroundColor = "rgb(116,116,116)";
	for(var i = 0; i < float_rights.length; i++) {
		float_rights[i].style.backgroundColor = "rgb(116,116,116)";
	}
	var temp = document.getElementsByClassName("recommend");
	temp[0].style.backgroundColor = "rgb(99,99,99)";
}

//小圆点跳转
//function subTurn() {
//	imgDirc[img_number].src = str_dirc[1];
//	imgDirc[img_number-1].src = "img/下载 (3).png";
//	myImage.src = str_turn[img_number];
//}
function clear_dirc() {
	for(var i = 0; i < imgDirc.length; i++) {
		imgDirc[i].src = str_dirc[0];
	}
}
var a_dirc = document.getElementsByClassName("a_dirc");
var index = [0, 1, 2, 3, 4, 5];
//for (var i = 0; i < a_dirc.length; i++) {
//a_dirc[0].onmouseover = function() {
//		if(index[1] == img_number) {
//
//		} else {
//			imgDirc[img_number - 1].src = str_dirc[0];
//			img_number = index[0];
//			clearInterval(mysetIntervalId);
//			imgDirc[img_number].src = str_dirc[1];
//			myImage.src = str_turn[img_number];
//			count_in = 0;
//			fadeIn();
//			img_number++;
//			mysetIntervalId = setInterval(turn, 5000);
//		}
//
//	}
//	//}
//a_dirc[1].onmouseover = function() {
//		if(index[2] == img_number) {
//
//		} else {
//			imgDirc[img_number - 1].src = str_dirc[0];
//			img_number = index[1];
//			clearInterval(mysetIntervalId);
//			imgDirc[img_number].src = str_dirc[1];
//			myImage.src = str_turn[img_number];
//			count_in = 0;
//			fadeIn();
//			img_number++;
//			mysetIntervalId = setInterval(turn, 5000);
//		}
//
//	}
a_dirc[0].onmouseover = function() {
	if(img_number == 1) {

	} else {
		clear_dirc();
		imgDirc[0].src = str_dirc[1];
		myImage.src = str_turn[0];
		count_in = 0;
		fadeIn();
		img_number = 1;
	}

}
a_dirc[1].onmouseover = function() {
	if(img_number == 2) {

	} else {
		clear_dirc();
		imgDirc[1].src = str_dirc[1];
		myImage.src = str_turn[1];
		count_in = 0;
		fadeIn();
		img_number = 2;
	}

}
a_dirc[2].onmouseover = function() {
	if(img_number == 3) {

	} else {
		clear_dirc();
		imgDirc[2].src = str_dirc[1];
		myImage.src = str_turn[2];
		count_in = 0;
		fadeIn();
		img_number = 3;
	}

}
a_dirc[3].onmouseover = function() {
	if(img_number == 4) {

	} else {
		clear_dirc();
		imgDirc[3].src = str_dirc[1];
		myImage.src = str_turn[3];
		count_in = 0;
		fadeIn();
		img_number = 4;
	}

}
a_dirc[4].onmouseover = function() {
	if(img_number == 5) {

	} else {
		clear_dirc();
		imgDirc[4].src = str_dirc[1];
		myImage.src = str_turn[4];
		count_in = 0;
		fadeIn();
		img_number = 5;
	}

}
a_dirc[5].onmouseover = function() {
	if(img_number == 0) {

	} else {
		clear_dirc();
		imgDirc[5].src = str_dirc[1];
		myImage.src = str_turn[5];
		count_in = 0;
		fadeIn();
		img_number = 0;
	}

}

//猫耳朵
//var mycanvas1 = document.getElementById("mycanvas1");
////console.log(mycanvas1);
//var ctx1 = mycanvas1.getContext("2d");
var myimg = new Image();
myimg.src = "img/下载 (1).png";
//myimg.onload=function(){
//ctx1.drawImage(myimg,0,0,300,100);
//	
//}
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var nav4 = document.getElementById("nav4");
var nav5 = document.getElementById("nav5");
var nav6 = document.getElementById("nav6");
var nav7 = document.getElementById("nav7");
var nav8 = document.getElementById("nav8");
var nav9 = document.getElementById("nav9");
var nav10 = document.getElementById("nav10");

var ctx1 = document.getElementById("mycanvas1").getContext("2d");
var ctx2 = document.getElementById("mycanvas2").getContext("2d");
var ctx3 = document.getElementById("mycanvas3").getContext("2d");
var ctx4 = document.getElementById("mycanvas4").getContext("2d");
var ctx5 = document.getElementById("mycanvas5").getContext("2d");
var ctx6 = document.getElementById("mycanvas6").getContext("2d");
var ctx7 = document.getElementById("mycanvas7").getContext("2d");
var ctx8 = document.getElementById("mycanvas8").getContext("2d");
var ctx9 = document.getElementById("mycanvas9").getContext("2d");
var ctx10 = document.getElementById("mycanvas10").getContext("2d");
var y_index=100;
//function draw() {
//	if(y_index>0){
//		ctx1.drawImage(myimg,0,y_index,300,100);
//	}
//		y_index--;
//}
function move(obj){
	obj.globalCompositeOperation = "copy";
//	switch(i){
//		case 1:
//		miaoInterval=setIntervalsetInterval("draw()",2)
//		
//	}
if(y_index>0){
	obj.drawImage(myimg,0,y_index,300,100);
	y_index--;
}	
}
function moveout(obj){
	obj.clearRect(0,0,300,100);
	clearInterval(miaoIntervalId);
	y_index=100;
}
nav1.onmouseover = function() {
	//	ctx1.clearRect(0,0,1000,1000);
	//	ctx1.save();
//	ctx1.globalCompositeOperation = "copy";
	miaoIntervalId=setInterval("move(ctx1)",2)
	
}
nav1.onmouseout=function(){
	moveout(ctx1);
}
nav2.onmouseover = function() {
	miaoIntervalId=setInterval("move(ctx2)",2)	
}
nav2.onmouseout=function(){
	moveout(ctx2);
}
nav3.onmouseover = function() {
	miaoIntervalId=setInterval("move(ctx3)",2)	
}
nav3.onmouseout=function(){
	moveout(ctx3);
}
nav4.onmouseover = function() {
	miaoIntervalId=setInterval("move(ctx4)",2)	
}
nav4.onmouseout=function(){
	moveout(ctx4);
}
nav5.onmouseover = function() {
	miaoIntervalId=setInterval("move(ctx5)",2)	
}
nav5.onmouseout=function(){
	moveout(ctx5);
}
nav6.onmouseover = function() {
	miaoIntervalId=setInterval("move(ctx6)",2)	
}
nav6.onmouseout=function(){
	moveout(ctx6);
}
nav7.onmouseover = function() {
	miaoIntervalId=setInterval("move(ctx7)",2)	
}
nav7.onmouseout=function(){
	moveout(ctx7);
}
nav8.onmouseover = function() {
	miaoIntervalId=setInterval("move(ctx8)",2)	
}
nav8.onmouseout=function(){
	moveout(ctx8);
}
nav9.onmouseover = function() {
	miaoIntervalId=setInterval("move(ctx9)",2)	
}
nav9.onmouseout=function(){
	moveout(ctx9);
}
nav10.onmouseover = function() {
	miaoIntervalId=setInterval("move(ctx10)",2)	
}
nav10.onmouseout=function(){
	moveout(ctx10);
}
//ctx1.fillStyle="red";
//ctx1.fillRect(0,0,50,50);
//taobao展开栏
var taobao=document.getElementById("taobao");
var taobao_list=document.getElementById("mytaobao");
taobao.onmouseover=function(){
	taobao_list.style.display="block";
}
taobao.onmouseout=function(){
	taobao_list.style.display="none";
}
taobao_list.onmouseover=function(){
	taobao_list.style.display="block";
}
taobao_list.onmouseout=function(){
	taobao_list.style.display="none";
}
//收藏夹展开栏
var favorite=document.getElementById("favorite");
var favorite_list=document.getElementById("favoriteBox");
favorite.onmouseover=function(){
	favorite_list.style.display="block";
}
favorite.onmouseout=function(){
	favorite_list.style.display="none";
}
favorite_list.onmouseover=function(){
	favorite_list.style.display="block";
}
favorite_list.onmouseout=function(){
	favorite_list.style.display="none";
}

//手机版二维码显示
var mobileImg=document.getElementById("img_mobile");
var mobile=document.getElementById("a_mobile");
mobile.onmouseover=function(){
	mobileImg.style.display="block";
}
mobile.onmouseout=function(){
	mobileImg.style.display="none";
}
mobileImg.onmouseover=function(){
	mobileImg.style.display="block";
}
mobileImg.onmouseout=function(){
	mobileImg.style.display="none";
}

//网站导航展开栏
var webNavigation=document.getElementById("a_navigation");
var webNavigation_list=document.getElementById("img_navigation");
webNavigation.onmouseover=function(){
	webNavigation_list.style.display="block";
}
webNavigation.onmouseout=function(){
	webNavigation_list.style.display="none";
}
webNavigation_list.onmouseover=function(){
	webNavigation_list.style.display="block";
}
webNavigation_list.onmouseout=function(){
	webNavigation_list.style.display="none";
}

//商家支持展开栏
var businesssupport=document.getElementById("a_businessSupport");
var businesssupport_list=document.getElementById("tb_business");
businesssupport.onmouseover=function(){
	businesssupport_list.style.display="block";
}
businesssupport.onmouseout=function(){
	businesssupport_list.style.display="none";
}
businesssupport_list.onmouseover=function(){
	businesssupport_list.style.display="block";
}
businesssupport_list.onmouseout=function(){
	businesssupport_list.style.display="none";
}

//左边栏展开图效果
var woman=document.getElementById("woman");
var woman_list=document.getElementById("img_womanList");
woman.onmouseover=function(){
	woman_list.style.display="block";
}
woman.onmouseout=function(){
	woman_list.style.display="none";
}
woman_list.onmouseover=function(){
	woman_list.style.display="block";
}
woman_list.onmouseout=function(){
	woman_list.style.display="none";
}


var man=document.getElementById("man");
var man_list=document.getElementById("img_manList");
man.onmouseover=function(){
	man_list.style.display="block";
}
man.onmouseout=function(){
	man_list.style.display="none";
}
man_list.onmouseover=function(){
	man_list.style.display="block";
}
man_list.onmouseout=function(){
	man_list.style.display="none";
}


var shoe=document.getElementById("bag");
var shoes_list=document.getElementById("img_shoesList");
shoe.onmouseover=function(){
	shoes_list.style.display="block";
}
shoe.onmouseout=function(){
	shoes_list.style.display="none";
}
shoes_list.onmouseover=function(){
	shoes_list.style.display="block";
}
shoes_list.onmouseout=function(){
	shoes_list.style.display="none";
}


var makeup=document.getElementById("makeup");
var makeup_list=document.getElementById("img_makeupList");
makeup.onmouseover=function(){
	makeup_list.style.display="block";
}
makeup.onmouseout=function(){
	makeup_list.style.display="none";
}
makeup_list.onmouseover=function(){
	makeup_list.style.display="block";
}
makeup_list.onmouseout=function(){
	makeup_list.style.display="none";
}



var watch=document.getElementById("watch");
var watch_list=document.getElementById("img_watchList");
watch.onmouseover=function(){
	watch_list.style.display="block";
}
watch.onmouseout=function(){
	watch_list.style.display="none";
}
watch_list.onmouseover=function(){
	watch_list.style.display="block";
}
watch_list.onmouseout=function(){
	watch_list.style.display="none";
}


var computer=document.getElementById("computer");
var computer_list=document.getElementById("img_computerList");
computer.onmouseover=function(){
	computer_list.style.display="block";
}
computer.onmouseout=function(){
	computer_list.style.display="none";
}
computer_list.onmouseover=function(){
	computer_list.style.display="block";
}
computer_list.onmouseout=function(){
	computer_list.style.display="none";
}


var baby=document.getElementById("baby");
var baby_list=document.getElementById("img_babyList");
baby.onmouseover=function(){
	baby_list.style.display="block";
}
baby.onmouseout=function(){
	baby_list.style.display="none";
}
baby_list.onmouseover=function(){
	baby_list.style.display="block";
}
baby_list.onmouseout=function(){
	baby_list.style.display="none";
}


var food=document.getElementById("food");
var food_list=document.getElementById("img_foodList");
food.onmouseover=function(){
	food_list.style.display="block";
}
food.onmouseout=function(){
	food_list.style.display="none";
}
food_list.onmouseover=function(){
	food_list.style.display="block";
}
food_list.onmouseout=function(){
	food_list.style.display="none";
}


var fresh=document.getElementById("fresh");
var fresh_list=document.getElementById("img_freshList");
fresh.onmouseover=function(){
	fresh_list.style.display="block";
}
fresh.onmouseout=function(){
	fresh_list.style.display="none";
}
fresh_list.onmouseover=function(){
	fresh_list.style.display="block";
}
fresh_list.onmouseout=function(){
	fresh_list.style.display="none";
}


var electric=document.getElementById("electric");
var electric_list=document.getElementById("img_electricList");
electric.onmouseover=function(){
	electric_list.style.display="block";
}
electric.onmouseout=function(){
	electric_list.style.display="none";
}
electric_list.onmouseover=function(){
	electric_list.style.display="block";
}
electric_list.onmouseout=function(){
	electric_list.style.display="none";
}


var furniture=document.getElementById("furniture");
var furniture_list=document.getElementById("img_furnitureList");
furniture.onmouseover=function(){
	furniture_list.style.display="block";
}
furniture.onmouseout=function(){
	furniture_list.style.display="none";
}
furniture_list.onmouseover=function(){
	furniture_list.style.display="block";
}
furniture_list.onmouseout=function(){
	furniture_list.style.display="none";
}


var car=document.getElementById("car");
var car_list=document.getElementById("img_carList");
car.onmouseover=function(){
	car_list.style.display="block";
}
car.onmouseout=function(){
	car_list.style.display="none";
}
car_list.onmouseover=function(){
	car_list.style.display="block";
}
car_list.onmouseout=function(){
	car_list.style.display="none";
}


var flower=document.getElementById("flower");
var flower_list=document.getElementById("img_flowerList");
flower.onmouseover=function(){
	flower_list.style.display="block";
}
flower.onmouseout=function(){
	flower_list.style.display="none";
}
flower_list.onmouseover=function(){
	flower_list.style.display="block";
}
flower_list.onmouseout=function(){
	flower_list.style.display="none";
}



var medicine=document.getElementById("medicine");
var medicine_list=document.getElementById("img_medisineList");
medicine.onmouseover=function(){
	medicine_list.style.display="block";
}
medicine.onmouseout=function(){
	medicine_list.style.display="none";
}
medicine_list.onmouseover=function(){
	medicine_list.style.display="block";
}
medicine_list.onmouseout=function(){
	medicine_list.style.display="none";
}



var cook=document.getElementById("cooking");
var cook_list=document.getElementById("img_cookList");
cook.onmouseover=function(){
	cook_list.style.display="block";
}
cook.onmouseout=function(){
	cook_list.style.display="none";
}
cook_list.onmouseover=function(){
	cook_list.style.display="block";
}
cook_list.onmouseout=function(){
	cook_list.style.display="none";
}



var book=document.getElementById("book");
var book_list=document.getElementById("img_bookList");
book.onmouseover=function(){
	book_list.style.display="block";
}
book.onmouseout=function(){
	book_list.style.display="none";
}
book_list.onmouseover=function(){
	book_list.style.display="block";
}
book_list.onmouseout=function(){
	book_list.style.display="none";
}