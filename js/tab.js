function tabS(obj) {
  let tabWrap = document.querySelector(obj);
  let tabList = tabWrap.querySelectorAll(".tab-list li");
  let tabUl = tabWrap.querySelectorAll(".brick-list");

  tabList[0].classList.add("tab-active");
  for (let i = 0; i < tabList.length; i++) {
      tabList[i].num = i;
      tabList[i].onmouseover = function() {
          for (let i = 0; i < tabList.length; i++) {
              tabList[i].className = "";
          }
          tabList[this.num].classList.add("tab-active");
          for (let j = 0; j < tabUl.length; j++) {
              tabUl[j].classList.add("hide");
          }
          tabUl[this.num].classList.remove("hide");
      }
  }
}
tabS(".home-appliances-box");