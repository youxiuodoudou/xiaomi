
// 全部商品分类
let category_list = document.querySelectorAll(".category-list"),
    commodity = document.querySelectorAll(".commodity");
for (let i = 0; i < category_list.length; i++) {
    category_list[i].index = i;
    category_list[i].onmouseover = function() {
        for (let i = 0; i < commodity.length; i++) {
            commodity[i].style.display = "none";
        }
        commodity[this.index].style.display = "block";
        category_list[this.index].classList.add("listBcolor");

    }
    category_list[i].onmouseout = function() {
        category_list[this.index].classList.remove("listBcolor");
        commodity[this.index].style.display = "none";
    }
}

//微信
let J_followWxImg = document.getElementById("J_followWxImg"),
    J_followWx = document.getElementById("J_followWx");
J_followWx.onmouseover = function() {
    J_followWxImg.style.display = "block";
}
J_followWx.onmouseout = function() {
    J_followWxImg.style.display = "none";
}

//底部图片切换
let J_safeAuth = document.querySelector(".J_safeAuth");
setInterval(function() {
    J_safeAuth.classList.add("active");
}, 2000);
setInterval(function() {
    J_safeAuth.classList.remove("active");
}, 4000);

//回顶部
let J_atop = document.getElementById("J_atop");
// 当网页向下滑动 854px 出现"返回顶部" 按钮
window.onscroll = function() { scrollFun() };

function scrollFun() {
    if (document.body.scrollTop > 854 || document.documentElement.scrollTop > 854) {
        J_atop.classList.add("active");
    } else {
        J_atop.classList.remove("active");
    }
}

function topFun() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//点击返回顶部
J_atop.onclick = function() {
    topFun();
}