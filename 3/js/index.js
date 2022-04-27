//点击li对象, 弹出 alert 对话框显示当前点击 li 的序号;
/*window.onload = function () {
	var li = document.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
		li[i].onclick = function () {
			alert(this.id);
		}
	}
}*/

//点击p1对象, 其字体颜色变成红色;
p1.onclick = function () {
	p1.style.color = "red";
	alert("p1");
}

//点击p2对象, 将h1的内容变成当前的日期, 其格式为 yyyy-mm-dd;
p2.onclick = function () {
	var date = new Date();
	h1.innerHTML = formatDate(date);
	alert("p2");
}

function formatDate(date) {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();
	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;
	return [year, month, day].join('-');
}

//点击p3对象, 将其父对象的li元素增加 fn-active 类;
p3.onclick = function () {
	p3.classList.add("fn-active");
	alert("p3");
}

//点击p4对象, 删除表格的p8元素;
p4.onclick = function () {
	p8.remove();
	alert("p4");
}

//点击p5对象, 打开一个新窗口, 里面显示淘宝主页;
p5.onclick = function () {
	window.open("https://www.taobao.com");
	alert("p5");
}

//点击p6对象, 在 ul 的最后添加一个 li 元素, 其内容是 p9;
p6.onclick = function () {
	ali = document.createElement("li");
	ali.innerHTML = "p9";
	ali.className = "m-item";
	ali.id = "p9";
	ul.appendChild(ali);
	alert("p6");

	p9.onclick = function () {
		alert("p9");
	}
}

//点击p7对象, 将 m-box 的宽度设置到屏幕宽度;
p7.onclick = function () {
	document.getElementById("m-box").style.width = screen.width;
	alert("p7");
}

p8.onclick = function () {
	alert("p8");
}
