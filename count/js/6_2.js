function calc(btn){
  //让旁边的span+1或-1
  //获取btn的父元素，在父元素下找标签为span的元素，取第1个，保存在变量span中
  var span=btn.parentNode.querySelector("span");
  //获取span的内容保存在n中
  var n=parseInt(span.innerHTML);
  //如果btn的内容是+，就n+1，否则，如果n>1,就n-1，否则n=1;
  n+=(btn.innerHTML=="+"?1:n>1?-1:0);
  //设置span的内容为n;
  span.innerHTML=n;
  //计算小计:
  //获得单价price: 获取btn的父元素的前一个兄弟元素的内容截取1位置之后的内容转为浮点数
  var price=parseFloat(
    btn.parentNode
       .previousElementSibling
       .innerHTML
       .slice(1)
  );
  console.log(price);
  //计算小计subTotal: price*n
  var subTotal=price*n;
  //设置btn的父元素的下一个兄弟元素的内容为"&yen;"+subTotal按2位小数四舍五入
  btn.parentNode.nextElementSibling.innerHTML
      ="&yen;"+subTotal.toFixed(2);

  //计算总计:
  //获得tbody中每行最后一个td,保存在tds中
  var tds=document.querySelectorAll(
    "#data>tbody td:last-child"
  );
  for(var i=0,total=0;i<tds.length;i++){
    total+=parseFloat(tds[i].innerHTML.slice(1));
  }
  document.querySelector(
    "#data>tfoot td:last-child"
  ).innerHTML="&yen;"+total.toFixed(2);
}