(function($){
    $.preloadImages = function()
    {
        var tmp = [],n = arguments.length;
    
        if(n <= 0) { return false; }
    
        for( ; n--;){
            var o = document.createElement('img');
            o.src  = arguments[n];
            tmp.push(o);
        }
    }
})(jQuery);