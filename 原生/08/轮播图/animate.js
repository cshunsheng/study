/**
 * Created by luodianlei on 2018/7/20.
 */
//    这个函数的作用: 实现从左到右或者是从右到左,缓慢移动的功能
function animate(target, step, element, fn){
  if(element.timeid){
    clearInterval(element.timeid);
  }
  element.timeid = setInterval(function(){
    //1.获取当前的位置
    var current =  element.offsetLeft;
//      2. 判断box是否到达目标位置
    //由于从左往右和从右往左都要实现,判断你的依据需要修改一下
//        如果目标位置- 当前位置得到的差值 < 每一次走的步数,我们就认为马上要到达了,所以就直接把目标位置赋值为元素
//          Math.abs(target - current)   <=   step
    if(Math.abs(target - current) <= step){
      element.style.left = target + 'px';
      clearInterval(element.timeid);
//        animate(0,7,box);
//        在这里证明已经到达了目标位置,执行下一个逻辑,但是不能把下一个逻辑的代码直接写在这里
      if(fn){
        fn();
      }
      return;
    }
//      3. 如果没有到达,减去几个像素
//        var target = current - step;
    if(target > current){
      var pos = current + step;
    }else{
      var pos = current - step;
    }
//        4. 让box移动起来
    element.style.left = pos + 'px';
    
  },15);
}