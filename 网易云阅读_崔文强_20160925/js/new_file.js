var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var section4 = document.getElementById("section4");
var sections = document.getElementsByTagName("section");

var show1 = document.getElementById("1");
var show2 = document.getElementById("2");
var show3 = document.getElementById("3");
var show4 = document.getElementById("4");
var clickme = document.getElementById("clickme");
var shows = document.getElementsByClassName("show");
//			var divcover = document.getElementById("divcover");
//			var back = document.getElementById("back");

function show(a) {
	for(var i = 0; i < sections.length; i++) {
		shows[i].style.color = "black";
		sections[i].style.display = "none";
		if(i == a) {
			sections[i].style.display = "block";
			shows[i].style.color = "red";
		}
	}
	show2.style.backgroundImage = "url(img/subs_group_icon_normal.png)";
	show3.style.backgroundImage = "url(img/subs_group_icon_normal.png)";
}
show(0);

show1.onclick = function() {
	show(0);

}
show2.onclick = function() {
	show(1);
	show2.style.backgroundImage = "url(img/subs_group_icon_selected.png)";
}
show3.onclick = function() {
	show(2);
	show3.style.backgroundImage = "url(img/subs_group_icon_selected.png)";
}
show4.onclick = function() {
	show(3);
}
var bookstore = document.getElementsByClassName("bookstore")[0];
var book = document.getElementsByClassName("book")[0];
var subscription = document.getElementsByClassName("subscription")[0];
var nav = document.getElementsByTagName("nav")[0];
var title = document.getElementById("title");
var clickh3 = document.getElementById("clickh3");

function init() {
	bookstore.style.backgroundImage = "url(img/home_tabbar_icon_discover_normal.png)";
	bookstore.style.color = "black";
	book.style.backgroundImage = "url(img/home_tabbar_icon_bookshelf_normal.png)";
	book.style.color = "black";
	subscription.style.backgroundImage = "url(img/home_tabbar_icon_rss_normal.png)";
	subscription.style.color = "black";
}
init();
bookstore.onclick = function() {
	init();
	bookstore.style.backgroundImage = "url(img/home_tabbar_icon_discover_press.png)";
	bookstore.style.color = "red";
	nav.style.display = "none";
	title.innerText = "书城";
	show(null);
}
book.onclick = function() {
	init();
	book.style.backgroundImage = "url(img/home_tabbar_icon_bookshelf_press.png)";
	book.style.color = "red";
	nav.style.display = "none"
	title.innerText = "书架";
	show(null);
}
subscription.onclick = subscriptionclick;

function subscriptionclick() {
	init();
	subscription.style.backgroundImage = "url(img/home_tabbar_icon_rss_press.png)";
	subscription.style.color = "red";
	nav.style.display = "block"
	title.innerText = "订阅";
	show(0);
}
subscriptionclick();
clickh3.onclick = function() {
	//				divcover.style.display = "block";
	console.log(111)
}
var footer = document.getElementsByTagName("footer")[0];
var section = document.getElementsByTagName("section")[0];
clickme.style.border = "dashed thin red"
clickme.addEventListener("click", function() {
	divcover.style.display = "block";
	footer.style.display = "none";
	section.style.display = "none";
	console.log("测试是否能响应");
})

back.onclick = function() {
	divcover.style.display = "none";
	footer.style.display = "block";
	section.style.display = "block";

}