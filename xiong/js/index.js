//自定义的属性一定要以data-开头 h5规范 

//导航栏  
var navList = document.querySelectorAll('#dd li a'),
  cate = document.querySelectorAll('.cate-list'),
  index = 0;
for (let i in navList) {
  if (i === "entries") {
    break;
  }
  navList[i].setAttribute('data-index', i);
  navList[i].addEventListener("mouseover", function () {
    index = this.getAttribute('data-index');
    for (let i of cate) {
      i.style.display = 'none';
    }
    cate[index].style.display = 'block';
  });
  navList[i].addEventListener("mouseout", function () {
    for (let i of cate) {
      i.style.display = 'none';
    }
  });
}
for (let i of cate) {
  i.addEventListener("mouseover", function () {
    cate[index].style.display = 'block';
    navList[index].style.backgroundColor = 'white';
    navList[index].style.color = 'black';
  });
  i.addEventListener("mouseout", function () {
    for (let o of cate) {
      o.style.display = 'none';
    }
    navList[index].style.backgroundColor = 'red';
    navList[index].style.color = 'white';
  });
}


// 精灵图
var is = document.getElementById('elf').querySelectorAll('i');
for (var i = 0; i < is.length; i++) {
  var index = i * 25;
  is[i].style.backgroundPosition = '0 -' + index + 'px';
}

