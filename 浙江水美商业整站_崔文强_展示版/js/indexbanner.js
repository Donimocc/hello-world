$(function() {
	function Banner() {
		var imgs = $("#banner>.firstChild>li"),
			pts = $("#banner>.lastchild>li>a>img"),
			len = imgs.length,
			ID = null,
			index = 0;
		var that = this,
			firstclick = true;
		//启动定时器
		that.running = function() {
			ID = setInterval(that.changeimg(imgs, pts), 4000);
		};
		//切换大小图
		that.changeimg = function(e, p) {

				return function() {
					initanimate();
					index++;
					if(index == len) {
						index = 0;
					}
					e.css("z-index", "-1");
					e.eq(index).css("z-index", "2");
					p.attr("src", "img/Whitehuan.png");
					p.eq(index).attr("src", "img/Bluehuan.png");
					//加动画
					leftin();
					scalein();
					topin();
				}

			}
			//圆点点击
		pts.click(function() {
				initanimate();
				if(ID) {
					clearInterval(ID);
					ID = null;
				}
				index = $(this).parent().parent().index();
//				console.log(index);
				switch(index) {
					case 0:
						leftin();
						break;
					case 1:
						scalein();
						break;
					case 2:
						topin();
						break;
				}
				pts.attr("src", "img/Whitehuan.png");
				$(this).attr("src", "img/Bluehuan.png");
				imgs.css("z-index", "-1");
				imgs.eq(index).css("z-index", "2");
				//解决第一次轮播，第一张直接跳第三张的bug
				if(firstclick) {
					firstclick = false;
				} else {
					that.running();
				}

			})
			//飞入，缩放动画
		var animate = $(".animate");

		function initanimate() {
			animate.eq(0).css('left', '-638px');
			animate.eq(1).css('width', '0px');
			animate.eq(2).css('top', '-200px')
		}

		function leftin() {
			animate.eq(0).animate({
				'left': "25%"
			}, 1000)
		}
		//刷新页面时的第一次动画效果
		pts.eq(0).trigger("click");

		function scalein() {
			animate.eq(1).animate({
				'width': "500px"
			}, 1000)
		}

		function topin() {
			animate.eq(2).animate({
				'top': "200px"
			}, 1000)
		}
	}
	var mybanner = new Banner();
	mybanner.running();

})