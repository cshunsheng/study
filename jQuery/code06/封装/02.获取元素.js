(function(window, undefined){
    var jQuery = function(selector){
        var ele = document.querySelectorAll(selector);
        [].push.apply(this, ele);
    }

    // 往原型上添加方法
    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        css: function(){

        },
        addClass: function(){
            
        }
    }

    window.jQuery = window.$ = jQuery;
})(window)
