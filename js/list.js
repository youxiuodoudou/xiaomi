let fa = document.querySelectorAll(".fa-chevron-circle-down")
let list = document.querySelectorAll(".category-list")
for (let i = 0; i < fa.length; i++) {
    fa[i].index = i;
    fa[i].addEventListener('click',function () { 
      for (let i = 0; i < list.length; i++) {
        // list[i].style.display = "none";
        if (list[i].style.display == "none") {
          list[this.index].style.display = "";
        }else{
          list[i].style.display = "none";
        }
    }
     })
}
