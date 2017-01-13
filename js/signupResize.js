//设置页面屏占比
var origW = 520,
origH = 800;
function resizeArea() {
    var a = $(window).innerWidth();
    var b = a / origW * origH;
    if (b > $(window).innerHeight()) {
        b = $(window).innerHeight();
        a = b / origH * origW
    }
    if (b > a && b < $(window).innerHeight()) {
        b = $(window).innerHeight()
    }
    $(".wrapper").css("width", a + "px");
    $(".wrapper").css("height", b + "px");
    $(".wrapper").css("margin-left", (($(window).innerWidth() - a) / 2) + "px");
    $(".wrapper").css("margin-top", (($(window).innerHeight() - b) / 2) + "px");
    calPosition()
}
function calPosition() {
    var f = $(".wrapper");
    var d = parseInt(f.css("margin-left").split("px")[0]),
    h = parseInt(f.css("margin-top").split("px")[0]),
    e = f.width(),
    c = f.height();
    var g = e / 520;
    var b = null;
    b = seek("c1");
    b.rect.w = Math.round(e * 1);
    b.rect.h = Math.round((e * 1) / 73 * 100);
    b.rect.l = Math.round(e * 0.3) + d;
    b.rect.t = 0;
    b = seek("c2");
    b.rect.w = Math.round(e * 1);
    b.rect.h = Math.round((e * 1) / 100 * 40);
    b.rect.l = Math.round(e * 0.3) + d;
    b.rect.t = Math.round((e * 0.45) / 73 * 100);
    items.forEach(function(j) {
        $("#" + j.name).css("top", j.rect.t + "px");
        $("#" + j.name).css("left", j.rect.l + "px");
        $("#" + j.name).css("width", j.rect.w + "px");
        $("#" + j.name).css("height", j.rect.h + "px")
    })
}
function seek(a) {
    for (i = 0; i < items.length; i++) {
        if (items[i]["name"] == a) {
            return items[i]
        }
    }
    return null
};











//初始化页面元素位置属性
var items=[];
items.push({name:"c1",rect:{t:0,l:0,w:0,h:0},img:"zyp1.jpg"});
items.push({name:"c2",rect:{t:0,l:0,w:0,h:0},img:"zyt2.jpg"});

$(window).resize(function(){resizeArea()});

window.onorientationchange=function(){
    resizeArea();
};
$(function(){
    init();
});

function init(){
    setTimeout(function(){
        resizeArea();
    },50)
}