if(typeof($zgpb) === 'undefined') {
	$zgpb = jQuery;
}
var zgpb_front = zgpb_front || null;
if(!$zgpb.isFunction(zgpb_front)){
(function($, window) {
 "use strict";  
    
var zgpb_fn_front = function(){
     var zgpbvariable = [];
    zgpbvariable.innerVars = {};
    zgpbvariable.externalVars = {};
    
     
     
    this.initialize = function() {
                   
                //show palette container
                this.elements_container_initshow();
                
                //adding classes
                $('html').addClass('zgpb-builder-mode-edit');
		$('body').addClass('zgpb-builder-active');
                
                if($('html').data('__nicescroll')){
                    
                   //$("html").getNiceScroll().remove();
                  //  $("html").getNiceScroll().hide();
                  //  $('.nicescroll-rails').hide();
                }else{
                    $('html').niceScroll({
                            autohidemode		: false,
                            cursorborder		: 0,
                            cursorborderradius	: 5,
                            cursorcolor		: '#222222',
                            cursorwidth		: 10,
                            horizrailenabled	: false,
                            mousescrollstep		: 40,
                            scrollspeed: 60
                    });
                }
                
                
             //  jQuery('body').scrollbar();
                
                
                 //$('body').css('padding','0px');
                 
             /*  $('body').niceScroll({
                     autohidemode: false,
                     cursorwidth: "5px",
                     cursorborder: "1px solid #eee",
                }); */
              
        
               /* if($('html').data('__nicescroll')){
                    console.log('nicescroll exists');
                    
                }else{
                    
                }*/
               
                
                
                // $('html').addClass('sfdc-wrap');
                 
                //set external variables
                this.setExternalVars();
                
                //scroll event
                 $(window).scroll(function(){
                    
                    //positioning palette
                    //zgpb_front.elements_container_makeposition();
                })
                
                //add main editor container
            // zgpb_core.setMainContainer();
                
               
                
                
                 var tmp_vars=[];
                // tmp_vars['editor_container']='.entry-content';
                tmp_vars['editor_container']='';
                //fire content
               zgpb_core.getPostContent(tmp_vars);
                
                
               
                
            };
            
    
            
                   
    this.setExternalVars = function() {
            zgpbvariable.externalVars["class_main_content"] ='.zgpb-main-content-';
        
                //zgpbvariable.externalVars["fm_onload_scroll"] = rockfm_vars._uifmvar['fm_onload_scroll'] || "1";
                //zgpbvariable.externalVars["fm_loadmode"] = rockfm_vars._uifmvar['fm_loadmode'] || "";
            };
    this.getExternalVars = function(name) {
                if (zgpbvariable.externalVars[name]) {
                    return zgpbvariable.externalVars[name];
                } else {
                    return '';
                }
            };         
    this.setInnerVariable = function(name, value) {
                zgpbvariable.innerVars[name] = value;
            };
             
    this.getInnerVariable = function(name) {
                if (zgpbvariable.innerVars[name]) {
                    return zgpbvariable.innerVars[name];
                } else {
                    return '';
                }
            };
       
    this.dumpvar3 = function (object) {
        return JSON.stringify(object, null, 2);
    };
    this.dumpvar2 = function (object) {
        return JSON.stringify(object);
    };
     
    this.dumpvar = function (object) {
       var seen = []
       var json =JSON.stringify(object, function(key, val) {
        if (val != null && typeof val == "object") {
                if (seen.indexOf(val) >= 0)
                    return
                seen.push(val)
            }
            return val
        });
        return seen;
    };
    
    
    
    this.exitAdminPanel = function () {
              
             var cur_post_url=window.location.href;
             cur_post_url = cur_post_url.replace('?zigapage_live_mode', '').replace('&zigapage_live_mode', '');
             zgpb_core.redirect_tourl(cur_post_url);
             };
             
    this.showLogMessage = function (msg) {
              
             };
             
        
    this.elements_container_initshow = function () {
        

        var dialog_new_btns =$('#zgpb-editor2-hiddens .zgpb-editor2-hiddens-dialog-icons').html();
              $('#zgpb-palette-cont').dialog({
                    height: 370,
                    width: 300,
                    modal: false,
                    draggable: true,
                    resizable: true,
                    dialogClass: 'no-close sfdc-paletter-dialog',
                    closeOnEscape: false,
                     open        : function(){
                      var tmp_titlebar= $(this)
                        .parent()
                        .children(".ui-dialog-titlebar");
                        
                        tmp_titlebar.parent().addClass('sfdc-wrap');
                        
                        if(!tmp_titlebar.find('.zgpb-editor2-header-icons').length){
                            tmp_titlebar.append(dialog_new_btns);
                            
                            tmp_titlebar.find('.ui-dialog-title').css('width','87%');
                            tmp_titlebar.find('.ui-dialog-titlebar-close').hide();
                        }
                 
                    },
                    dragStop: function(e, ui) {
                        zgpb_front.elements_container_saveCoords(ui.offset.top, ui.offset.left);
                      },
                    close: function(e, ui) {
                        zgpb_front.elements_container_saveCloseStatus();
                      },
                });
                
               
                this.setInnerVariable('palette_coord_top',51);
                this.setInnerVariable('palette_coord_left',0);
                this.setInnerVariable('palette_show_st',1);
                
                //update header options
                this.header_options_update();
                
                // positioning palette
                this.elements_container_makeposition();
                
             };
     this.elements_container_chStatus = function () {
         
         var option1 = zgpb_front.getInnerVariable('palette_show_st');
         if(parseInt(option1)===1){
            $("#zgpb-palette-cont").dialog( "close" ); 
            //update variable
            this.setInnerVariable('palette_show_st',0);
         }else{
            
            //update variable
            this.setInnerVariable('palette_coord_top',51);
            this.setInnerVariable('palette_coord_left',0);
            this.setInnerVariable('palette_show_st',1);
            
            $("#zgpb-palette-cont").dialog( "open" );
            
            //positioning
            this.elements_container_makeposition();
            
            
         }
        
        //update header options
        this.header_options_update(); 
         
     };     
    this.elements_container_saveCoords = function (vartop,varleft) {
               this.setInnerVariable('palette_coord_top',vartop);
                this.setInnerVariable('palette_coord_left',varleft);
             }; 
    this.elements_container_saveCloseStatus = function(){
        zgpb_front.setInnerVariable('palette_show_st',0);
        
        //update header options
        zgpb_front.header_options_update();
    };
    
    this.test_showModal = function(){
      
    
       
        
    };
    
    this.test_showModal2 = function(){
      
      /* var tmp_vars=[];
                tmp_vars['editor_container']='.the_content_wrapper';
                //fire content
                zgpb_core.getPostContent(tmp_vars);*/
     
        
    };
    
    this.test_showModal2 = function(){
      
       zgpb_core.savepost_cleanPost();
        
        var tabcontent_tmp;
    
         tabcontent_tmp={};
        tabcontent_tmp.content=zgpb_core.getLayoutPage();
         
        zgpb_core.setUiData('fields_design',tabcontent_tmp);
       
    };
    
    this.header_options_update = function(){
        //option 1
        var option1 = zgpb_front.getInnerVariable('palette_show_st');
        var option1_obj= $('#zgpb-editor2-header').find('.zgpb-menu-show-palette');
         
        if(parseInt(option1)===1){
            option1_obj.html(option1_obj.parent().data('lbl-hide'));
        }else{
            option1_obj.html(option1_obj.parent().data('lbl-show'));
        }
    };
    this.elements_container_makeposition = function () {
               var coord_left = zgpb_front.getInnerVariable('palette_coord_left');
               var coord_top = zgpb_front.getInnerVariable('palette_coord_top');
                var button = $('#zgpb-editor2-header');
                $("#zgpb-palette-cont").dialog( "option", "position", { my: "left top", 
                    at: 'left' + (coord_left > 0 ? "+" + coord_left : '') + ' top' + (coord_top > 0 ? "+" + coord_top : ''),
                    of: button } );
             }; 
             
   
    
     
};
window.zgpb_front = zgpb_front = $.zgpb_front = new zgpb_fn_front();


})($zgpb,window);
} 