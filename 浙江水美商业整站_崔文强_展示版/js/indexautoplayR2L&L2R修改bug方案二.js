$(function() {
	/*本修改方案的思路是判断当前scrollLeft的值与单张图片的宽度的比值的整数部分是否变化，来确定点击事件是否响应*/
	//悬停放大效果
	var hoverbig = function() {
			var bgimgs = $("#autoplayR2L ul li a .ndiv img.bg");
//			var divin = $("#autoplayR2L ul li a .ndivn");
//改变触发效果的范围
			var divin = $("#autoplayR2L ul li");

//			console.log(divin[0]);
//			console.log(bgimgs[0]);
			divin.hover(function() {
				//					console.log(1);
				//这样写的效果不是圆心径向放大
				//						$(this).parent().find("img.bg").css({
				//							"left": "-10px",
				//							"top": "-10px"
				//						})
//				$(this).parent().find("img.bg").stop(true, false).animate({
	//改变触发效果的范围
				$(this).find("img.bg").stop(true, false).animate({
					'width': "170px",
					"height": "170px",
					"left": "-10px",
					"top": "-10px"
				}, 500);
				$(this).find("span").stop(true, false).animate({
					"font-size": "20px"
				}, 500);
				$(this).find("b").stop(true, false).animate({
					"font-size": "16px"
				}, 500)
			}, function() {
				//					console.log(2);
				//						$(this).parent().find("img.bg").css({
				//							"left": "0px",
				//							"top": "0px"
				//						})
//				$(this).parent().find("img.bg").stop(true, false).animate({
				$(this).find("img.bg").stop(true, false).animate({
					'width': "150px",
					"height": "150px",
					"left": "0px",
					"top": "0px"
				}, 500);
				$(this).find("span").stop(true, false).animate({
					"font-size": "16px"
				}, 500);
				$(this).find("b").stop(true, false).animate({
					"font-size": "12px"
				}, 500)
			});
		}
		//启动效果，绑定函数
	hoverbig();
	//轮播效果
	function ScrollR2L(outdiv, indiv, btnleft, btnright) {
		//该函数实现无缝轮播,需要轮播的图片需要设置两遍
		/*
		 
		 * indivwidth：内部每次轮播图片的outerWidth（）包含border和padding
		 * ID：定时器的id
		 * total：需要轮播的图片数量，因为我们是放了两倍的图片的，所以有/2
		 * showNum：父级方框可以显示的图片数量
		 * scroll：父级方框的scrollLeft的数值
		 * maxScroll：父级scrollLeft的最大值，在后面应用的时候会发现我减去了1/2的indivwidth
		 * that：主函数的this指针，让内部的函数可以调用that.声明的函数，在本例中是that.running()
		 * delay：调用定时器的间隔时间，表现在显示上就是动画完成后的静止时间
		 * duration：动画的间隔时间
		 * */
		var indivwidth = indiv.outerWidth();
		var ID = null;
		var total = indiv.length / 2;
		var showNum = 4;
		var scroll = 0;
		var maxScroll = (total - 0) * indivwidth;
		var that = this;
		var delay = 4000;
		var duration = 1000;
		
		
		//修改bug所添加变量
		var currentscroll=null;//不一定会使用
		//启动函数
		that.running = function() {
				if(ID) {

				} else {
					ID = setInterval(step(outdiv), delay);
				}
			}
			//步进函数，定时器调用的函数
		function step(e) {
			return function() {
//				console.log("我在跑，哈哈哈哈哈哈！")
				if(scroll < 0) {

				} else {
					scroll = e.scrollLeft();
				}
				//这里减去indivwidth/2是为了消除最后一次之后还移动一点才跳转的bug
				if(scroll < maxScroll - indivwidth / 2) {
					//正常轮播逻辑区
					scroll += indivwidth;
					//								e.stop(true, false).animate({
					//									scrollLeft: scroll + "px"
					//								}, duration);
					e.stop(true, true).animate({
						scrollLeft: scroll + "px"
					}, duration);
				} else {
					//scrollLeft突变及处理第一次动画代码区
					//设scroll为0，在这里其实效果效果和设为其他大于0的数值是一样的，因为在下一次step函数触发时，会重新获取outdiv的当前scrollLeft值来覆盖掉这里的值
					scroll = 0;
					//初始化位置
					e.scrollLeft(0);
					//上下两句效果一样
					//								e.stop(true, false).animate({
					//									scrollLeft: scroll + "px"
					//								}, 0);
					//为了不出现每次初始化图片位置后第一次轮播的静止时间是其他的两倍的问题，这里手动一次动画效果
					//								e.stop(true, false).animate({
					//									scrollLeft: indivwidth + "px"
					//								}, duration);
					/*
					 
					 * 这里修改代码的原因是，stop()的第二个参数设置为false会立即停止当前执行动画，这个效果在自动轮播时没有关系，但是，影响到后面的按钮click模块的设计
					 * 其他地方也一样
					 * */
					e.stop(true, true).animate({
						scrollLeft: indivwidth + "px"
					}, duration);
					//这里把scroll设为indivwidth，是为了左右按钮的功能做准备，这样一来，scroll的值在任何时候都与outdiv的当前值或动画的目标值一致了，
					//其实可以在上面赋值为0的时候就给scroll设此值，这样代码更有效，练习代码就不改了
					scroll = indivwidth;
				}

//				console.log(scroll)
					//						e.scrollLeft()

			}

		}
		//悬停暂停,移走继续轮播的效果
		indiv.hover(function() {
			if(ID) {
				clearInterval(ID);
				ID = null;
			}
		}, function() {
			that.running();
			//						this.running();//由于this的超延时绑定,这里的this不是父级函数的this,所以用主函数中的that
		})

		//左右按钮功能
		//从控制台输出可以看到，该函数的scroll变量在0-622之间缺失一个311，其余全部显示，原因就在与处理返回后重新循环的逻辑区的代码造成
		//左点击按钮，因为step的逻辑是向左的，所以这里可以复用
		//fuck：查看功能网页发现要求左右按钮的功能居然是相反的。。。。。好吧，调整调用主体就好
		btnright.click(function() {
			var currentscrollLeft = outdiv.scrollLeft();
			if(ID) {
				clearInterval(ID);
				ID = null;
				left();
				//用延时器来启动定时器是为了给让动画走完，走完后启动定时器，重新给ID赋值，不写下面这句，左点击按钮只有第一次有效。
				setTimeout(that.running, 1000);
			} else {
				that.running();
			}

		})

		function left() {
			step(outdiv)();
		}
		//右点击按钮功能区：主体反转了，不过不影响功能函数的实现
		btnleft.click(function() {
				var currentscrollLeft = outdiv.scrollLeft();
				if(ID) {
					clearInterval(ID);
					ID = null;

					right(outdiv);

					setTimeout(that.running, 1000);
				} else {
					that.running();
				}
			})
			//可以看出，反向轮播区的函数和正向的函数逻辑一致，代码重复率高，如果有需要，可以优化合并两个函数
		function right(e) {
			//当不需要重新定位图片的简单情况
			if(scroll >= 311) {
				scroll -= indivwidth;
				e.stop(true, true).animate({
					scrollLeft: scroll + "px"
				}, duration);
			} else {
				funL2R();
			}
			//当scroll已经为0时，需要重新定位图片，其实也就是写一个手动的与自动反向的轮播，定义功能函数funL2R

			function funL2R() {
				//注意<=号中间不能有空格，否则报错
				if(scroll <= 0) {
					scroll = total * indivwidth;
					e.scrollLeft(scroll);
					e.stop(true, true).animate({
						scrollLeft: scroll - indivwidth + "px"
					}, duration);
					scroll = scroll - indivwidth;
				} else {
					//								scroll += indivwidth;
					//								e.stop(true, true).animate({
					//									scrollLeft: scroll + "px"
					//								}, duration);
				}
			}

		}
	}
	var myScrollR2L = new ScrollR2L($("#autoplayR2L").eq(0), $('#autoplayR2L ul li'), $("#autoplayR2LOut>img:first-child"), $("#autoplayR2LOut>img.lastchild"));
	myScrollR2L.running();
})