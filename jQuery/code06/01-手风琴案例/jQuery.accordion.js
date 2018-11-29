// jq的原型
$.fn.accordion = function(options) {
    // 给options设置个空对象，防止options参数没有传递，是个undefined，防止下面代码报错
    options = options || {};

    // this ==> $("#box");
    var $lis = this.find(options.selector);
    // console.log($lis);


    var boxW = this.width(); // 父盒子的宽度
    var maxW = options.maxW || 800; // 当前展开的最大宽度，默认值800
    var minW = (boxW - maxW) / ($lis.length - 1); // 其他的li最小值
    var averper = boxW / $lis.length;  // 没有展开的时候每个li均分的

    // 这里需要的手动的遍历给每个li设置上不同的样式
    $lis.each(function(i, ele){
        // 0-4
        $(this).css("backgroundImage", "url("+ options.imgsArr[i] +")");
    })
    
    $lis.mouseenter(function() {
        $(this).stop().animate({ width: maxW }).siblings().stop().animate({ width: minW })
    })

    this.mouseleave(function() {
        $lis.stop().animate({ width: averper })
    })
}
