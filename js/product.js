


    var as = document.getElementById('details').getElementsByTagName('a');
    var items=document.querySelectorAll('.item');
    console.log(items);
    for(var i=0;i<as.length;i++){
      as[i].setAttribute('index',i);
      as[i].onclick=function(){
      for(var i=0;i<as.length;i++){
          as[i].className = '';
      }
      this.className = 'on';
      for(var i=0;i<items.length;i++){
        //无他思想先全隐藏
        items[i].style.display='none';
     }  
      var index=this.getAttribute('index');
       //然后再显示当前坐标
      items[index].style.display='block';
      }
    }