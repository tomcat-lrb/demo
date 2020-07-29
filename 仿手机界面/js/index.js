// 鼠标移入移出动画效果
// var content = document.querySelector('.content');
// content.onmouseover = function(){
//     content.setAttribute('style','transform: scale(.6) skew(40deg);box-shadow: 10px 10px 30px rgba(255,255,255,0.5);transition: all 1s ease-in-out;')
// }
// content.onmouseout = function(){
//     content.setAttribute('style','transform: scale(.8) skew(0deg);box-shadow: 10px 10px 30px rgba(255,255,255,0.5);transition: all 1s ease-in-out;');
// }

// 获取当地时间
setInterval(function () {
    var timer = document.querySelector("#time");
    var date = new Date();
    var Year = date.getFullYear();
    var Month = date.getMonth();
    var Day = date.getDate();
    var Week = date.getDay();
    var Hours = date.getHours();
    var Minutes = date.getMinutes();
    if (Hours < 19){
        document.querySelector('.fa-moon-o').style.display = 'none';
    }else {
        document.querySelector('.fa-sun-o').style.display = 'none';
    }
    if (Hours < 10){
        Hours = '0'+Hours;
    }
    if (Minutes < 10){
        Minutes = '0'+Minutes;
    }
    switch (Week) {
        case 0:
            Week = '星期日';
            break;
        case 1:
            Week = '星期一';
            break;
        case 2:
            Week = '星期二';
            break;
        case 3:
            Week = '星期三';
            break;
        case 4:
            Week = '星期四';
            break;
        case 5:
            Week = '星期五';
            break;
        case 6:
            Week = '星期六';
            break;
    };
    timer.innerHTML = Hours + ":" + Minutes;
    document.querySelector("#localTime").innerHTML = Hours + ":" + Minutes;
    document.querySelector(".QQ-time").innerHTML = Hours + ":" + Minutes;
    document.querySelector("#localDate").innerHTML = Month + 1 +'月' + Day + '日' + Week;
    document.querySelector("#menuTime").innerHTML = Hours + ":" + Minutes;
    document.querySelector("#menuDate").innerHTML = Month + 1 +'月' + Day + '日' + Week;
},1000);

// 对手机电量进行随机取数
var dumpEnergy = document.querySelector(".dumpEnergy");
dumpEnergy.innerHTML = Math.floor(Math.random()*100) + '%';

//设置个别动画效果
var faExchange = document.querySelector(".fa-exchange");
faExchange.onmouseover = function () {
    faExchange.setAttribute('style','transform:scale(1.3) rotate(90deg);transition:transform 0.5s;margin-left: 18px');
}
faExchange.onmouseout = function () {
    faExchange.setAttribute('style','transform:scale(1.2) rotate(90deg);transition:transform 0.5s;margin-left: 18px');
}
var faRefresh = document.querySelector(".fa-refresh");
faRefresh.onmouseover = function () {
    faRefresh.setAttribute('style','transform: rotate(90deg) scale(1.5);margin-left: 18px;transition:transform 0.5s;');
}
faRefresh.onmouseout = function () {
    faRefresh.setAttribute('style','transform: rotate(90deg) scale(1.4);margin-left: 18px;transition:transform 0.5s;');
}

//阻止设置菜单点击冒泡(暂未实现)
// var menuIcon = document.querySelector(".menu-icon");
// menuIcon.onclick = function (event) {
//     var event = event || window.event;
// 	event.stopPropagation();
// }

//手机菜单设置点击效果(暂未实现)
// var flag = true;
// var menuIcon = document.querySelector(".menu-icon");
// menuIcon.onclick = function (event) {
// 	if (flag){
// 	    menuIcon.setAttribute('style','background:#cdcdcd;color:#515151;');
// 	    flag = false;
// 	}else {
//         menuIcon.setAttribute('style','background:#1296db;color:#ffffff;');
//         flag = true;
// 	}
// }
// function change() {
//     if (flag){
//         this.style.background = '#cdcdcd';
//         this.style.color = '#515151';
//
//         // this.setAttribute('style','background:#cdcdcd;color:#515151;');
//         flag = false;
//     }else {
//         // this.setAttribute('style','background:#1296db;color:#ffffff;');
//         this.style.background = '#1296db';
//         this.style.color = '#ffffff';
//         flag = true;
//     }
// }

// 手机菜单下拉
var menu = document.querySelector('#menu');
function contentMenu() {
    menu.setAttribute('style','height:600px;margin-top:-0px;transition:all 1s ease-in-out;');
}
menu.onclick=function () {
    menu.setAttribute('style', 'height: 0px; margin-top: -478px;transition:all 1s ease-in-out')
}