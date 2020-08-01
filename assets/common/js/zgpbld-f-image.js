(function($){
        
        var zgpbld_f_image = function(element, options){
            var elem = $(element);
            var obj_main = this;
             var obj_quick_options = null;
            
            var defaults = {
                            data:{
                                type: 11,
                                id: '',
                                type_n:'fimage',
                                input1:{
                                    img_desc:'here goes your description',
                                    img_src:'',
                                    obj_align:'0',
                                    max_width:'800',
                                    max_width_st:'0'
                                },
                                skin:{
                                    margin:{
                                           show_st:1,
                                           top:'0',
                                           bottom:'0',
                                           left:'0',
                                           right:'0'
                                    },
                                    padding:{
                                           show_st:1,
                                           top:'5',
                                           bottom:'5',
                                           left:'0',
                                           right:'0'
                                    },
                                    custom_css:{
                                        ctm_id:'',
                                        ctm_class:'',
                                        ctm_additional:''
                                    }
                                  }
                                }
                        };
           var settings = $.extend(true,{}, defaults, {data:options});
            // Public method - can be called from client code
            this.publicMethod = function(){
            
            };
            this.showSettingTab= function(id_element) {
                            
                          //  var idselected= $('#zgpbld-field-selected-id').val();
                        
			}
           
            this.enableSettingOptions= function(id_element) {
                             //  this.showSettingTab();
                            
                                 //  if(rocketform.checkIntegrityDataField(id_element)){
                                 //  //setting data values to settings tab
                                  //  rocketform.setDataToSettingTabAndPreview(id_element,settings.data);    
                                 
                                     
                                 //  }
                             
			}
            // Private method - can only be called from within this object
            var privateMethod = function(){
            
            };
            
                        var typeID=function(){
                           return field_type;
			}
			
                        this.setOptionsToModal = function(vars){
                            
                            var tab=$('#zgpb-modal1');
                            var opt1=vars['opt1'],
                                opt2=vars['opt2'],
                                opt3=vars['opt3'],
                                opt4=vars['opt4'];
                            switch(String(opt1)) {
                               case 'input1':
                                     switch(String(opt2)) {
                                            case 'img_desc':
                                                 
                                                break;
                                           case 'img_src':
                                                 tab.find('#zgpb-field-image-src').val(decodeURIComponent(opt4));
                                                break;     
                                           case 'max_width':
                                                 tab.find('#zgpb_fld_text_inp_maxwidth').val(opt4);
                                                 break;
                                            case 'max_width_st':
                                                 if(parseInt(opt4)===1){
                                                 tab.find('#zgpb_fld_text_inp_maxwidth_st').prop('checked', true);    
                                                 }else{
                                                 tab.find('#zgpb_fld_text_inp_maxwidth_st').prop('checked', false);    
                                                 }
                                                 break;      
                                             case 'obj_align':
                                                /*reset*/
                                                tab.find('#zgpb_fld_text_inp_objalign_2').parent().parent().find('input').prop('checked', false);
                                                tab.find('#zgpb_fld_text_inp_objalign_2').parent().parent().find('label').removeClass('sfdc-active');
                                               switch (parseInt(opt4)) {
                                                       case 1:
                                                           tab.find('#zgpb_fld_text_inp_objalign_2').prop('checked', true);
                                                           tab.find('#zgpb_fld_text_inp_objalign_2').parent().addClass('sfdc-active');
                                                           break;
                                                       case 2:
                                                           tab.find('#zgpb_fld_text_inp_objalign_3').prop('checked', true);
                                                           tab.find('#zgpb_fld_text_inp_objalign_3').parent().addClass('sfdc-active');
                                                           break;
                                                       case 0:
                                                       default:

                                                           tab.find('#zgpb_fld_text_inp_objalign_1').prop('checked', true);
                                                           tab.find('#zgpb_fld_text_inp_objalign_1').parent().addClass('sfdc-active');
                                                           break;    
                                                   }
                                               break;     
                                        }
                                    break;
                               case 'skin':
                                    switch(String(opt2)) {
                                            case 'margin':
                                                /*check if touchspin is enabled*/
                                                switch(String(opt3)) {
                                                                case 'top':
                                                                    tab.find('#zgpb_fld_col_margin_top').val(opt4);
                                                                    break;
                                                                case 'bottom':
                                                                    tab.find('#zgpb_fld_col_margin_bottom').val(opt4);
                                                                    break;
                                                                case 'left':
                                                                    tab.find('#zgpb_fld_col_margin_left').val(opt4);
                                                                    break;
                                                                case 'right':
                                                                    tab.find('#zgpb_fld_col_margin_right').val(opt4);
                                                                    break;    
                                                            }
                                                          
                                                break;
                                            case 'padding':
                                                  /*check if touchspin is enabled*/
                                                switch(String(opt3)) {
                                                                case 'top':
                                                                    tab.find('#zgpb_fld_col_padding_top').val(opt4);
                                                                    break;
                                                                case 'bottom':
                                                                    tab.find('#zgpb_fld_col_padding_bottom').val(opt4);
                                                                    break;
                                                                case 'left':
                                                                    tab.find('#zgpb_fld_col_padding_left').val(opt4);
                                                                    break;
                                                                case 'right':
                                                                    tab.find('#zgpb_fld_col_padding_right').val(opt4);
                                                                    break;    
                                                            }
                                                break;
                                           
                                           case 'custom_css':
                                                switch(String(opt3)) {
                                                             case 'ctm_id':
                                                                     tab.find('#zgpb_fld_col_ctmid').val(decodeURIComponent(opt4));  
                                                                    break;
                                                             case 'ctm_class':
                                                                     tab.find('#zgpb_fld_col_ctmclass').val(decodeURIComponent(opt4));  
                                                                    break;
                                                             case 'ctm_additional':
                                                                 tab.find('#zgpb_fld_ctmaddt').val(opt4);
                                                                    break;       
                                                            }
                                                break;     
                                        }
                                    break;     
                            }
                        }
                        
                        this.previewfield_maxwidth = function (f_obj) {
                            /*var f_max_width_st,f_max_width;
 
                             f_max_width_st=settings['data']['input1']['max_width_st'];
                             f_max_width=settings['data']['input1']['max_width'];  
                             
                              if(parseInt(f_max_width_st)===1){
                                 
                                 f_obj.find('.zgpb-input1-text').css('max-width',f_max_width+'px');
                                 f_obj.find('.zgpb-input1-text').removeCss('width');
                                  
                              }else{
                                  f_obj.find('.zgpb-input1-text').removeCss('max-width');
                                  f_obj.find('.zgpb-input1-text').css('width','100%');
                              }*/
                            
                        };
                        
                        this.setOptionsToPreview = function(vars){
                             var f_obj = elem;
                            var opt1=vars['opt1'],
                                opt2=vars['opt2'],
                                opt3=vars['opt3'],
                                opt4=vars['opt4'];
                         
                                
                            switch(String(opt1)) {
                                case 'input1':
                                     switch(String(opt2)) {
                                            case 'img_desc':
                                                 
                                                break;
                                            case 'img_src':
                                                 var tmp_txt=decodeURIComponent(opt4);
                                                
                                                f_obj.find('.zgpb-input1-image img').attr('src',tmp_txt);
                                                break;
                                            case 'max_width':
                                          case 'max_width_st':     
                                               this.previewfield_maxwidth(f_obj);
                                               break;
                                            case 'obj_align':
                                                  switch (parseInt(opt4)) {
                                                          case 1:
                                                             f_obj.find('.zgpb-input1-image').parent().css('text-align','center');

                                                              break; 
                                                          case 2:
                                                              f_obj.find('.zgpb-input1-image').parent().css('text-align','right');

                                                              break;
                                                          case 0:    
                                                          default:
                                                              f_obj.find('.zgpb-input1-image').parent().css('text-align','left');

                                                              break;
                                                      }
                                                  break;    
                                        }
                                    break;
                               case 'skin':
                                    switch(String(opt2)) {
                                            case 'margin':
                                                switch(String(opt3)) {
                                                                case 'top':
                                                                    
                                                                        f_obj.find('.zgpb-input1-container').css('margin-top',opt4+'px');
                                                                    break;
                                                                case 'bottom':
                                                                        f_obj.find('.zgpb-input1-container').css('margin-bottom',opt4+'px');
                                                                    
                                                                    break;
                                                                case 'left':
                                                                        f_obj.find('.zgpb-input1-container').css('margin-left',opt4+'px');
                                                                    
                                                                    break;
                                                                case 'right':
                                                                     
                                                                        f_obj.find('.zgpb-input1-container').css('margin-right',opt4+'px');
                                                                    break;    
                                                            }
                                                       
                                                break;
                                            case 'padding':
                                                    switch(String(opt3)) {
                                                                case 'top':
                                                                     
                                                                        f_obj.find('.zgpb-input1-container').css('padding-top',opt4+'px');
                                                                     
                                                                    break;
                                                                case 'bottom':
                                                                    
                                                                        f_obj.find('.zgpb-input1-container').css('padding-bottom',opt4+'px');
                                                                    
                                                                    break;
                                                                case 'left':
                                                                     
                                                                        f_obj.find('.zgpb-input1-container').css('padding-left',opt4+'px');
                                                                     
                                                                    break;
                                                                case 'right':
                                                                    
                                                                        f_obj.find('.zgpb-input1-container').css('padding-right',opt4+'px');
                                                                     
                                                                    break;    
                                                            }
                                                break;
                                            
                                        }
                                    break;     
                            }
                        }
                        
                        this.updateVarData=function(id){
                            $('#'+id).data('zgpb-settings',settings);
                        }
                        this.update_previewfield=function(id_element){
                            var obj_field= $('#'+id_element);
                            if(obj_field){
                                this.enableSettingOptions_process(settings.data,false,true);
                                //zgpb_front.loadForm_updatePreviewField(id_element,settings.data);
                            }
                        }
                        this.setToDatalvl1=function(option,value){
                            settings.data[option]=value;
                        }
                        
                        
                        this.onWholeHover = function(e){
                            
                            /*adding quick option to column*/  
                            var tmp_tmpl= wp.template("zgpb-quick-options");
                            if(parseInt($(this).find('.zgpb-fields-quick-options2').length)===0){
                                  $(this).append(tmp_tmpl( { 
                                                      type : settings.data.type,
                                                      id:settings.data.id
                                              } ));
                            }
                                 obj_quick_options = elem.find('.zgpb-fields-quick-options2');
                                obj_main.refresh_quickopt_position();

                              }

                          this.offWholeHover = function(e){
                              
                              if(parseInt($(this).find('.zgpb-fields-quick-options2').length)>0){
                                  $(this).find('.zgpb-fields-quick-options2').remove();
                            } 


                          }
                        
                        this.init_events=function(){
                             
                            elem.on( "mouseenter", obj_main.onWholeHover );
                            elem.on( "mouseleave", obj_main.offWholeHover );
                            
                             $(window).scroll(function(){
                               
                                obj_main.refresh_quickopt_position();
                             
                              });
                        }
                        
                        
                      this.refresh_quickopt_position = function(){
                            if(obj_quick_options && obj_quick_options.is(':visible')){
                                      var elemTop = $(elem).offset().top||null;
                                      var elemBottom = elemTop + $(elem).height();
                                       
                                      var docViewTop = $(window).scrollTop();
                                     
                                        var docViewBottom = docViewTop + $(window).height();
                                      
                                      var tmp_new_top;
                                      
                                      if((elemTop > docViewTop) &&  (elemBottom < docViewBottom)){
                                           
                                          tmp_new_top = ((elemBottom - elemTop)/2).toString()+'px';
                                      }  else if(( elemTop > docViewTop ) &&  (elemBottom > docViewBottom)){
                                          
                                           tmp_new_top = ((docViewBottom - elemTop)/2).toString()+'px';
                                      }  else if((elemTop < docViewTop) &&  (elemBottom < docViewBottom)){
                                          
                                          tmp_new_top = ((docViewTop - elemTop)+(elemBottom - docViewTop)/2).toString()+'px';
                                      
                                      } else if((elemTop < docViewTop) &&  (elemBottom > docViewBottom)){
                                          
                                          tmp_new_top = ((docViewTop - elemTop)+($(window).height())/2).toString()+'px';
                                      }else{
                                         
                                          tmp_new_top ='50%';
                                      }
                                      
                                      obj_quick_options.css('top',tmp_new_top); 
                            }
                             
                        }
                        
                        this.setDataToCoreStore =function(id){
                            //set to main array
                            zgpb_core.setUiData2('fields_src',id,settings.data);
                           
                        }
                        
                        this.setDataToCore =function(tmp_vars){
                        
                            
                            var id=tmp_vars['id'],
                                f_opt1=tmp_vars['opt1'],
                                f_opt2=tmp_vars['opt2'],
                                f_opt3=tmp_vars['opt3'],
                                f_opt4=tmp_vars['opt4'];
                                
                            switch(String(f_opt1)){
                                case 'input1':
                                    zgpb_core.setUiData4('fields_src',String(id),String(f_opt1),String(f_opt2),encodeURIComponent(f_opt4));
                                    break;
                                case 'max_width':   
                                case 'max_width_st':
                                case 'obj_align':
                                    zgpb_core.setUiData4('fields_src',String(id),String(f_opt1),String(f_opt2),f_opt4);
                                    break;    
                                case 'skin':
                                    switch(String(f_opt2)){
                                        case 'custom_css':
                                            zgpb_core.setUiData5('fields_src',String(id),String(f_opt1),String(f_opt2),String(f_opt3),encodeURIComponent(f_opt4));
                                        break;
                                        default:
                                            zgpb_core.setUiData5('fields_src',String(id),String(f_opt1),String(f_opt2),String(f_opt3),f_opt4);
                                        break;        
                                    }
                                    break;
                                default:
                                    zgpb_core.setUiData5('fields_src',String(id),String(f_opt1),String(f_opt2),String(f_opt3),f_opt4);
                            }    
                             
                        }
                        
                    
                        
                        this.enableSettingOptions_process =function(f_data,update_modal,update_preview){
                            
                          if(update_modal){  
                                 /*loading events*/
                                var modal_box=$('#zgpb-modal1');
                                 zgpb_core.fields_events_spinner(modal_box);
                                 zgpb_core.fields_events_general();
                               

                                    
                              /*images*/
                                $('.zgpb-opt-img-wrap').zgth_opt_picture();
 
                             
                           
                           }
                           
                           var tmp_vars;
                           $.each(f_data, function(index3, value3) {
                               if($.isPlainObject(value3)){
                                    $.each(value3, function(index4, value4) {
                                         if($.isPlainObject(value4)){
                                             
                                            
                                             $.each(value4, function(index5, value5) {
                                                 if($.isPlainObject(value5)){
                                                     
                                                 }else{
                                                     tmp_vars=[];
                                                    tmp_vars['opt1']=index3;
                                                    tmp_vars['opt2']=index4;
                                                    tmp_vars['opt3']=index5;
                                                    tmp_vars['opt4']=value5;
                                                    
                                                    if(update_modal){
                                                        obj_main.setOptionsToModal(tmp_vars);
                                                    }
                                                     
                                                    if(update_preview){
                                                        obj_main.setOptionsToPreview(tmp_vars);
                                                    }
                                                     
                                                 }
                                             });
                                         }else{
                                              tmp_vars=[];
                                              tmp_vars['opt1']=index3;
                                              tmp_vars['opt2']=index4;
                                              tmp_vars['opt3']=null;
                                              tmp_vars['opt4']=value4;
                                             
                                             if(update_modal){
                                                obj_main.setOptionsToModal(tmp_vars);
                                             }
                                             
                                             if(update_preview){
                                                obj_main.setOptionsToPreview(tmp_vars);
                                             }
                                              
                                         }
                                    });
                               }
                           });
                           
                           
                        }
                        
                        this.enableSettingOptions =function(f_data,addt){
                            
                            
                            this.enableSettingOptions_process(f_data,true,true);
                            //hide modal field loader
                            zgpb_core.modal_field_loader(0);
                        }
                        
                        
        };
        
        $.fn.zgpbld_f_image = function(options){
            return this.each(function(){
            var element = $(this);

            // Return early if this element already has a plugin instance
            if (element.data('zgpbld_f_image')) return;

            // pass options to plugin constructor
            var myplugin = new zgpbld_f_image(this, options);

            // Store plugin object in this element's data
            element.data('zgpbld_f_image', myplugin);
            });
        };
})($zgpb);

