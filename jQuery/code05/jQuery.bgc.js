// 往原型上添加方法，这样实例才能使用到原型上新增的方法
$.fn.bgc = function(color){
    // console.log("bgc");

    // 如何表示这个元素
    // $("body")
    // this  ==>  谁调用这个方法，this指向谁，jq对象
    // console.log(this);
    this.css("backgroundColor", color);

    // 目的 支持链式编程
    return this;
}
