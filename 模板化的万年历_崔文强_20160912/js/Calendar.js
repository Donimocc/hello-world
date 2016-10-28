window.onload = function() {

	var Calendar = {
		init: function(id) {
			var _divContent = document.getElementById(id);
			_divContent.style.position = "absolute";
			_divContent.style.width = "202px";
			_divContent.style.height = "235px";
			_divContent.style.border = "1px solid red";
			_divContent.style.margin = "auto";
			_divContent.style.overflow = "hidden";
			_divContent.style.left = _divContent.style.right = _divContent.style.top = _divContent.style.bottom = 0;

			var _divHeadTime = document.createElement("div");
			_divHeadTime.id = "div_headTime";
			console.log(_divHeadTime);
			_divContent.appendChild(_divHeadTime);
			var _divSkin = document.createElement("div");
			_divSkin.id = "div_skin";
			_divSkin.innerText = "皮肤";
			_divContent.appendChild(_divSkin);
			var _mySelect = document.createElement("select");
			_mySelect.id = "sel_skin";
			_mySelect.name = "skin";
			_divSkin.appendChild(_mySelect);
			_mySelect.appendChild(Calendar.appendOption("white", "白"));
			_mySelect.appendChild(Calendar.appendOption("red", "红"));
			_mySelect.appendChild(Calendar.appendOption("blue", "蓝"));
			_mySelect.appendChild(Calendar.appendOption("green", "绿"));
			_mySelect.appendChild(Calendar.appendOption("pink", "粉"));
			_mySelect.appendChild(Calendar.appendOption("gray", "灰"));
			var _div_control = document.createElement("div");
			_div_control.id = "div_control";
			_divContent.appendChild(_div_control);
			var _inputYear = document.createElement("input");
			_inputYear.id = "input_year";
			_inputYear.type = "number";
			_div_control.appendChild(_inputYear);
			_div_control.appendChild(Calendar.appendSpan("年"));
			var _inputMonth = document.createElement("input");
			_inputMonth.id = "input_month";
			_inputMonth.type = "number";
			_div_control.appendChild(_inputMonth);
			_div_control.appendChild(Calendar.appendSpan("月"));

			var _buttonLeft = document.createElement("button");
			_buttonLeft.style.marginLeft = "20px";
			_div_control.appendChild(_buttonLeft);
			var _aLeft = document.createElement("a");
			_aLeft.href = "#";
			_aLeft.id = "a_before";
			_aLeft.innerText = "<"
			_buttonLeft.appendChild(_aLeft);
			var _buttonRight = document.createElement("button");
			_buttonRight.style.marginLeft = "5px";
			_div_control.appendChild(_buttonRight);
			var _aRight = document.createElement("a");
			_aRight.href = "#";
			_aRight.id = "a_next";
			_aRight.innerText = ">";
			_buttonRight.appendChild(_aRight);

			var _div_week = document.createElement("div");
			_div_week.id = "div_week";
			_divContent.appendChild(_div_week);
			var weeks = ["日", "一", "二", "三", "四", "五", "六"];
			for(var i = 0; i < weeks.length; i++) {
				_div_week.appendChild(Calendar.appendSpan(weeks[i]));
			}
			var _div_detail = document.createElement("div");
			_div_detail.id = "div_detail";
			_divContent.appendChild(_div_detail);
			var _div_detail_in = document.createElement("div");
			_div_detail_in.id = "div_detail_in";
			_div_detail.appendChild(_div_detail_in);
			var _ul_detail = document.createElement("ul");
			_ul_detail.id = "ul_detail";
			_div_detail_in.appendChild(_ul_detail);
			var _div_bottom = document.createElement("div");
			_div_bottom.id = "div_bottom";
			_divContent.appendChild(_div_bottom);
		},
		appendOption: function(value, txt) {
			var myOption = document.createElement("option");
			myOption.value = value;
			myOption.innerText = txt;
			return myOption;
		},
		appendSpan: function(txt) {
			var mySpan = document.createElement("span");
			mySpan.innerText = txt;
			return mySpan;
		}
	}
	Calendar.init("div_content");

	function NewCalendar(id) {
		var _self = this;
		_self.div_content = document.getElementById("id");
		_self.div_headTime = document.getElementById("div_headTime");
		_self.div_headDate = document.getElementById("div_headDate");
		_self.div_control = document.getElementById("div_control");
		_self.div_week = document.getElementById("div_week");
		_self.div_detail = document.getElementById("div_detail");
		_self.div_buttom = document.getElementById("div_bottom");
		_self.ul_detail = document.getElementById("ul_detail");
		_self.input_year = document.getElementById("input_year");
		_self.input_month = document.getElementById("input_month");
		_self.newyear;
		_self.newmonth;
		_self.newday;
		_self.newweek;

		_self.addLi = function(e) {
			return "<li>" + e + "</li>"
		}

		var str = "";
		for(var i = 0; i < 6 * 7 * 3; i++) {
			str += _self.addLi("-");
		}
		_self.ul_detail.innerHTML = str;

		_self.list = document.getElementsByTagName("li");

		function getDate() {
			var time = new Date().toLocaleString();
			_self.div_headTime.innerHTML = time;
		}

		setInterval(function() {
			getDate();
		}, 100)
		_self.now = new Date();
		_self.year = _self.now.getFullYear();
		_self.month = _self.now.getMonth() + 1;
		_self.day = _self.now.getDate();
		_self.myWeek = _self.now.getDay();
		_self.a = new Date(_self.year, _self.month - 1, 1);
		_self.b_week = _self.a.getDay();

		_self.a_before = document.getElementById("a_before");
		_self.a_next = document.getElementById("a_next");
		_self.a_before.addEventListener("click", function() {
			_self.monthBefore();
		});
		_self.monthBefore = function() {
			var mon = Number(_self.input_month.value);
			var yea = Number(_self.input_year.value);
			if(mon > 1) {
				_self.input_month.value = mon - 1;
			} else {
				_self.input_month.value = 12;
				_self.input_year.value = yea - 1;
			}
			_self.mygetYear_Month();
			_self.init(_self.newyear, _self.newmonth, _self.day, _self.checkFirstDay());
			_self.addActive();
		}
		_self.a_next.addEventListener("click", function() {
			_self.monthNext();
		})
		_self.monthNext = function() {
			{
				var mon = Number(_self.input_month.value);
				var yea = Number(_self.input_year.value);
				if(mon < 12) {
					_self.input_month.value = mon + 1;
				} else {
					_self.input_month.value = 1;
					_self.input_year.value = yea + 1;
				}
			}

			_self.mygetYear_Month();
			_self.init(_self.newyear, _self.newmonth, _self.day, _self.checkFirstDay());
			_self.addActive();
		}

		_self.checkFirstDay = function() {
			var a = new Date(_self.input_year.value, _self.input_month.value - 1, 1);
			var b = a.getDay();
			return b;
		}
		_self.input_month.onblur = _self.input_year.onblur = _self.input_month.onclick = _self.input_year.onclick = _self.input_month.oninput = _self.input_year.oninput = function() {
			_self.mygetYear_Month();
			var mon = Number(_self.input_month.value);
			var yea = Number(_self.input_year.value);
			if(mon > 12 || mon < 1) {
				_self.input_month.value = 1;
			}
			if(yea < 1) {
				_self.input_year.value = 1;
			}
			_self.mygetYear_Month();
			_self.init(_self.newyear, _self.newmonth, _self.day, _self.checkFirstDay());
			_self.addActive();
		}
		var sel_skin = document.getElementById("sel_skin");
		sel_skin.onchange = function(e) {
			var col = this.value;
			console.log(col);
			div_content.style.background = col;
			document.cookie = "color=" + col;
			var currentColor = document.cookie.split(";")[0].split("=")[1];
			console.log(currentColor);
		}
		if(document.cookie.split(";")[0].split("=")[0] == "color") {
			var currentColor = document.cookie.split(";")[0].split("=")[1];
			console.log(currentColor);
			div_content.style.background = currentColor;
		}

	}

	NewCalendar.prototype.init = function(_year, _month, day, week) {
		var strInit = "";
		var max = 31;
		for(var i = 0; i <= 7; i++) {

			if(i < week) {
				this.list[i].innerText = "-";
			} else if(i == week) {
				max = new Date(_year, _month, 0).getDate();

				for(var j = 1; j <= 6 * 7; j++) {
					if(j <= max) {
						this.list[week + j - 1].innerText = j;
						strInit += this.addLi(j);
					} else {
						this.list[week + j - 1].innerText = "-";
					}
				}

			}
		}
		this.input_year.value = _year;
		this.input_month.value = _month;
	}
	NewCalendar.prototype.mygetYear_Month = function() {
		this.newyear = this.input_year.value;
		this.newmonth = this.input_month.value;
	}
	NewCalendar.prototype.mygetday = function() {
		var num = this.innerHTML;
		if(Number(num)) {
			this.newday = num;
		}

	}
	NewCalendar.prototype.addActive = function() {
		for(var a in this.list) {
			if(this.newday) {
				if(this.list[a].innerHTML == this.newday) {
					this.list[a].className = "active";
				} else {
					this.list[a].className = "-";
				}
			} else {
				if(this.list[a].innerHTML == this.day) {
					this.list[a].className = "active";
				} else {
					this.list[a].className = "-";
				}
			}
		}
	}

	var myNewCalendar = new NewCalendar("div_content");
	myNewCalendar.init(myNewCalendar.year, myNewCalendar.month, myNewCalendar.day, myNewCalendar.b_week);
	myNewCalendar.addActive();
}