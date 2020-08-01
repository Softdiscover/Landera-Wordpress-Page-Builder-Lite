(function ($) {

    var zgth_opt_picture = function (element, options) {
        var elem = $(element);
        
        var obj_btn = $(element).find('.sfdc-btn-file');
        var obj_inp = $(element).find('.zgpb-opt-img-inp');
        var obj_preview = $(element).find('.zgpb-opt-img-preview');
        var obj_remove = $(element).find('.sfdc-btn-danger');
 

        var obj = this;
        var defaults = {
            data: {
            }
        };
        var settings = $.extend(true, {}, defaults, options);
        // Public method - can be called from client code
        this.publicMethod = function () {

        };

        // Private method - can only be called from within this object
        var privateMethod = function () {

        };

        this.init = function () {
          
            //init check
             if($('body').find('.zgpb-opt-img-wrap').length){
                        var tmp_zgth_img_opt=$('body').find('.zgpb-opt-img-wrap');
                        tmp_zgth_img_opt.each(function (i) {
                                    if($(this).find('.zgpb-opt-img-inp').val()){
                                        //preview show
                                        $(this).find('.zgpb-opt-img-preview').show();
                                        //hide upload button
                                        $(this).find('.sfdc-btn-file').hide();
                                        //show remove button
                                        $(this).find('.sfdc-btn-danger').show();   
                                    }
                            });

                    } 


            //events
             obj_btn.click( function( event ) {
                 event.preventDefault();
                 
                 
                 var tmp_dialog_box = null;
                   // Create the media frame.
                tmp_dialog_box = wp.media.frames.customHeader = wp.media({
                    title: $(this).data( 'dialog-title' ),
                    library: {
                            type: 'image'
                    },
                    button: {
                        text: $(this).data( 'dialog-btn' )
                    }
                });
                
                tmp_dialog_box.on( "select", function() {
                     var img_src = tmp_dialog_box.state().get( "selection" ).first();
                     var img_url = img_src.attributes.url;
                     
                     obj_inp.val(img_url);
                     //preview
                     obj_preview.show();
                     obj_preview.find('img').attr('src',img_url);
                     
                     //hide button
                     obj_btn.hide();
                     
                     //show remove button
                     obj_remove.show();
                      
                     //update preview 
                     var f_store="input1-img_src";
                    var f_val=img_url;
                    zgpb_core.updateModalFieldCoreAndPreview(f_store,f_val);  
                      
                   
                });

                tmp_dialog_box.open();
                
                 
             });
             
             //delete image
             obj_remove.click( function( event ) {
	    	event.preventDefault();
	    	
                 //preview
                 obj_preview.fadeOut( 'slow' );
                
                //input
                obj_inp.val('');
                
                //remove button
                $(this).fadeOut( 'slow' );
                
                //upload button
                obj_btn.fadeIn( 'slow' );
                
                 //update preview 
                     var f_store="input1-img_src";
                    var f_val='';
                    zgpb_core.updateModalFieldCoreAndPreview(f_store,f_val);
                
	    });
             
            
            
        };
  
        this.init();

    };

    $.fn.zgth_opt_picture = function (options) {
        return this.each(function () {
            var element = $(this);

            // Return early if this element already has a plugin instance
            if (element.data('zgpb_opt_picture'))
                return;

            // pass options to plugin constructor
            var myplugin = new zgth_opt_picture(this, options);

            // Store plugin object in this element's data
            element.data('zgpb_opt_picture', myplugin);
        });
    };
})($zgpb);

