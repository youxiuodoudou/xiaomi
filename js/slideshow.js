let sli_li = document.querySelectorAll(".img-list li")
let sli_box = document.querySelectorAll(".pointer a")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let banner = document.querySelector(".banner")
for (let i = 0; i < sli_li.length; i++) {
  //   点击右侧按钮，可以自动播放下一张图片
  //   需要一个变化量  index 不断自增
  //   然后播放下一张图片
  //   如果到了最后一张，必须要还原为第1张图片
  //   索引号 = 索引号 % 数组长度 （放到播放前面）
  let index = 0  // 全局变量  信号量 控制器 为了给 右侧按钮和左侧按钮同时使用
  next.addEventListener('click', function () {
    index++
    index = index % sli_li.length
    common()
  })

  //右侧按钮播放效果
  prev.addEventListener('click', function () {
    index--
    if (index < 0) {
      index = sli_li.length - 1
    }
    common()
  })
  //因为左侧按钮和右侧按钮里面有大量相同的操作，可以抽取封装一个函数 common
  function common() {
    document.querySelector('.img-list .active').classList.remove('active')
    sli_li[index].classList.add('active')

    document.querySelector('.pointer .active').classList.remove('active')
    sli_box[index].classList.add('active')
  }
}

// 需求⑦：开启定时器
//   其实定时器自动播放，就相当于点击了右侧按钮，此时只需要， next.click()
let timer = setInterval(function () {
  // 自动调用右侧按钮的点击事件
  next.click()
}, 1000)

// 需求⑧：
//   鼠标经过停止定时器 （清除定时器）
banner.addEventListener('mouseenter', function () {
  clearInterval(timer)
})

//   鼠标离开开启定时器 （开启定时器）
banner.addEventListener('mouseleave', function () {
  timer = setInterval(function () {
    // 自动调用右侧按钮的点击事件
    next.click()
  }, 1000)
})