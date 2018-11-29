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
        extend: function(obj){
            for(var k in obj){
                if(obj.hasOwnProperty(k)){
                    this[k] = obj[k];
                }
            }
        }
    }

    // 添加样式操作
    jQuery.fn.extend({
        css: function(){
            if(arguments.length === 2){
                var name = arguments[0];
                var value = arguments[1];

                for(var i = 0; i < this.length; i++){
                    this[i].style[name] = value;
                }
            }else if(arguments.length === 1){
                var name = arguments[0];
                if(typeof name === "object"){
                    for(var i = 0; i < this.length; i++){
                        for(var k in name){
                            this[i].style[k] = name[k];
                        }
                    }
                }else if(typeof name === "string"){
                    return window.getComputedStyle(this[0], null)[name];
                }
            }

            return this;
        },
        addClass: function(){
            console.log("这里是我们封装的addClass操作");
        },
        removeClass: function(){

        },
        hasClass: function(){

        },
        toggleClass: function(){

        }
    })


    // init的原型替换成jq的原型 -- 让init的实例访问到jq原型上的方法
    jQuery.fn.init.prototype = jQuery.fn;

    window.jQuery = window.$ = jQuery;
})(window)
