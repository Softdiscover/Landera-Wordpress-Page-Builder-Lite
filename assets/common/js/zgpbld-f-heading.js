(function($){
        
        var zgpbld_f_heading = function(element, options){
            var elem = $(element);
            var obj_main = this;
     var obj_quick_options = null;
            var defaults = {
                            data:{
                                type: 9,
                                id: '',
                                type_n:'ftext',
                                input1:{
                                    text:'here goes your content',
                                    size:'0',
                                    h_type:'1',
                                    bold:0,
                                    italic:0,
                                    underline:0,
                                    color:'#000',
                                    font:'{"family":"\'Comic Sans MS\', Arial, sans-serif","name":"Comic Sans MS","classname":"comicsansms"}',
                                    font_st:1,
                                    shadow_st:0,
                                    shadow_color:'#666',
                                    shadow_x:1,
                                    shadow_y:1,
                                    shadow_blur:3,
                                    obj_align:'0',
                                    max_width:'800',
                                    max_width_st:'0'
                                },
                                skin:{
                                    margin:{
                                           show_st:1,
                                           top:'23',
                                           bottom:'0',
                                           left:'0',
                                           right:'0'
                                    },
                                    padding:{
                                           show_st:1, 
                                           top:'0',
                                           bottom:'0',
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
           
              var zgpbvariable = [];
                zgpbvariable.innerVars = {};
                
           var setInnerVariable = function(name, value) {
                zgpbvariable.innerVars[name] = value;
            };
             
            var getInnerVariable = function(name) {
                if (zgpbvariable.innerVars[name]) {
                    return zgpbvariable.innerVars[name];
                } else {
                    return '';
                }
            };
            
            // Public method - can be called from client code
            this.publicMethod = function(){
            
            };
            this.showSettingTab= function(id_element) {
                            
                          //  var idselected= $('#zgpbld-field-selected-id').val();
                        
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
                                           case 'text':
                                              tab.find('#zgpb_fld_text_inp_txt').val(decodeURIComponent(opt4));
                                           break;
                                            case 'size':
                                             tab.find('#zgpb_fld_text_inp_size').val(opt4);
                                             break;
                                             case 'bold':
                                                 if(parseInt(opt4)===1){
                                                 tab.find('#zgpb_fld_text_inp_bold').parent().addClass('sfdc-active');
                                                 tab.find('#zgpb_fld_text_inp_bold').val(1);
                                                 }else{
                                                 tab.find('#zgpb_fld_text_inp_bold').parent().removeClass('sfdc-active');    
                                                 tab.find('#zgpb_fld_text_inp_bold').val(0);
                                                 }
                                                 break;
                                             case 'italic':
                                                 if(parseInt(opt4)===1){
                                                 tab.find('#zgpb_fld_text_inp_italic').parent().addClass('sfdc-active');
                                                 tab.find('#zgpb_fld_text_inp_italic').val(1);
                                                 }else{
                                                 tab.find('#zgpb_fld_text_inp_italic').parent().removeClass('sfdc-active');
                                                 tab.find('#zgpb_fld_text_inp_italic').val(0);
                                                 }
                                                 break;
                                             case 'underline':
                                                 if(parseInt(opt4)===1){
                                                 tab.find('#zgpb_fld_text_inp_u').parent().addClass('sfdc-active');
                                                 tab.find('#zgpb_fld_text_inp_u').val(1);
                                                 }else{
                                                 tab.find('#zgpb_fld_text_inp_u').parent().removeClass('sfdc-active');
                                                 tab.find('#zgpb_fld_text_inp_u').val(0);
                                                 }
                                                 break;
                                             case 'color':
                                                 tab.find('#zgpb_fld_text_inp_color').parent().colorpicker('setValue',opt4);
                                                 tab.find('#zgpb_fld_text_inp_color').val(opt4);
                                                 break;
                                             case 'font':
                                                 //if(value){
                                                 //tab.find('#uifm_fld_lbl_font').val('Marcellus SC')
                                                   zgpbUpdateFontSelect('zgpb_fld_text_inp_font',opt4);
                                                // }
                                                 break;
                                             case 'font_st':
                                                 if(parseInt(opt4)===1){
                                                 tab.find('#zgpb_fld_text_inp_font_st').prop('checked', true);    
                                                 }else{
                                                 tab.find('#zgpb_fld_text_inp_font_st').prop('checked', false);    
                                                 }
                                                 break;
                                             case 'shadow_st':
                                                 if(parseInt(opt4)===1){
                                                 tab.find('#zgpb_fld_text_inp_shadow_st').bootstrapSwitchZgpb('state', true);
                                                 }else{
                                                 tab.find('#zgpb_fld_text_inp_shadow_st').bootstrapSwitchZgpb('state', false);    
                                                 }
                                                 break;
                                             case 'shadow_color':
                                                 tab.find('#zgpb_fld_text_inp_shadow_color').parent().colorpicker('setValue',opt4);
                                                 tab.find('#zgpb_fld_text_inp_shadow_color').val(opt4);
                                                 break;
                                             case 'shadow_x':
                                                 tab.find('#zgpb_fld_text_inp_shadow_x').bootstrapSlider('setValue', parseInt(opt4));
                                                 break;
                                             case 'shadow_y':
                                                 tab.find('#zgpb_fld_text_inp_shadow_y').bootstrapSlider('setValue', parseInt(opt4));
                                                 break;
                                             case 'shadow_blur':
                                                 tab.find('#zgpb_fld_text_inp_shadow_blur').bootstrapSlider('setValue', parseInt(opt4));
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
                                            case 'h_type':
                                                /*reset*/
                                                tab.find('#zgpb_fld_text_inp_heading_2').parent().parent().find('input').prop('checked', false);
                                                tab.find('#zgpb_fld_text_inp_heading_2').parent().parent().find('label').removeClass('sfdc-active');
                                               switch (parseInt(opt4)) {
                                                       case 1:
                                                           tab.find('#zgpb_fld_text_inp_heading_2').prop('checked', true);
                                                           tab.find('#zgpb_fld_text_inp_heading_2').parent().addClass('sfdc-active');
                                                           break;
                                                       case 2:
                                                           tab.find('#zgpb_fld_text_inp_heading_3').prop('checked', true);
                                                           tab.find('#zgpb_fld_text_inp_heading_3').parent().addClass('sfdc-active');
                                                           break;
                                                       case 3:
                                                           tab.find('#zgpb_fld_text_inp_heading_4').prop('checked', true);
                                                           tab.find('#zgpb_fld_text_inp_heading_4').parent().addClass('sfdc-active');
                                                           break;
                                                       case 4:
                                                           tab.find('#zgpb_fld_text_inp_heading_5').prop('checked', true);
                                                           tab.find('#zgpb_fld_text_inp_heading_5').parent().addClass('sfdc-active');
                                                           break;
                                                       case 5:
                                                           tab.find('#zgpb_fld_text_inp_heading_6').prop('checked', true);
                                                           tab.find('#zgpb_fld_text_inp_heading_6').parent().addClass('sfdc-active');
                                                           break;    
                                                       case 0:
                                                       default:

                                                           tab.find('#zgpb_fld_text_inp_heading_1').prop('checked', true);
                                                           tab.find('#zgpb_fld_text_inp_heading_1').parent().addClass('sfdc-active');
                                                           break;    
                                                   }
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
                                            default:
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
                                                                     tab.find('#zgpb_fld_col_ctmid').val(opt4);  
                                                                    break;
                                                             case 'ctm_class':
                                                                     tab.find('#zgpb_fld_col_ctmclass').val(opt4);  
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
                            var f_max_width_st,f_max_width;
 
                             f_max_width_st=settings['data']['input1']['max_width_st'];
                             f_max_width=settings['data']['input1']['max_width'];  
                             
                               if(parseInt(f_max_width_st)===1){
                                 
                                 f_obj.find('.zgpb-input1-text').css('max-width',f_max_width+'px');
                                 f_obj.find('.zgpb-input1-text').removeCss('width');
                                  
                              }else{
                                  f_obj.find('.zgpb-input1-text').removeCss('max-width');
                                  f_obj.find('.zgpb-input1-text').css('width','100%');
                              }
                            
                        };
                        
                        this.previewfield_fontfamily = function (obj,container) {
                            var f_st,f_font;
 
                             f_st=settings['data']['input1']['font_st'];
                             f_font=settings['data']['input1']['font'];  

                              if(parseInt(f_st)===1 && f_font){
                                   var font_sel = JSON.parse(f_font);
                                 obj.find(container).css('font-family',font_sel.family);
                                  /*load font*/
                                    if ( undefined !== font_sel.import_family ) {
                                            var atImport = '@import url(//fonts.googleapis.com/css?family='+font_sel.import_family;
                                            $( '<style>' ).append( atImport ).appendTo( 'head' );
                                    }

                              }else{
                                 obj.find(container).removeCss('font-family');
                              }


                        };
                        
                        
                        this.previewfield_shadowBox = function (obj,container) {
                            var style,s_x,s_y,s_blur,s_st,s_color;

                             //status
                             
                             s_st=settings['data']['input1']['shadow_st'];
                              s_x=settings['data']['input1']['shadow_x'];  
                              s_y=settings['data']['input1']['shadow_y'];
                              s_blur=settings['data']['input1']['shadow_blur'];
                              s_color=decodeURIComponent(settings['data']['input1']['shadow_color']);

                              if(parseInt(s_st)===1){
                                  style=s_x+'px '+s_y+'px '+s_blur+'px '+s_color;
                                 obj.find(container).css('text-shadow',style);
                              }else{
                                  obj.find(container).removeCss('text-shadow');
                              }
                        };
                        
                        this.previewfield_input1 = function (obj) {
                            
                            this.previewfield_heading(obj);
                            
                            var  text,
                             size,
                             h_type,
                             bold,
                             italic,
                             underline,
                             color,
                             font,
                             font_st,
                             shadow_st,
                             shadow_x, 
                             shadow_y,
                             shadow_blur,
                             shadow_color;

                             //status
                             text=settings['data']['input1']['text'],
                             size=settings['data']['input1']['size'],
                             h_type=settings['data']['input1']['h_type'],
                             bold=settings['data']['input1']['bold'],
                             italic=settings['data']['input1']['italic'],
                             underline=settings['data']['input1']['underline'],
                             color=settings['data']['input1']['color'],
                             font=settings['data']['input1']['font'],
                             font_st=settings['data']['input1']['font_st'],
                             shadow_st=settings['data']['input1']['shadow_st'];
                             shadow_x=settings['data']['input1']['shadow_x'];  
                             shadow_y=settings['data']['input1']['shadow_y'];
                             shadow_blur=settings['data']['input1']['shadow_blur'];
                             shadow_color=decodeURIComponent(settings['data']['input1']['shadow_color']);
                             
                            
                             
                            var cur_el_obj_str;
                            var all_values;
                            var hash_str_all_values;
                            
                             all_values = settings['data']['input1'];
                              cur_el_obj_str = '#'+settings.data.id+' .zgpb-input1-text';
                              
                             //for hash purposes
                            hash_str_all_values = 'zgpb_'+settings.data.id+'_input1';
                            var style;
                            
                            if(hash_check(hash_str_all_values,all_values)){
                                if($('#'+hash_str_all_values)){
                                    $('#'+hash_str_all_values).remove();
                                }
                                
                                
                                    
                                     var str_ouput='<style type="text/css" id="'+hash_str_all_values+'">';
                                      str_ouput+=cur_el_obj_str+' h1,  ';
                                      str_ouput+=cur_el_obj_str+' h2,  ';
                                      str_ouput+=cur_el_obj_str+' h3,  ';
                                      str_ouput+=cur_el_obj_str+' h4,  ';
                                      str_ouput+=cur_el_obj_str+' h5,  ';
                                      str_ouput+=cur_el_obj_str+' h6 { ';
                                    
                                    
                                    /*style=h_shadow+'px '+v_shadow+'px '+blur+'px '+color;
                                    str_ouput+='box-shadow:'+style+';'; */
                                
                                    /*bold*/
                                    if(parseInt(bold)===1){
                                        str_ouput+='font-weight:bold;';
                                    }else{
                                        str_ouput+='font-weight:normal;';
                                    }
                                
                                     /*italic*/
                                    if(parseInt(italic)===1){
                                        str_ouput+='font-style:italic;';
                                    }
                                    
                                      /*underline*/
                                    if(parseInt(underline)===1){
                                        str_ouput+='text-decoration:underline;';
                                    }
                                    
                                     /*underline*/
                                    if(color){
                                        str_ouput+='color:'+color+';';
                                    } 
                                    
                                   /*font-size*/
                                   if(parseInt(size)!=0){
                                        str_ouput+='font-size:'+size+'px;'; 
                                    }
                                    
                                    if(parseInt(font_st)===1 && font){
                                        var font_sel = JSON.parse(font);
                                        
                                         str_ouput+='font-family:'+font_sel.family+';'; 
                                      
                                   // obj.find(container).css('font-family',font_sel.family);
                                       /*load font*/
                                         if ( undefined !== font_sel.import_family ) {
                                                 var atImport = '@import url(//fonts.googleapis.com/css?family='+font_sel.import_family;
                                                 $( '<style>' ).append( atImport ).appendTo( 'head' );
                                         }

                                   }
                                    
                                    
                                    /*shadow*/
                                    if(parseInt(shadow_st)===1){
                                       style=shadow_x+'px '+shadow_y+'px '+shadow_blur+'px '+shadow_color;
                                      
                                        str_ouput+='text-shadow:'+style+';'; 
                                    } 
                                    
                                    
                                    str_ouput+='} ';
                                    str_ouput+='</style>';
                                    $('head').append(str_ouput);
                                     
                                            
                            } 
                              
                              
                             
                        };
                        
                        /* check hash and refresh preview once*/
                        var hash_check=function(opt_str_hash,all_values){
                             var hash_str_all_values = opt_str_hash;
                            
                            var valhash = CryptoJS.MD5(JSON.stringify(all_values));
                          
                            var f_checkhash = getInnerVariable(hash_str_all_values);
                             
                            if(String(f_checkhash)===String(valhash)  ){
                                
                                return false;
                            }else{
                                //update check hash to avoid refresh preview again
                                 setInnerVariable(hash_str_all_values,CryptoJS.MD5(JSON.stringify(all_values))) ;
                                return true;
                               
                            }
                        }
                        
                        this.previewfield_heading = function (obj) {
                            var text,h_type;
                           
                             //status
                             
                             text=settings['data']['input1']['text'];
                             h_type=settings['data']['input1']['h_type'];  
                             var str_ouput='';
                             switch(parseInt(h_type)){
                                 case 1:
                                 str_ouput+='<h2>'+decodeURIComponent(text)+'</h2>';
                                 break;
                                 case 2:
                                 str_ouput+='<h3>'+decodeURIComponent(text)+'</h3>';
                                 break;
                                 case 3:
                                 str_ouput+='<h4>'+decodeURIComponent(text)+'</h4>';
                                 break;
                                 case 4:
                                 str_ouput+='<h5>'+decodeURIComponent(text)+'</h5>';
                                 break;
                                case 5:
                                 str_ouput+='<h6>'+decodeURIComponent(text)+'</h6>';
                                 break;
                                case 0:
                                 default:
                                     str_ouput+='<h1>'+decodeURIComponent(text)+'</h1>';
                                     break;
                             }
                             
                             obj.find('.zgpb-input1-text').html(str_ouput);
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
                                            case 'text':
                                            case 'h_type':
                                            case 'size':
                                            case 'bold':
                                            case 'italic':
                                            case 'underline':
                                            case 'color':
                                            case 'font':
                                            case 'font_st':
                                            case 'shadow_st':
                                            case 'shadow_color':
                                            case 'shadow_x':
                                            case 'shadow_y':
                                            case 'shadow_blur':                                       
                                                 this.previewfield_input1(f_obj);
                                                 break;
                                            case 'obj_align':
                                                switch (parseInt(opt4)) {
                                                        case 1:
                                                           f_obj.find('.zgpb-input1-text').parent().css('text-align','center');

                                                            break; 
                                                        case 2:
                                                            f_obj.find('.zgpb-input1-text').parent().css('text-align','right');

                                                            break;
                                                        case 0:    
                                                        default:
                                                            f_obj.find('.zgpb-input1-text').parent().css('text-align','left');

                                                            break;
                                                    }
                                                break;
                                            case 'max_width':
                                          case 'max_width_st':     
                                               this.previewfield_maxwidth(f_obj);
                                                
                                                break;
                                            default:    
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
                                    switch(String(f_opt2)){
                                        case 'text':
                                            zgpb_core.setUiData4('fields_src',String(id),String(f_opt1),String(f_opt2),encodeURIComponent(f_opt4));
                                            break;
                                        case 'size':
                                        case 'bold':
                                        case 'italic':
                                        case 'underline':
                                        case 'color':
                                        case 'font':
                                        case 'font_st':
                                        case 'shadow_st':
                                        case 'shadow_color':
                                        case 'shadow_x':
                                        case 'shadow_y':
                                        case 'shadow_blur':    
                                        case 'obj_align':
                                        case 'max_width':  
                                        case 'max_width_st':
                                        default:
                                            zgpb_core.setUiData4('fields_src',String(id),String(f_opt1),String(f_opt2),f_opt4);
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
                                var tab=$('#zgpb-modal1');
                                zgpb_core.fields_events_bswitch(tab);
                                 zgpb_core.fields_events_spinner(tab);
                                 zgpb_core.fields_events_general();
                                  zgpb_core.fields_events_cpicker(tab);
                                  zgpb_core.fields_events_slider(tab);
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
        
        $.fn.zgpbld_f_heading = function(options){
            return this.each(function(){
            var element = $(this);

            // Return early if this element already has a plugin instance
            if (element.data('zgpbld_f_heading')) return;

            // pass options to plugin constructor
            var myplugin = new zgpbld_f_heading(this, options);

            // Store plugin object in this element's data
            element.data('zgpbld_f_heading', myplugin);
            });
        };
})($zgpb);

