(function($){
         
        var zgpbld_tab = function(element, options){
            var elem = $(element);
            var obj = this;
            var defaults = {
                            data:{
                            }
                        };
           var settings = $.extend(true,{}, defaults, options);
            // Public method - can be called from client code
            this.publicMethod = function(){
            
            };

            // Private method - can only be called from within this object
            var privateMethod = function(){
            
            };
            
            this.init = function(){
                $('ul.tabs li').click(function(){
                        var tab_id = $(this).attr('data-tab');

                        $('ul.tabs li').removeClass('current');
                        $('.tab-content').removeClass('current');

                        $(this).addClass('current');
                        $("#"+tab_id).addClass('current');
                });
                 
            };
            
             this.init();
                   
        };
        
        $.fn.zgpbld_tab = function(options){
            return this.each(function(){
                var element = $(this);

                // Return early if this element already has a plugin instance
                if (element.data('zgpbld_tab')) return;

                // pass options to plugin constructor
                var myplugin = new zgpbld_tab(this, options);

                // Store plugin object in this element's data
                element.data('zgpbld_tab', myplugin);
            });
        };
})($zgpb);

