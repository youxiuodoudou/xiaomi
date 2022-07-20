//小米秒杀
let swiper_slide = document.querySelectorAll(".swiper-slide"),
    swiper_wrapper = document.querySelector(".swiper-wrapper"),
    btn_left = document.querySelector(".swiper-controls .swiper-flashsale-prev"),
    btn_right = document.querySelector(".swiper-controls .swiper-flashsale-next"),
    iNow = 0, //记录当前位置，每4个一组
    count = Math.ceil(13 / 4) - 1, //最大位置下标
    timers = null;
//动态生成ul的宽
let swiperLiWidth = swiper_slide[0].offsetWidth + 14;
swiper_wrapper.style.width = swiperLiWidth * (swiper_slide.length + 1) + "px";
//启动定时器，自己进行滚动
timers = setInterval(function () {
    iNow++;
    if (iNow > count) {
        iNow = 0;
    }
    tab();
    // console.log(iNow);
}, 5000);
btn_right.onclick = function () {
    clearInterval(timers);
    iNow++;
    // 设置index的范围
    iNow = iNow >= count ? count : iNow;
    tab();
}
btn_left.onclick = function () {
    clearInterval(timers);
    iNow--;
    // 设置index的范围
    iNow = iNow <= 0 ? 0 : iNow;
    tab();
}
tab(); //先调用一次，让箭头样式先改变

function tab() {
    //设值箭头样式
    iNow == 0 ? btn_left.classList.add("swiper-button-disabled") : btn_left.classList.remove("swiper-button-disabled");
    iNow == count ? btn_right.classList.add("swiper-button-disabled") : btn_right.classList.remove("swiper-button-disabled");
    //移动的距离
    let iTarget = iNow == count ? -swiperLiWidth * 4 * 2 - swiperLiWidth : -swiperLiWidth * 4 * iNow;
    swiper_wrapper.style.transitionDuration = "1000ms";
    swiper_wrapper.style.transform = 'translate3d(' + iTarget + "px" + ' ,0,0)';
}


// 秒杀倒计时
let hour = document.querySelector('#hour')
let minutes = document.querySelector('#minutes')
let scond = document.querySelector('#scond')
let tips = document.querySelector('.tips')
time()
setInterval(time, 1000)
function time() {
    let date = new Date()
    // 1.得到现在的时间戳
    let now = +new Date()
    // 2.得到指定时间的时间戳
    let list = +new Date('2022-7-30 22:00:00')
    // 3.(计算剩余的毫秒书) / 1000
    let count = (list - now) / 1000
    // 4.转成时分秒
    // h = parseInt(总秒数 / 60 / 60 % 24)   //   计算小时
    let h = parseInt(count / 60 / 60 % 24)
    h = h < 10 ? '0' + h : h
    // m = parseInt(总秒数 / 60 % 60);     //   计算分数
    let m = parseInt(count / 60 % 60)
    m = m < 10 ? '0' + m : m
    // s = parseInt(总秒数 % 60); //   计算当前秒数
    let s = parseInt(count % 60);
    s = s < 10 ? '0' + s : s
    hour.innerHTML = h
    minutes.innerHTML = m
    scond.innerHTML = s
    // let hours = date.getHours()
    // let min = date.getMinutes()
    // let sec = date.getSeconds()
    // tips.innerHTML = `现在是${hours}:${min}:${sec}`
}