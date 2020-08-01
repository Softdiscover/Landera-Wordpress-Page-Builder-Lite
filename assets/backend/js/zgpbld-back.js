if(typeof($zgpb) === 'undefined') {
	$zgpb = jQuery;
}
var zgpb_back = zgpb_back || null;
if(!$zgpb.isFunction(zgpb_back)){
(function($, window) {
 "use strict";  
    
var zgpb_fn_back = function(){
     var zgpbvariable = [];
    zgpbvariable.innerVars = {};
    zgpbvariable.externalVars = {};
    
    var zgpb_is_dragging = false;
      
     
    this.initialize = function() {
                   
                //hide loader
                zgpb_core.loader_one_show(0);
                zgpb_core.hideLoader();   
                   
                //show palette container
               // this.elements_container_initshow();
                
                //adding classes
                $('html').addClass('zgpb-builder-mode-edit');
		$('body').addClass('zgpb-builder-active');
               // $('html').addClass('sfdc-wrap');
                
        
               //show palette container
                this.elements_container_initshow();
        
              //set external
              this.setExternalVars();
              
               //add main editor container
                zgpb_core.setMainContainer();
                
              //load admin and content panel
              if(parseInt(zgbdVariables.zgpb_is_enabled)===1){
                   zgpb_back.load_admin_panel();
                          
                }
              
              
            //capture publish button
                
                $('#publish').one('click', function( event ) {
                    event.preventDefault();
                    
                    if(parseInt(zgpb_core.getInnerVariable('zgpb_is_enabled'))===1){
                        
                        zgpb_core.setInnerVariable('zgpb_send_wp_publish','1');
                        zgpb_core.setInnerVariable('zgpb_send_wp_publish_var1','#publish');
                        
                        zgpb_core.savePage_publishStatus();
                    }else{
                        $('#publish').trigger( "click" );
                    }
                    
                  
                    return true;

                });

            //capture draft button    
               $('#save-post').one('click', function( event ) {
                    event.preventDefault();
                    
                    if(parseInt(zgpb_core.getInnerVariable('zgpb_is_enabled'))===1){
                        
                        zgpb_core.setInnerVariable('zgpb_send_wp_publish','1');
                        zgpb_core.setInnerVariable('zgpb_send_wp_publish_var1','#save-post');
                        
                        zgpb_core.savePage_DraftStatus();
                    }else{
                        $('#save-post').trigger( "click" );
                    }
                    
                  
                    return true;

                });   


                //if (SubmitButton)   {SubmitButton.addEventListener("click", SubmCLICKED, false);}
                //if (PublishButton)  {PublishButton.addEventListener("click", SubmCLICKED, false);}
                /*function SubmCLICKED(e){   
                    console.log(zgbdVariables.zgpb_is_enabled);
                    var passed= false;
                   if(!document.getElementById(field_id)) {
                        alert("I cant find that field ID !!"); 
                    } else {
                        var Enabled_Disabled= document.getElementById(field_id).value;
                        if (Enabled_Disabled == "" ) {
                            alert("Field is Empty");   
                        }  else{
                            passed=true;
                        }
                    }
                    
                    if (!passed) { 
                        e.preventDefault(); 
                        
                        $(SubmitButton).submit();
                        return true;
                    }
                }*/
                
                //enable menu options
                this.refresh_menuOptions();
                
                //enable event
                this.init_events();
            };
    this.load_admin_panel = function(){
        
                   //scroll event
                 $(window).scroll(function(){
                    
                    //positioning palette
                    //zgpb_back.elements_container_makeposition();
                })
              
               
               var tmp_vars=[];
                tmp_vars['editor_container']='.zgpb-editor1-body-main-inner';
                //fire content
                 zgpb_core.getPostContent(tmp_vars);
    } 
    
    
     this.test_showModal = function(){
        
       /* $("#zgpb-modal1").find('.sfdc-modal-dialog').css({'top': 10, 'left' : 20});
        
        $("#zgpb-modal1").modal({
            show: true,
            backdrop: 'static',
            keyboard: false
        });*/
        
       /* zgpb_core.showLoader(1);
        
        $('.zgpb-field-test').zgpbld_grid();*/
        
      // var tmp_vars=[];
      //      //    tmp_vars['editor_container']='.zgpb-editor1-body-main-inner';
                //fire content
              //  zgpb_core.getPostContent(tmp_vars);
         zgpb_back.load_admin_panel();
        
        
        
        
    };
    
      this.test_showModal2 = function(){
        
      
    };
    
    this.init_events = function() {
          $('#zgpb-back-opt-menu .zgpb-back-menu-opt').on('click', function(e) {
            /*prevent double click*/
                e.preventDefault();
                
                var element = $(this);
                var tmp_opt = element.attr('data-zgpb-option');
                switch(parseInt(tmp_opt)){
                    case 1:
                        //no builder
                      
                       zgpb_core.setInnerVariable('zgpb_is_enabled','0');
                       zgpb_back.switchmenuopts_refresh();
                        break;
                    case 2:
                        //backend builder
                        
                       if(parseInt(zgpb_core.getInnerVariable('zgpb_postcont_is_loaded'))!=1 ){
                            //show loader
                            zgpb_core.loader_one_show(1);
                            zgpb_core.showLoader(1,true,false);
                
                       }
                     
                       zgpb_core.setInnerVariable('zgpb_is_enabled','1');
                       zgpb_back.switchmenuopts_refresh();
                        break;
                    case 3:
                        //frontend builder
                       
                        //zgpb_core.setInnerVariable('zgpb_is_enabled','1');
                         zgpb_core.setInnerVariable('zgpb_go_frontend_mode','1');
                        zgpb_core.savePage_DraftStatus();
                        
                        //var tmp_url = $(this).attr('data-zgpb-href');
                        //zgpb_core.redirect_tourl(tmp_url);
                        break;
                }
                
                
              
        });
    }
    
    this.switchmenuopts_refresh = function() {
        
        var $tmp_var_async=true;
        if(parseInt(zgpb_core.getInnerVariable('zgpb_postcont_is_loaded'))!=1 ){
            $tmp_var_async=false;    
        }
        
        $.ajax({
                type: 'POST',
                async: $tmp_var_async,
                url: zgpbld_vars.url_ajax,
                data: {
                    'action': 'zgpb_builder_refresh_menuoptions',
                    'page':'zgpb_page_builder',
                    'zgpb_security':zgpbld_vars.ajax_nonce,
                    'zgpb_is_enabled':zgpb_core.getInnerVariable('zgpb_is_enabled'),
                    'post_id':zgbdVariables.post_id
                    },
                success: function(msg) {
                 
                  if(parseInt(zgpb_core.getInnerVariable('zgpb_postcont_is_loaded'))!=1 ){
                        
                           zgpb_back.load_admin_panel();
                           
                      }
                 
                 
                }
            });
    }
    
    
    this.refresh_menuOptions = function() {
                
                $('#zgpb-back-opt-menu').find('.sfdc-btn').removeClass('sfdc-active');
                if(parseInt(zgbdVariables.zgpb_is_enabled)===1){
                    
                    $('#zgpb-back-opt-menu').find('#zgpb-back-menu-opt-2').trigger( "click" );
                    $('#zgpb-back-opt-menu').find('#zgpb-back-menu-opt-2').addClass('sfdc-active');
                    
                }else{
                    $('#zgpb-back-opt-menu').find('#zgpb-back-menu-opt-1').trigger( "click" );
                    $('#zgpb-back-opt-menu').find('#zgpb-back-menu-opt-1').addClass('sfdc-active');
                }
                 
            };        
    this.setExternalVars = function() {
            zgpbvariable.externalVars["class_main_content"] ='.zgpb-main-content-';
            zgpbvariable.externalVars["palettebox_is_shown"] = false;
            
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
    
    
    
    
    this.showLogMessage = function (msg) {
               
             };
    
     
    
     
    this.editor1_palette = function(){
        
        var instance;
        
       if($('#zgpb-editor1-body').data('zgpbld_admin_panel')){
             // .calculate();
               
            }else{
               $('#zgpb-editor1-body').zgpbld_admin_panel(); 
            } 
            
         instance=  $('#zgpb-editor1-body').data('zgpbld_admin_panel');
         return instance;
    }
    
    this.menuoption_switchBackendEditor = function(element,opt){
        var el=$(element);
        var menu_opt=parseInt(opt);
        
        $('.zgpb-back-menu-opt').data('zgpb-enabled',0);
        $('.zgpb-back-menu-opt').removeClass('sfdc-active');
        
        
        el.data('zgpb-enabled',1);
        el.addClass('sfdc-active');
        
        if(menu_opt===2){
            $('#zgpb-editor1-container').show();
            $('#postdivrich').hide();
            
            //refresh panels
            this.editor1_palette().calculate();
            
        }else{
            $('#postdivrich').show();
            $('#zgpb-editor1-container').hide();  
        }
        
        /*fix when wp editor is not showing fine after switching menu buttons*/
        $(window).scroll();
    } 
   
    this.menuoptions_undockPalette = function(){
         this.editor1_palette().hideLeft();
         //update palette switcher
         var tmp_obj=$('#zgpb-menuoption-palette-switcher');
         tmp_obj.attr('data-zgpb-status',2);
         tmp_obj.html(tmp_obj.attr('data-lbl-dock'));
         
         
         
         //show float palette
         this.menuoptions_paletteBox(1);
         
          //$('#zgpb-palette-cont').show();
    }
    
    this.menuoptions_closePalette = function(){
       
    }
    
    this.menuoptions_paletteBox = function(show){
        
        //var option1 = zgpb_front.getInnerVariable('palette_show_st');
        
        if(parseInt(show)===1){
         $('#zgpb-palette-cont').show();   
         
            //update variable
           this.setInnerVariable('palette_coord_top',51);
           this.setInnerVariable('palette_coord_left',0);
           this.setInnerVariable('palette_show_st',1);

            $("#zgpb-palette-cont").dialog( "open" );
         
        }else{
            $("#zgpb-palette-cont").dialog( "close" ); 
            //update variable
            this.setInnerVariable('palette_show_st',0);
        }
    }
    
    this.menuoptions_dockPalette = function(){
         
         //update palette switcher
         var tmp_obj=$('#zgpb-menuoption-palette-switcher');
         tmp_obj.attr('data-zgpb-status',0);
         tmp_obj.html(tmp_obj.attr('data-lbl-hide'));
         
         
        //hide float palette
         this.menuoptions_paletteBox(0);
         
        //show left panel
        this.editor1_palette().showLeft();
         
    }
    
    this.menuoptions_switchPalette = function(element){
         var el=$(element);
        
         switch(parseInt(el.attr('data-zgpb-status'))){
            case 1:
                //show left
                el.attr('data-zgpb-status',0);
             break;
            case 2:
                //dock
                el.attr('data-zgpb-status',0);
          
             break;
            case 0:
            //hide label
            default:
                el.attr('data-zgpb-status',1);
                
         }
          
         switch(parseInt(el.attr('data-zgpb-status'))){
            case 1:
                el.html(el.attr('data-lbl-show'));
               // this.menuoptions_dockPalette();
               
                //hide left panel
                 this.editor1_palette().hideLeft();
               
                //hide float palette
                this.menuoptions_paletteBox(0);
                
             break;
            case 2:
                //dock
                el.html(el.attr('data-lbl-dock'));
                 this.menuoptions_undockPalette();
                
                //hide float palette
                 this.menuoptions_paletteBox(0);
 
             break;
            case 0:
            //hide label
            default:
                el.html(el.attr('data-lbl-hide'));
                this.editor1_palette().showLeft();
                
                //hide float palette
                this.menuoptions_paletteBox(0);
                 
         }
         
    }
    
    this.elements_container_makeposition = function () {
               var coord_left = zgpb_back.getInnerVariable('palette_coord_left');
               var coord_top = zgpb_back.getInnerVariable('palette_coord_top');
               
                var button = $('#zgpb-back-opt-menu');
                $("#zgpb-palette-cont").dialog( "option", "position", { my: "left top", 
                    at: 'left' + (coord_left > 0 ? "+" + coord_left : '') + ' top' + (coord_top > 0 ? "+" + coord_top : ''),
                    of: button } );
             };
             
     this.elements_container_initshow = function () {
        
        
        var dialog_new_btns =$('#zgpb-editor1-hiddens-dialog-icons').html();
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
                        
                        if(!tmp_titlebar.find('.zgpb-editor1-header-icons').length){
                            tmp_titlebar.append(dialog_new_btns);
                            
                            tmp_titlebar.find('.ui-dialog-title').css('width','87%');
                            tmp_titlebar.find('.ui-dialog-titlebar-close').hide();
                        }
                    
                 
                    },
                    dragStop: function(e, ui) {
                        zgpb_back.elements_container_saveCoords(ui.offset.top, ui.offset.left);
                      },
                    close: function(e, ui) {
                        //zgpb_back.elements_container_saveCloseStatus();
                      },
                });
                
               
                this.setInnerVariable('palette_coord_top',51);
                this.setInnerVariable('palette_coord_left',0);
                this.setInnerVariable('palette_show_st',1);
                
                //update header options
                //this.header_options_update();
                
                // positioning palette
                this.elements_container_makeposition();
                
                //hide float palette
                 this.menuoptions_paletteBox(0);
                
             };
    this.elements_container_saveCoords = function (vartop,varleft) {
               this.setInnerVariable('palette_coord_top',vartop);
                this.setInnerVariable('palette_coord_left',varleft);
             }; 
    this.elements_container_saveCloseStatus = function(){
        zgpb_back.setInnerVariable('palette_show_st',0);
        
        //update header options
       // zgpb_back.header_options_update();
    };         
 
    
};
window.zgpb_back = zgpb_back = $.zgpb_back = new zgpb_fn_back();


})($zgpb,window);
} 