(function(window, undefined){
    var jQuery = function(selector){
        // jq 是个工厂函数，内部 new + 构造函数， 并且返回创建对象
        return new jQuery.fn.init(selector);
    }

    // 往原型上添加方法
    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        init: function(selector){
            // 才是jq里面真正的构造函数
            var ele = document.querySelectorAll(selector);
            [].push.apply(this, ele);
        },
        css: function(){

        },
        addClass: function(){
            console.log("这里是我们封装的addClass操作");
        }
    }

    // init的原型替换成jq的原型 -- 让init的实例访问到jq原型上的方法
    jQuery.fn.init.prototype = jQuery.fn;

    window.jQuery = window.$ = jQuery;
})(window)
