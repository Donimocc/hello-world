$(function() {
	var out = $("#scrollB2T");
	var indiv = $("#in");
	var ul1 = $("#ul1");
	var texta=$("#scrollB2T ul li>a")

	function Marquee(outdiv, indiv,text) {
		var ID = null;
		var that=this;
		//启动接口
		this.running = function() {
			ID = setInterval(move(outdiv, indiv), 50)
		}

		function move(e, b) {
			return function() {
				//js方式
				//							var a = e[0].scrollTop;
				//jquery
				var a = e.scrollTop();
				parseInt(a);
				if(a <= indiv.outerHeight()) {
					//							console.log(a);
					//console.log(indiv.outerHeight()+"***************")
					a++;
					//								console.log(a);
				}
				if(a > indiv.outerHeight()) {
					a = 0;
				}
				e.scrollTop(a);
			}

		}
		text.hover(function(){
			if(ID){
				clearInterval(ID);
				ID=null;
			}
		},function(){
			if(!ID){
				that.running();
			}
			
		})
		

	}

	var mymarquee = new Marquee(out, ul1,texta);
	mymarquee.running();
})