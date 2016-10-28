$(function() {
				function Header() {
					var nav1li = $("#header_in>ul>li");
					var nav2div = $(".nav2");
					var nav2text = $(".nav2_in_left>li>a");
					var nav2rightul = $(".nav2_in_right");
					var nav2right = $(".nav2_in_right>li");
					//先隐藏2级以下菜单
					function hideNav(e) {
						e.css("display", "none");
					}
					hideNav(nav2div);
					//会出现闪烁问题，尝试使用stop方法解决，测试发现，stop会引发另一个Bug，隐藏到一半再放上去就保持当时的状态，加入两个参数，解决这个问题
					function showNav2Handler(e) {
						e.children(".nav2").stop(true, true).fadeIn();
					}

					function hideNav2Handler(e) {
						e.children(".nav2").stop(true, true).fadeOut();
					}
					//淡入淡出二级导航
					nav1li.hover(function() {
							showNav2Handler($(this));
						}, function() {
							hideNav2Handler($(this));
						})
						//一级导航栏下划线        注意设置data-long属性
						//初始化下划线,用循环适应所有页面，在一级导航的a标签中加入 data-long属性的下划线一直存在
					var nav1li = $("#header_in>ul>li");
					nav1li.children("a").css("border-color", "white");
					for(var i = 0; i < nav1li.length; i++) {
						if(nav1li.eq(i).children("a").attr("data-long")) {
							nav1li.eq(i).children("a").css("border-color", "rgb(4,89,155)");
						}
					}

					$("#header_in>ul>li").hover(function() {
							$(this).children("a").css("border-color", "rgb(4,89,155)");
						}, function() {
							if($(this).children("a").attr("data-long")) {

							} else {
								$(this).children("a").css("border-color", "white");
							}

						})
						//切换3级导航
					function changeNav3handler(e) {
						var i = e.index();
						//						console.log(i);
						//						var b=e.attr("data-rightNum");
						//						nav2right.css("display", "none").eq(i).css("display", "block");
						//修改是为了不用多写代码，一套代码用所有页面
						e.parent().parent().children(".nav2_in_right").children("li").css("display", "none").eq(i).css("display", "block");
//						console.log(e.parent().children(".nav2_in_right").children("li"))
					}

					function changeColor(e) {
						e.css({
							"color": "rgb(4,89,155)",
							"background-color": "white"
						})

					}
					//初始化3级导航栏

					function initNav3(e) {
						e.children("li").css("display", "none").eq(0).css("display", "block");

					}

					//initNav3(nav2rightul);//这样只初始化第一个，需要用for循环，初始化每一个3级导航栏
					for(var i = 0; i < nav2rightul.length; i++) {
						initNav3(nav2rightul.eq(i));
					}

					//2-3级菜单栏悬浮效果
					nav2text.hover(function() {
						nav2text.css({
							"color": "white",
							"background-color": "rgb(4,89,155)"
						})
						changeColor($(this));
						changeNav3handler($(this).parent());
					}, function() {

					})
				}
				var myheader = new Header();
			})