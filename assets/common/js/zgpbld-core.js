if(typeof($zgpb) === 'undefined') {
	$zgpb = jQuery;
}
var zgpb_core = zgpb_core || null;
if(!$zgpb.isFunction(zgpb_core)){
(function($, window) {
 "use strict";  
    
var zgpb_fn_core = function(){
     var zgpbvariable = [];
    zgpbvariable.innerVars = {};
    zgpbvariable.externalVars = {};
     
     
    var zgpb_is_dragging = false;
    
    var zgpb_field_dragged;
    
    var flag_tinymce_loaded=false; 
     
    var mstorezgpb = {
                    app_ver:'1',
                    main:{
                        add_css:'',
                        add_js:''
                    },
                    fields_design:{},
                    fields_src:{}
    }; 
     
     this.getUiData = function(name) {
                return mstorezgpb[name];
            };
    this.setUiData = function(name,value) {
         
                mstorezgpb[name]=value;
            };
     this.delUiData = function(name) {
                delete mstorezgpb[name];
            };        
    this.getUiData2 = function(name,index) {
                try{
                return mstorezgpb[name][index];
                    }
                catch(err) {
                    console.log('error getUiData2: '+err.message);
                } 
            };
     this.delUiData2 = function(name,key) {
                delete mstorezgpb[name][key];
            };        
    this.setUiData2 = function(name,index,value) {
      if (!mstorezgpb.hasOwnProperty(name)){
            mstorezgpb[name]= {};
          }
      if (!mstorezgpb[name].hasOwnProperty(index)){
            mstorezgpb[name][index]= {};
          }
        mstorezgpb[name][index]=value;  
 
    };
    this.addIndexUiData2 = function(name,index,value) {
            if(typeof mstorezgpb[name][index] == 'undefined') {
              
            }else{
                mstorezgpb[name][index][value]={};
            }    
    };
    this.getUiData3 = function(name,index,key) {
                try{
                return mstorezgpb[name][index][key];
                    }
                catch(err) {
                    console.log('error getUiData3: '+err.message);
                } 
            };
    this.delUiData3 = function(name,index,key) {
                delete mstorezgpb[name][index][key];
            };
            
    this.setUiData3 = function(name,index,key,value) {
       if (!mstorezgpb.hasOwnProperty(name)){
            mstorezgpb[name]= {};
          }
       if (!mstorezgpb[name].hasOwnProperty(index)){
           mstorezgpb[name][index]={};
          }
        
       mstorezgpb[name][index][key]=value;   
    };
    this.setUiData4 = function(name,index,key,option,value) {
        
        if (!mstorezgpb.hasOwnProperty(name)){
            mstorezgpb[name]= {};
        }
        if (!mstorezgpb[name].hasOwnProperty(index)){
            mstorezgpb[name][index]={};
        }

        if (!mstorezgpb[name][index].hasOwnProperty(key)){
            mstorezgpb[name][index][key]={};
        }
        
        mstorezgpb[name][index][key][option]=value;
        
           
    };
    this.getUiData4 = function(name,index,key,option) {
        try{
                return mstorezgpb[name][index][key][option];
             }
        catch(err) {
            console.log('error getUiData4: '+err.message);
        }     
    };
    this.getUiData5 = function(name,index,key,section,option) {
        try {
            if(typeof mstorezgpb[name][index] == 'undefined') {
              return '';
            }else{
                return mstorezgpb[name][index][key][section][option];
            } 
        }
        catch(err) {
            console.log('error getUiData5: '+err.message);
            return '';
        } 
       }; 
       this.setUiData5 = function(name,index,key,section,option,value) {
            
            if (!mstorezgpb.hasOwnProperty(name)){
            mstorezgpb[name]= {};
            }
            if (!mstorezgpb[name].hasOwnProperty(index)){
                mstorezgpb[name][index]={};
            }

            if (!mstorezgpb[name][index].hasOwnProperty(key)){
                mstorezgpb[name][index][key]={};
            }
            
            if (!mstorezgpb[name][index][key].hasOwnProperty(section)){
                mstorezgpb[name][index][key][section]={};
            }
            
            mstorezgpb[name][index][key][section][option]=value;
               
    };
    this.addIndexUiData5 = function(name,index,key,section,option,value) {
            if(typeof mstorezgpb[name][index][key][section][option] == 'undefined') {
              
            }else{
                mstorezgpb[name][index][key][section][option][value]={};
            }    
    };
    
    this.getUiData6 = function(name,index,key,section,option,option2) {
        try {
            if(typeof mstorezgpb[name][index][key][section][option][option2] == 'undefined') {
              return '';
            }else{
                return mstorezgpb[name][index][key][section][option][option2];
            } 
        }
        catch(err) {
            console.log('error handled - getUiData6: '+err.message);
            return '';
        } 
       };
      
       
      this.setUiData6 = function(name,index,key,section,option,option2,value) {
            
            if (!mstorezgpb.hasOwnProperty(name)){
                mstorezgpb[name]= {};
            }
            if (!mstorezgpb[name].hasOwnProperty(index)){
                mstorezgpb[name][index]={};
            }

            if (!mstorezgpb[name][index].hasOwnProperty(key)){
                mstorezgpb[name][index][key]={};
            }
            
            if (!mstorezgpb[name][index][key].hasOwnProperty(section)){
                mstorezgpb[name][index][key][section]={};
            }
            
            if (!mstorezgpb[name][index][key][section].hasOwnProperty(option)){
                mstorezgpb[name][index][key][section][option]={};
            }
            
            mstorezgpb[name][index][key][section][option][option2]=value;
             
    };
    
    this.delUiData6 = function(name,index,key,section,option,option2) {
                delete mstorezgpb[name][index][key][section][option][option2];
            }; 
    
    this.getUiData7 = function(name,index,key,section,option,option2,option3) {
        try {
            if(typeof mstorezgpb[name][index][key][section][option][option2][option3] == 'undefined') {
              return '';
            }else{
                return mstorezgpb[name][index][key][section][option][option2][option3];
            } 
        }
        catch(err) {
            console.log('error handled - getUiData7: '+err.message);
            return '';
        } 
       };
    this.setUiData7 = function(name,index,key,section,option,option2,option3,value) {
            
            if (!mstorezgpb.hasOwnProperty(name)){
                mstorezgpb[name]= {};
            }
            if (!mstorezgpb[name].hasOwnProperty(index)){
                mstorezgpb[name][index]={};
            }

            if (!mstorezgpb[name][index].hasOwnProperty(key)){
                mstorezgpb[name][index][key]={};
            }
            
            if (!mstorezgpb[name][index][key].hasOwnProperty(section)){
                mstorezgpb[name][index][key][section]={};
            }
            
            if (!mstorezgpb[name][index][key][section].hasOwnProperty(option)){
                mstorezgpb[name][index][key][section][option]={};
            }
            
            if (!mstorezgpb[name][index][key][section][option].hasOwnProperty(option2)){
                mstorezgpb[name][index][key][section][option][option2]={};
            }
           
           mstorezgpb[name][index][key][section][option][option2][option3]=value;
              
    };
    this.addIndexUiData7 = function(name,index,key,section,option,option2,value) {
            if(typeof mstorezgpb[name][index][key][section][option][option2] == 'undefined') {
              
            }else{
                mstorezgpb[name][index][key][section][option][option2][value]={};
            }    
    };
    this.setUiData8 = function(name,index,key,section,option,option2,option3,option4,value) {
            
            if (!mstorezgpb.hasOwnProperty(name)){
                mstorezgpb[name]= {};
            }
            if (!mstorezgpb[name].hasOwnProperty(index)){
                mstorezgpb[name][index]={};
            }

            if (!mstorezgpb[name][index].hasOwnProperty(key)){
                mstorezgpb[name][index][key]={};
            }
            
            if (!mstorezgpb[name][index][key].hasOwnProperty(section)){
                mstorezgpb[name][index][key][section]={};
            }
            
            if (!mstorezgpb[name][index][key][section].hasOwnProperty(option)){
                mstorezgpb[name][index][key][section][option]={};
            }
            
            if (!mstorezgpb[name][index][key][section][option].hasOwnProperty(option2)){
                mstorezgpb[name][index][key][section][option][option2]={};
            }
            
            if (!mstorezgpb[name][index][key][section][option][option2].hasOwnProperty(option3)){
                mstorezgpb[name][index][key][section][option][option2][option3]={};
            }
            
            mstorezgpb[name][index][key][section][option][option2][option3][option4]=value;
                
    };
    this.addIndexUiData8 = function(name,index,key,section,option,option2,option3,value) {
            if(typeof mstorezgpb[name][index][key][section][option][option2][option3] == 'undefined') {
              
            }else{
                mstorezgpb[name][index][key][section][option][option2][option3][value]={};
            }    
    };
    this.delUiData8 = function(name,index,key,section,option,option2,option3,option4) {
                delete mstorezgpb[name][index][key][section][option][option2][option3][option4];
            };
    
    this.setUiData9 = function(name,index,key,section,option,option2,option3,option4,option5,value) {
            
            if (!mstorezgpb.hasOwnProperty(name)){
                mstorezgpb[name]= {};
            }
            if (!mstorezgpb[name].hasOwnProperty(index)){
                mstorezgpb[name][index]={};
            }

            if (!mstorezgpb[name][index].hasOwnProperty(key)){
                mstorezgpb[name][index][key]={};
            }
            
            if (!mstorezgpb[name][index][key].hasOwnProperty(section)){
                mstorezgpb[name][index][key][section]={};
            }
            
            if (!mstorezgpb[name][index][key][section].hasOwnProperty(option)){
                mstorezgpb[name][index][key][section][option]={};
            }
            
            if (!mstorezgpb[name][index][key][section][option].hasOwnProperty(option2)){
                mstorezgpb[name][index][key][section][option][option2]={};
            }
            
            if (!mstorezgpb[name][index][key][section][option][option2].hasOwnProperty(option3)){
                mstorezgpb[name][index][key][section][option][option2][option3]={};
            }
            
            if (!mstorezgpb[name][index][key][section][option][option2][option3].hasOwnProperty(option4)){
                mstorezgpb[name][index][key][section][option][option2][option3][option4]={};
            }
            mstorezgpb[name][index][key][section][option][option2][option3][option4][option5]=value;
              
    };
    
    this.initialize = function() {
                     //plugin tab enable
                    $('body').zgpbld_tab();
                    
                    if(parseInt(zgbdVariables.zgpb_is_enabled)===1){
                      this.setInnerVariable('zgpb_is_enabled',1);
                    }else{
                      this.setInnerVariable('zgpb_is_enabled',0);  
                    }
                    
                   
                
            };
    this.setExternalVars = function() {
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
              console.log(msg);
             };
    
      /**
     * Check integrity of created field
     *
     * @since 1
     * @access private
     * @method checkIntegrityDataField
     */           
   this.checkIntegrityDataField = function (id) {
        
        var status=false;
        try {
        //verify each array
            if('#zgpb-editor-container #'+id){
                if(typeof mstorezgpb['fields_src'][id] == 'undefined') {
                    status=false;
                }else{
                    status=true;
                }
            }else{
                status=false;
            }
           /* var type= 
            switch(){
                
            }*/
           
            
            return status;
        }
        catch(err) {
            console.log('error handled - checkIntegrityDataField : '+err.message);
            return false;
        } 
        
    };
    
    
         /**
     * Check integrity of tinymce
     *
     * @since 1
     * @access private
     * @method checkIntegrityDataField
     */           
   this.checkIntegrityTinyMCE = function (type) {
        
        var status=false;
        try {
       
            
           //tinymce check
           /* if(flag_tinymce_loaded===false){
                console.log('checkIntegrityDataField status false');
                status=false;
            }else{
                console.log('checkIntegrityDataField status true');
                status=true;
            }*/
            
            var rich = (typeof tinyMCE != "undefined") && tinyMCE.activeEditor && !tinyMCE.activeEditor.isHidden();
            if(rich){
                status=true;
            }
            
            
            return status;
        }
        catch(err) {
            console.log('error handled - checkIntegrityTinyMCE : '+err.message);
            return false;
        } 
        
    };
    
    
    /**
     * Show edit settings of the field
     *
     * @since 1
     * @access private
     * @method fieldQuickOptions_EditField
     */ 
    this.fieldQuickOptions_EditField = function (element,ismain) {
        
        //clean 
        $('#zgpb-editor-container .zgpb-fl-gs-block-style-hover').removeClass('zgpb-fl-gs-block-style-hover');
        
        var el=$(element),
                type=el.closest('.zgpb-field-template').attr('data-typefield'),
                id=el.closest('.zgpb-field-template').attr('id'),
                addt=[];
        
        switch(parseInt(type)){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                if(ismain){
                    addt['block']=0;
                }else{
                    var block=el.closest('.zgpb-fl-gs-block-style').attr('data-zgpb-blocknum')||0;  
                    addt['block']=block;
                }
                
                break;
            default:
                
                break;
        }
        
        this.loadFieldSettingTab(id,type,addt);
        
    }
     
    
     this.showFeatureLocked=function(el){
         
         
         //show modal
            zgpb_core.fields_showModalOptions();
          
                     var str_output='';
                     
                      var obj=$(el);
                     
                     str_output = obj.attr('data-blocked-feature');
                     
                     $.ajax({
                            type: 'POST',
                            url: ajaxurl,
                            data: {
                            'action': 'zgpb_builder_blocked_getmessage',
                            'page':'zgpb_page_builder',
                            'zgpb_security':zgpbld_vars.ajax_nonce,
                            'message':str_output
                                },
                            success: function(msg) {
                                  $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.zgpb-modal-header-inner').html(msg.modal_header);
                                  $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.sfdc-modal-body').html(msg.modal_body);
                                  $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.zgpb-modal-footer-wrap').html(msg.modal_footer);
                                  
                                  //adding class
                                  
                                  $('#zgpb-modal1').addClass('zgpb-modal-feature-locked-wrap');
                                  
                               
                            }
      });
                     
                     
                     
                     
    };
    
    /**
     * Set fields to content
     *
     * @since 1
     * @access private
     * @method getFieldsAfterDraggable
     */ 
    this.getFieldsAfterDraggable = function (element,field_type,isClicked,id_doubled,modalIsShown) {
         
            //hide po   pups
            //this.previewfield_hideAllPopOver();
            
            //showing loader
             
            zgpb_core.showLoader(1,true,false);
            if(isClicked){
                                zgpb_core.setInnerVariable('field_focus_on_creating',true);
                                
                            }else{
                                zgpb_core.setInnerVariable('field_focus_on_creating',false);
                                
                            }
                var fieldhtml=''
                    ,id,suffixid,field_instance;
                    
              //hide preview help text
              //rocketform.guidedtour_showTextOnPreviewPane(false);
              
              /*check if is duplicated*/
              var Opt_Doubled={};
              if(parseInt(id_doubled.length)>0){
                  
                  var tmp_Opt_Doubled=zgpb_core.getUiData2('fields_src',id_doubled);
                  var tmp2_Opt_Doubled=$.extend(true,{}, tmp_Opt_Doubled);
                  Opt_Doubled=tmp2_Opt_Doubled;
              } 
         
              //generating id
              id='ui'+zgpb_core.generateUniqueID();
              suffixid=zgpb_core.generateSuffixID(999,9999);
              //get step number
              //var step_pane=$(element).closest('.uiform-step-pane').data("uifm-step");
              
              var uifm_afterdrag_timer;              
              switch (parseInt(field_type)) {
                        case 1:    
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:    
                            
                            //grid columns
                            switch (parseInt(field_type)) {
                                    case 1:
                                        fieldhtml=$('#zgpb-fields-templates .zgpb-gridsystem-one').clone();
                                        break;
                                    case 2:
                                        fieldhtml=$('#zgpb-fields-templates .zgpb-gridsystem-two').clone();
                                        break;
                                    case 3:
                                        fieldhtml=$('#zgpb-fields-templates .zgpb-gridsystem-three').clone();
                                        break;
                                    case 4:
                                        fieldhtml=$('#zgpb-fields-templates .zgpb-gridsystem-four').clone();
                                        break;
                                    case 5:
                                        fieldhtml=$('#zgpb-fields-templates .zgpb-gridsystem-five').clone();
                                        break;
                                    case 6:
                                        fieldhtml=$('#zgpb-fields-templates .zgpb-gridsystem-six').clone();
                                        break;    
                                        
                                }
                            
                            fieldhtml.attr("id",id);
                            if(isClicked){
                               
                                $(element).replaceWith(fieldhtml);
                            }else{
                               
                                $(element).find('a.sfdc-draggable-field').replaceWith(fieldhtml);
                            }
                            /*add loader  on field when creating*/
                             zgpb_core.loading_boxField(id,1);
                            
                            //assign plugin
                            $('#'+id).zgpbld_gridsystem(Opt_Doubled);
                            
                            field_instance =$('#'+id).data('zgpbld_gridsystem');
                             
                            //assign data to object
                            field_instance.setToDatalvl1('id',id);
                            
                            switch (parseInt(field_type)) {
                                    case 1:
                                        field_instance.setToDatalvl1('type',1);
                                        field_instance.setToDatalvl1('type_n','column1');
                                        break;
                                    case 2:
                                        field_instance.setToDatalvl1('type',2);
                                        field_instance.setToDatalvl1('type_n','column2');
                                        break;
                                    case 3:
                                        field_instance.setToDatalvl1('type',3);
                                        field_instance.setToDatalvl1('type_n','column3');
                                        break;
                                    case 4:
                                        field_instance.setToDatalvl1('type',4);
                                        field_instance.setToDatalvl1('type_n','column4');
                                        break;
                                    case 5:
                                        field_instance.setToDatalvl1('type',5);
                                        field_instance.setToDatalvl1('type_n','column5');
                                        break;
                                    case 6:
                                        field_instance.setToDatalvl1('type',6);
                                        field_instance.setToDatalvl1('type_n','column6');
                                        break;
                                } 
                             
                            //generate block attributes
                            field_instance.createBlockAttributes();
                            
                             //assign settings data
                            field_instance.update_settingsData(Opt_Doubled); 
                                //important for updating the id of the object
                                field_instance.setToDatalvl1('id',id);
                            
                            //attach data to object
                            field_instance.updateVarData(id);
                            
                            //assign data to data core
                            field_instance.setDataToCoreStore(id);
                            
                           
                            
                            $('#'+id).zgpbld_grid();
                           
                            zgpb_core.hideLoader();
                            
                            //show modal of options 
                            if(modalIsShown){
                                 /*load setting tab*/
                            uifm_afterdrag_timer = setInterval(function(){
                                   if(zgpb_core.checkIntegrityDataField(id)){
                                        //enable setting tab
                                        zgpb_core.loadFieldSettingTab(fieldhtml.attr("id"),fieldhtml.data("typefield"),null);
                                        zgpb_core.setHighlightPicked($('#'+id));
                                        zgpb_core.hideLoader();
                                        /*hide loading msg on field*/
                                        zgpb_core.loading_boxField(id,0);
                                        
                                    clearInterval(uifm_afterdrag_timer);
                                    uifm_afterdrag_timer=null;
                                    
                                    //refresh grid when fields are inserted
                                    /*if (parseInt($('#'+id).parents('.uiform-grid-inner-col').length)!=0) {
                                        $(window).trigger('resize');
                                        
                                        }*/
                                   }
                                },1000);
                            }else{
                                zgpb_core.hideLoader();
                                 /*hide loading msg on field*/
                                zgpb_core.loading_boxField(id,0);
                            }
                            
                           
                                
                                
                            break;
                        case 7:
                            //text
                        case 8:
                            //html    
                        case 9:
                            //heading
                       case 10:
                            //button
                       case 11:
                            //image
                            
                            switch(parseInt(field_type)){
                                case 7:
                                   //text
                                    fieldhtml=$('#zgpb-fields-templates .zgpb-field-text-box').clone();
                                   break; 
                                case 8:
                                   //html
                                   fieldhtml=$('#zgpb-fields-templates .zgpb-field-html-box').clone();
                                   break;
                                case 9:
                                   //heading
                                   fieldhtml=$('#zgpb-fields-templates .zgpb-field-heading-box').clone();
                                   break;
                               case 10:
                                   //button
                                   fieldhtml=$('#zgpb-fields-templates .zgpb-field-button-box').clone();
                                   break;
                               case 11:
                                   //image
                                   fieldhtml=$('#zgpb-fields-templates .zgpb-field-image-box').clone();
                                   break;     
                            }
                            
                            
                            
                            fieldhtml.attr("id",id);
                            if(isClicked){
                                $(element).replaceWith(fieldhtml);
                            }else{
                                $(element).find('a.sfdc-draggable-field').replaceWith(fieldhtml);
                            }
                            
                             /*add loader  on field when creating*/
                             zgpb_core.loading_boxField(id,1);
                            
                            //assign plugin
                            switch(parseInt(field_type)){
                                case 7:
                                   //text
                                    $('#'+id).zgpbld_f_text(Opt_Doubled);
                                    field_instance =$('#'+id).data('zgpbld_f_text');
                                   break; 
                                case 8:
                                   //html
                                    $('#'+id).zgpbld_f_html(Opt_Doubled);
                                    field_instance =$('#'+id).data('zgpbld_f_html');
                                   break;
                                case 9:
                                   //heading
                                    $('#'+id).zgpbld_f_heading(Opt_Doubled);
                                    field_instance =$('#'+id).data('zgpbld_f_heading');
                                   break;
                               case 10:
                                   //button
                                    $('#'+id).zgpbld_f_button(Opt_Doubled);
                                    field_instance =$('#'+id).data('zgpbld_f_button');
                                   break;
                               case 11:
                                   //image
                                    $('#'+id).zgpbld_f_image(Opt_Doubled);
                                    field_instance =$('#'+id).data('zgpbld_f_image');
                                   break;    
                            }
                             
                            //init events
                            field_instance.init_events();
                            
                            //assign data to object
                            field_instance.setToDatalvl1('id',id);
                            
                            //assign data to data core
                            field_instance.setDataToCoreStore(id);
                            
                            zgpb_core.hideLoader();
                            
                             //show modal of options 
                            if(modalIsShown){
                                /*load setting tab*/
                                uifm_afterdrag_timer = setInterval(function(){
                                   if(zgpb_core.checkIntegrityDataField(id)){
                                        //enable setting tab
                                        zgpb_core.loadFieldSettingTab(fieldhtml.attr("id"),fieldhtml.data("typefield"),null);
                                        zgpb_core.setHighlightPicked($('#'+id));
                                        zgpb_core.hideLoader();
                                         /*hide loading msg on field*/
                                        zgpb_core.loading_boxField(id,0);
                                        
                                    clearInterval(uifm_afterdrag_timer);
                                    uifm_afterdrag_timer=null;
                                    
                                    //refresh grid when fields are inserted
                                    /*if (parseInt($('#'+id).parents('.uiform-grid-inner-col').length)!=0) {
                                        $(window).trigger('resize');
                                        
                                     }*/
                                   }
                                },1000);
                                
                                }else{
                                    zgpb_core.hideLoader();
                                         /*hide loading msg on field*/
                                        zgpb_core.loading_boxField(id,0);
                                }
                            break;
                            
                    }
                    
                     if( zgpb_core.getInnerVariable('field_focus_on_creating')){
                                    $('html,body').animate({
                                       scrollTop: $('#'+fieldhtml.attr("id")).offset().top-100},
                                       'slow');
                               }
                    //tuning draggable handle
                     var field_handle1=$(element).find('.zgpb-field-move');
                     
                     field_handle1.mouseover(function() {
                                  $( this ).css( "overflow", "hidden" );
                                  $( this ).css( "cursor", "move" );
                    }).mouseout(function() {
                           $( this ).css( "overflow", "visible" );       
                    });
                    //refresh sortable
                     zgpb_core.enableDraggableItems();
                    zgpb_core.enableSortableItems();
                    
                    return id;
             };
             
     /**
     * Save Publish Page to wordpress
     *
     * @since 1
     * @access private
     * @method savePage
     */          
    this.savePage_publishStatus = function () {
        
         
        
        var tmp_var=[]
        tmp_var['zgpb_data_settings']=encodeURIComponent(JSON.stringify(zgbdVariables));
        tmp_var['post_status']="publish";
        
        this.savePage_process(tmp_var,1);
    }         
     
    /**
     * Save Draft Page to wordpress
     *
     * @since 1
     * @access private
     * @method savePage
     */          
    this.savePage_DraftStatus = function () {
        var tmp_var=[]
        
        tmp_var['zgpb_data_settings']=encodeURIComponent(JSON.stringify(zgbdVariables));
        tmp_var['post_status']="draft";
        
        this.savePage_process(tmp_var,2);
    }
    
    /**
     * Save Page to wordpress
     *
     * @since 1
     * @access private
     * @method savePage
     */          
    this.savePage_process = function (zvars,savetype) {
        
        //show loader
         zgpb_core.loader_one_show(1);
         zgpb_core.showLoader(3,true,false);
        
        this.setUiData('app_ver',zgbdVariables.zgpb_version);
       
        this.savepost_cleanPost();
        
        var tabcontent_tmp;
    
         tabcontent_tmp={};
        tabcontent_tmp.content=this.getLayoutPage();
         
        this.setUiData('fields_design',tabcontent_tmp);
         zvars['zgpb_data_core']=encodeURIComponent(JSON.stringify(mstorezgpb));
        
         $.ajax({
                type: 'POST',
                url: zgpbld_vars.url_ajax,
                data: {
                    'action': 'zgpb_builder_save_page',
                    'page':'zgpb_page_builder',
                    'zgpb_security':zgpbld_vars.ajax_nonce,
                    'post_status':zvars['post_status'],
                    'zgpb_data_settings':zvars['zgpb_data_settings'],
                    'zgpb_data_core':zvars['zgpb_data_core'],
                    'post_content':''
                    },
                success: function(msg) {
                     //hide loader
                        
                        
                    if(parseInt(zgpb_core.getInnerVariable('zgpb_send_wp_publish'))===1){
                        $(zgpb_core.getInnerVariable('zgpb_send_wp_publish_var1')).trigger( "click" );
                       //zgpb_core.redirect_tourl(zgbdVariables.post_backend_url);
                       
                    } else if(parseInt(zgpb_core.getInnerVariable('zgpb_go_frontend_mode'))===1){
                        zgpb_core.setInnerVariable('zgpb_go_frontend_mode','0');
                        var tmp_url = $("#zgpb-back-menu-opt-3").attr('data-zgpb-href');
                        zgpb_core.redirect_tourl(tmp_url);
                        
                    }
                    else{
                        
                        zgpb_core.loader_one_show(0);
                        zgpb_core.hideLoader();
                        
                        if(parseInt(msg.post_update_success)===1){
                           switch(savetype){
                               case 1:
                                   zgpb_core.showLoader(5,false,true);
                                   break;
                               case 2:
                                   zgpb_core.showLoader(6,false,true);
                                  break;
                           } 
                        }else{
                            //show modal
                            zgpb_core.fields_showModalOptions();
                            $("#zgpb-modal1").find('.sfdc-modal-dialog').css({'top': 10, 'left' : "0"});
                            $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.zgpb-modal-header-inner').html(msg.modal_header);
                            $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.sfdc-modal-body').html(msg.modal_body);
                            $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.zgpb-modal-footer-wrap').html(msg.modal_footer);

                        }    
                    }
                  
                       
                }
            });
    }
    
    this.savepost_cleanPost = function () {
             try{   
               
                var currentFields;
                 
                        currentFields=$('#zgpb-editor-container').find('.zgpb-field-template');
                            if(parseInt(currentFields.length)!=0){
                                $.each(currentFields, function(index2, value2) {
                                   try{
                                      
                                       if(typeof mstorezgpb['fields_src'][$(this).attr('id')]=='undefined'){
                                              $(this).remove(); 
                                              zgpb_core.delUiData2('fields_src',$(this).attr('id'));
                                        }
                                        
                                   }catch(ex){
                                       
                                       $(this).remove();
                                       try{
                                           zgpb_core.delUiData2('fields_src',$(this).attr('id'));
                                       }catch(ex){}                                     
                                   }
                                });
                            } 
               
            /*clean main data*/  
            var tmp_arr;
            var tmp_len;
            var tmp_i;
            
                        if(parseInt($.map(mstorezgpb['fields_src'], function(n, i) { return i; }).length)!=0){
                          $.each(mstorezgpb['fields_src'], function(index3, value3) {
                              if(parseInt($('#'+index3).length)!=0){
                                }else{
                                  zgpb_core.delUiData2('fields_src',index3); 
                                } 
                          });
                        }
               
              /*clean fields are not placed on the form*/
               if(parseInt($.map(mstorezgpb['fields_src'], function(n, i) { return i; }).length)!=0){
                          $.each(mstorezgpb['fields_src'], function(index3, value3) {
                              if(parseInt($('#'+index3).length)=== 0){
                                                switch(parseInt(value3['type'])){
                                                        case 1:
                                                        case 2:
                                                        case 3:
                                                        case 4:
                                                        case 5:
                                                        case 6:    
                                                            break;
                                                        default:
                                                            zgpb_core.delUiData2('fields_src',index3);
                                                            break;
                                                    }
                                                }
                          });  
                        }
               /*clean draggin fields by error- some user had this problem*/
                 $('#zgpb-editor-container').find('.sfdc-draggable-field').remove();
            }/* end try*/
                catch (ex) {
               console.error("savePost_cleanPost : ", ex.message);
                }            
                        
       };
    
    this.getLayoutPage = function () {
              if($('#zgpb-editor-container').length){
                //var check_fields=[];
                var fields = {};
                var values_tmp
                    ,el_container
                    ,el_id
                    ,el_type
                    ,el_children_count
                    ,el_children
                    ,children_tmp_a
                    ,children_tmp_ob
                    ,child_id
                    ,check_field;

                  zgpb_core.setInnerVariable('fields_flag_stored',[]);
                   
                 $('#zgpb-editor-container .zgpb-field-template').each(function(index, element){
                         values_tmp= {};
                         children_tmp_ob= {};
                         children_tmp_a=[];
                         element=$(element);
                         //verify is container
                         el_container=(element.data('iscontainer'))?element.data('iscontainer'):0;
                         values_tmp.iscontainer=parseInt(el_container);
                         values_tmp.num_tab=0;
                         
                         //get type of field
                         el_type=element.data('typefield');
                         values_tmp.type=el_type;
                         el_id=(element.attr('id'))?element.attr('id'):0;
                         values_tmp.id=el_id;
                          
                         if(el_container===1){
                            values_tmp.children={};
                            /*children count*/
                            el_children_count=element.find('.zgpb-field-template').length;
                            values_tmp.count_children=parseInt(el_children_count);
                            
                            /*children elements*/
                            el_children=element.find('.zgpb-field-template')|| null;
                            if(parseInt(el_children_count)>0){
                                children_tmp_a =[];
                                $(el_children).each( function( index2, element2 ){
                                        child_id=($( this ).attr('id'))?$( this ).attr('id'):0;
                                        children_tmp_a.push(child_id);
                                        //children_tmp_ob[child_id]={};
                                    });
                                values_tmp.children_str=children_tmp_a.join(',');
                                
                            }   
                            
                            //values_tmp.children_arr=children_tmp_ob;
                                values_tmp.inner=zgpb_core.getLayoutFormByStep_checkChildren(el_id,el_children,el_type,element,0);
                            
                         }
                         
                         check_field=$.inArray(el_id,zgpb_core.getInnerVariable('fields_flag_stored'));
                         if(check_field < 0){
                             
                             zgpb_core.getLayoutFormByStep_addFieldFlag(el_id);
                             fields[index]=values_tmp;
                         }else{
                             
                         }
                         
                });
                
               
              }
              return fields;
             };
    
    
    this.getLayoutFormByStep_checkChildren = function (id,children,type,el,f_step) {
        
            var fields = {};
                var num_columns,values_tmp,num_cols,blocknum_cols;
             
             switch (parseInt(type)) {
                case 1:
                case 2: 
                case 3:
                case 4:
                case 5:
                case 6:     
                    //column 4
                   // num_columns=el.find(' .zgpb-fl-gs-block-style > .zgpb-fl-gs-block-inner:first-child');
                    num_columns=el.find('.sfdc-row:eq(0) > .zgpb-fl-gs-block-style');
                   
                    num_columns.each(function(index, element){
                             values_tmp= {};
                             element=$(element);
                             num_cols=element.attr('data-zgpb-blockcol');
                             blocknum_cols=element.attr('data-zgpb-blocknum');
                             values_tmp.cols=num_cols;
                            
                             values_tmp.num_tab=blocknum_cols;
                           
                              values_tmp.children=zgpb_core.getLayoutFormByStep_checkInColumn(num_columns[index],f_step);
                            
                            fields[index]=values_tmp;
                       });
                    break;
                case 31:
                    /*panel*/
                  
                    
                    break;
                case 0:
                    
                    break; 
                default: 
                   
            }
            return fields;  
                
    };
    
    
    this.getLayoutFormByStep_checkInColumn = function (children,f_step) {
        var fields = {};
                var values_tmp
                    ,el_container
                    ,el_id
                    ,el_type
                    ,el_children_count
                    ,el_children
                    ,children_tmp_a
                    ,children_tmp_ob
                    ,child_id
                    ,check_field
                    ,num_columns;
                    
                  
                    $(children).find('.zgpb-fl-gs-block-inner > .zgpb-field-template').each(function(index, element){
                       
                        values_tmp= {};
                        children_tmp_ob= {};
                        children_tmp_a=[];
                        element=$(element);
                        //verify is container
                        el_container=(element.data('iscontainer'))?element.data('iscontainer'):0;
                        values_tmp.iscontainer=parseInt(el_container);
                        //get type of field
                        el_type=element.data('typefield');
                        values_tmp.type=el_type;
                        el_id=(element.attr('id'))?element.attr('id'):0;
                        values_tmp.id=el_id;
                        values_tmp.num_tab=parseInt(f_step);
                        
                        if(el_container===1){
                            values_tmp.children={};
                            /*children count*/
                            el_children_count=element.find('.zgpb-field-template').length
                            values_tmp.count_children=parseInt(el_children_count);
                            /*children elements*/
                            el_children=element.find('.zgpb-field-template');
                            
                                $(el_children).each( function( index2, element2 ){
                                        child_id=($( this ).attr('id'))?$( this ).attr('id'):0;
                                        children_tmp_a.push(child_id);
                                        //children_tmp_ob[child_id]={};
                                    });
                                values_tmp.children_str=children_tmp_a.join(',');
                                //values_tmp.children_arr=children_tmp_ob;
                                values_tmp.inner=zgpb_core.getLayoutFormByStep_checkChildren(el_id,el_children,el_type,element,f_step);
                              
                         }
                        
                        
                        check_field=$.inArray(el_id,zgpb_core.getInnerVariable('fields_flag_stored'));
                        if(check_field < 0){
                            zgpb_core.getLayoutFormByStep_addFieldFlag(el_id);
                            fields[index]=values_tmp;
                        }
                         
                    });
                    return fields;
                    
                    
    };
    
    
    this.getLayoutFormByStep_addFieldFlag = function (value) {
              var temp;
              temp=this.getInnerVariable('fields_flag_stored')||[];
              temp.push(value);
              this.setInnerVariable('fields_flag_stored',temp);
             }; 
    
    /**
     * Load settings of field
     *
     * @since 1
     * @access private
     * @method loadFieldSettingTab
     */          
    this.loadFieldSettingTab = function (id,type,addt) {
        try{
            
            
            //show modal
            zgpb_core.fields_showModalOptions();
            
           
            
          
            // var My_New_Global_Settings =  tinyMCEPreInit.mceInit.content;
            $.ajax({
                                type: 'POST',
                                url: zgpbld_vars.url_ajax,
                                data: {
                                    'action': 'zgpb_builder_field_options',
                                    'page':'zgpb_page_builder',
                                    'zgpb_security':zgpbld_vars.ajax_nonce,
                                    'field_id':id,
                                    'field_type':type
                                    },
                                success: function(msg) {
                                    $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.zgpb-modal-header-inner').html(msg.modal_header);
                                    $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.sfdc-modal-body').html('');
                                    zgpb_core.modal_field_loader(1);
                                    $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.sfdc-modal-body').append(msg.modal_body);
                                    $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.zgpb-modal-footer-wrap').html(msg.modal_footer);
                                    
                                    
                                    
                                    var f_data=zgpb_core.getUiData2('fields_src',id);
                                     
                                     switch (parseInt(type)) {
                                                case 1:
                                                case 2:
                                                case 3:
                                                case 4:
                                                case 5:
                                                case 6:
                                                    var block=(addt)?addt['block']:0;
                                                     $('#zgpb-field-selected-block').val(block);
                                                     
                                                    $('#'+id).data('zgpbld_gridsystem').enableSettingOptions(f_data,addt);
                                                    break;     
                                                case 7:
                                                    //text
                                                     $('#'+id).data('zgpbld_f_text').init_tinymceEvent();
                                                     
                                                        flag_tinymce_loaded=false;
                                                       var zgpb_afterdrag_timer_2;
                                                         setTimeout(function(){ 
                                                                        if(zgpb_afterdrag_timer_2!=null){
                                                                             clearInterval(zgpb_afterdrag_timer_2);
                                                                        zgpb_afterdrag_timer_2=null;
                                                                         }
                                                                    }, 10000);
                                                                    
                                                          zgpb_afterdrag_timer_2 = setInterval(function(){
                                                                if(zgpb_core.checkIntegrityTinyMCE(type)){

                                                                    $('#'+id).data('zgpbld_f_text').enableSettingOptions(f_data,addt);

                                                                 clearInterval(zgpb_afterdrag_timer_2);
                                                                 zgpb_afterdrag_timer_2=null;
                                                                 
                                                                }
                                                             },300);
                                                    break;
                                                case 8:
                                                    //html
                                                      $('#'+id).data('zgpbld_f_html').enableSettingOptions(f_data,addt);
                                                    break;
                                                case 9:
                                                    //heading
                                                    
                                                      $('#'+id).data('zgpbld_f_heading').enableSettingOptions(f_data,addt);
                                                    break;
                                                case 10:
                                                    //button
                                                      $('#'+id).data('zgpbld_f_button').enableSettingOptions(f_data,addt);
                                                    break;
                                                case 11:
                                                    //image
                                                      $('#'+id).data('zgpbld_f_image').enableSettingOptions(f_data,addt);
                                                    break;    
                                                default: 
                                            } 
                                    /* reenable tooltip*/
                                    $("#zgpb-modal1").find('[data-toggle="tooltip"]').tooltip();
                                    
                                    $('#zgpb-field-selected-id').val(id);
                                    
                                    /*hide html scrollbar*/
                                    if(parseInt(zgpbld_vars.app_is_frontend)===1){
                                        
                                    }else{
                                        $('html').addClass('zgpb-y-no-scroll');
                                    }
                                 
                                }
                            });
                            
                            
           
           
            
            
            
        }/* end try*/
        catch (ex) {
            console.error(" error loadFieldSettingTab ", ex.message);
        }

    };
     
     
    this.load_modal_export = function () {
        try{
            
        
            
            this.setUiData('app_ver',zgbdVariables.zgpb_version);
       
        this.savepost_cleanPost();
        
        var tabcontent_tmp;
    
         tabcontent_tmp={};
        tabcontent_tmp.content=this.getLayoutPage();
         
        this.setUiData('fields_design',tabcontent_tmp);
        
         var tmp_core_data=encodeURIComponent(JSON.stringify(mstorezgpb));
         
            
            //show modal
            zgpb_core.fields_showModalOptions();
            $("#zgpb-modal1").find('.sfdc-modal-dialog').css({'top': 10, 'left' : "0"});
            
            // var My_New_Global_Settings =  tinyMCEPreInit.mceInit.content;
            $.ajax({
                                type: 'POST',
                                url: zgpbld_vars.url_ajax,
                                data: {
                                    'action': 'zgpb_builder_export',
                                    'page':'zgpb_page_builder',
                                    'zgpb_data_core':tmp_core_data,
                                    'zgpb_security':zgpbld_vars.ajax_nonce
                                    },
                                success: function(msg) {
                                    $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.zgpb-modal-header-inner').html(msg.modal_header);
                                    $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.sfdc-modal-body').html(msg.modal_body);
                                    $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.zgpb-modal-footer-wrap').html(msg.modal_footer);
                                   
                                 
                                   
                                   //$('#zpbd_export_textarea_code').html(tmp_export_var);
                                   
                                }
                            });
                       
        }/* end try*/
        catch (ex) {
            console.error(" error load_modal_export ", ex.message);
        }

    }; 
    
    this.get_main_Data = function () {
        return mstorezgpb;
    }
    
    this.set_main_Data = function (data) {
        mstorezgpb=data;
    }
    
     this.load_modal_import = function () {
        try{
            
            
            //show modal
            zgpb_core.fields_showModalOptions();
            $("#zgpb-modal1").find('.sfdc-modal-dialog').css({'top': 10, 'left' : "0"});
            
            // var My_New_Global_Settings =  tinyMCEPreInit.mceInit.content;
            $.ajax({
                                type: 'POST',
                                url: zgpbld_vars.url_ajax,
                                data: {
                                    'action': 'zgpb_builder_import',
                                    'page':'zgpb_page_builder',
                                    'zgpb_security':zgpbld_vars.ajax_nonce
                                    },
                                success: function(msg) {
                                    $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.zgpb-modal-header-inner').html(msg.modal_header);
                                    $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.sfdc-modal-body').html(msg.modal_body);
                                    $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.zgpb-modal-footer-wrap').html(msg.modal_footer);
                                   
                                  // $('#zpbd_export_textarea_code').html(tmp_export_var);
                                   
                                }
                            });
                       
        }/* end try*/
        catch (ex) {
            console.error(" error load_modal_import ", ex.message);
        }

    };
    
    this.load_modal_import_onfailPopup = function () {
        try{
            
            
            //show modal
         /*   zgpb_core.fields_showModalOptions();
            $("#zgpb-modal1").find('.sfdc-modal-dialog').css({'top': 10, 'left' : "0"});
            
           $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.zgpb-modal-header-inner').html(msg.modal_header);
          $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.sfdc-modal-body').html(msg.modal_body);
           $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.zgpb-modal-footer-wrap').html(msg.modal_footer);
             / */                      
                       
        }/* end try*/
        catch (ex) {
            console.error(" error load_modal_import_onfailPopup ", ex.message);
        }

    };
    
     this.load_modal_import_process = function () {
        try{
            //show loader
                zgpb_core.loader_one_show(1);
                zgpb_core.showLoader(1,true,false);
                
             var tmp_vars;
            if(parseInt(zgpbld_vars.app_is_frontend)===1){
                tmp_vars=[];
                tmp_vars['editor_container']='.entry-content';
            }else{
                tmp_vars=[];
                tmp_vars['editor_container']='.zgpb-editor1-body-main-inner';
            }
            
            var tmp_editor_container=tmp_vars['editor_container'];
            
          var importcode=$('#zpbd_import_textarea_code').val();
                    zgpb_core.showLoader(1,true,false);
                    $.ajax({
                        type: 'POST',
                        url: ajaxurl,
                        data: {
                        'action': 'zgpb_builder_import_process',
                        'page':'zgpb_page_builder',
                        'zgpb_security':zgpbld_vars.ajax_nonce,
                        'importcode':importcode
                            },
                        error: function(xhr, error){
                            //rocketform.importForm_onfailPopup();
                            alert('Error on import');
                            },    
                        success: function(msg) {
                            /*load form*/
                            if($.isPlainObject(msg)){
                                
                                
                                  if(msg.post_content){
                                            zgpb_core.loadPostToEditPanel(msg,tmp_editor_container);
                                          
                                        }else{
                                             
                                            zgpb_core.setMainContainer();
                                        }
                                         // enable drag events
                                            zgpb_core.enableDraggableItems();
                                            zgpb_core.enableSortableItems();
                                         
                                       //hide loader
                                       zgpb_core.loader_one_show(0);
                                       zgpb_core.hideLoader();
                                       
                                       zgpb_core.showLoader(7,false,true);
                                       
                                       $('#zgpb-modal1').modal('hide');
                                       
                                /*if(String(response.data.fmb_html_backend)){
                                    rocketform.loadFormToEditPanel(response);
                                rocketform.loading_panelbox('rocketform-bk-dashboard',0);
                                $('#uifm_form_import_modal').modal('hide');
                                }else{
                                    mainrformb=response.data.fmb_data;
                                    rocketform.refreshPreviewSection_process();
                                    rocketform.loading_panelbox('rocketform-bk-dashboard',0);
                                $('#uifm_form_import_modal').modal('hide');
                                }*/
                                
                            }else{
                                //rocketform.importForm_onfailPopup();
                                alert('Error on import');
                            }
                            
                        }
                    });            
        }/* end try*/
        catch (ex) {
            console.error(" error load_modal_import ", ex.message);
        }

    };
    
    
    /**
     * Show modal
     *
     * @since 1
     * @access private
     * @method fields_showModalOptions
     */
    
     this.fields_showModalOptions = function () {
        
       //$("#zgpb-modal1").find('.sfdc-modal-dialog').css({'top': 10, 'left' : 20});
       $("#zgpb-modal1").find('.sfdc-modal-dialog').css({'top': 10, 'left' : "30%"});
       $("#zgpb-modal1").find('.sfdc-modal-dialog').removeCss('width');
       
       
       var $html_loading='<img src="'+zgpbld_vars.url_assets+'/common/imgs/ajax-loader-black.gif'+'"/>';
       $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.zgpb-modal-header-inner').html($html_loading);
       $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.sfdc-modal-body').html($html_loading);
       $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.zgpb-modal-footer-wrap').html($html_loading);
       
       
        
        $("#zgpb-modal1").find('.sfdc-modal-content').resizable({
            //alsoResize: ".modal-dialog",
            //minHeight: 150
        });
        $("#zgpb-modal1").find('.sfdc-modal-dialog').draggable();

        $("#zgpb-modal1").on('show.bs.modal', function () {
            $(this).find('.modal-body').css({
                'max-height':'100%'
            });
        });
        
        $("#zgpb-modal1").modal({
            show: true,
            backdrop: 'static',
            keyboard: false
        });
        
        
        
   }
   
   this.fields_events_spinner = function(tab){
       
       if(tab.find(".zgpb_fld_settings_spinner").find('.bootstrap-touchspin-postfix').length){
         
           
       }else{
            tab.find(".zgpb_fld_settings_spinner").TouchSpin({
                verticalbuttons: true,
                min: 0,
                max: 1500,
                stepinterval: 1,
                verticalupclass: 'sfdc-glyphicon sfdc-glyphicon-plus',
                verticaldownclass: 'sfdc-glyphicon sfdc-glyphicon-minus'
            }); 
                                               
       
       $(".zgpb_fld_settings_spinner").on("change", function(e) {
            var f_store=$(e.target).data('field-store');
            var f_val=$(e.target).val();
            zgpb_core.updateModalFieldCoreAndPreview(f_store,f_val);
        });
       } 
   }
   
   
   this.fields_events_cpicker = function(tab){
       
       if(tab.find('.zgpb-custom-color').data("colorpicker")){
         
      }else{
     
     tab.find('.zgpb-custom-color').colorpicker({container:$("#zgpb-modal1 .sfdc-modal-content")});
    
     tab.find('.zgpb-custom-color').colorpicker().on('changeColor', function(ev){
        
        var f_store=$( this ).data('field-store');
        var f_val=$(this).find('input').val();
        
        zgpb_core.updateModalFieldCoreAndPreview(f_store,f_val);
        
        
     });    
                                               
  
       } 
   }
   
   
   this.fields_events_bswitch = function(tab){
       
        if(tab.find('.zgpb-switch-field').data("bootstrap-switch")){
         
        }else{
            tab.find('.zgpb-switch-field').bootstrapSwitchZgpb();
            
           tab.find('.zgpb-switch-field').on('switchChange.bootstrapSwitchZgpb', function(event, state) {
                
                var f_store=$( this ).data('field-store');
                var f_val=(state)?1:0;
                
                zgpb_core.updateModalFieldCoreAndPreview(f_store,f_val);
               
                 
            });
       } 
   }
   
   
    this.fields_events_groupbtn = function(tab){
        
        if(tab.find('.sfdc-form-group').find('.zgpb-form-group-loaded').length){
             
        }else{
          
           tab.find('.sfdc-form-group').addClass('zgpb-form-group-loaded');
           
           tab.find(".zgpb-col-setoption-btn").on("click", function(e) {
               /*prevent double click*/
                e.preventDefault();
                var element = $(this),
                parent = element.parent();
                  
                parent.children(".sfdc-btn[data-toggle-enable]").removeClass(function(){
                    return $(this).data("toggle-enable")
                }).addClass(function(){
                    return $(this).data("toggle-disable")
                }).children("input").prop('checked', false);
                element.removeClass($(this).data("toggle-disable")).addClass(element.data("toggle-enable"));
                element.children("input").prop('checked', true);
            });
           
           
           tab.find(".zgpb-col-setoption-btn").on("click", function(e) {
               e.preventDefault();
                var f_store=$( this ).data('field-store');
                var f_val=parseInt($(this).data("field-value"));
                zgpb_core.updateModalFieldCoreAndPreview(f_store,f_val);
            });
        }
        
   }
   
   this.fields_events_font = function (tab){
       
   }
   
   this.fields_events_general = function(){
        
     $('#zgpb-modal1').find('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                  
            /* $('.zgpb-scroll-pane-arrows').jScrollPane(
                {
                        showArrows: true,
                        horizontalGutter: 10
                }
                );*/
            });
            
       $(document).on( "change", "#zgpb-modal1 .zgpb-f-setoption-st", function(e) {
     
        var f_store=$( this ).data('field-store');
        var f_val=($( this ).is(':checked'))?1:0;
        zgpb_core.updateModalFieldCoreAndPreview(f_store,f_val);   
      }); 
      
      
       $(document).on( "change keyup", "#zgpb-modal1 .zgpb-f-setoption", function(e) {
        
            var f_store=$( this ).data('field-store');
            var f_val=$( this ).val();
            zgpb_core.updateModalFieldCoreAndPreview(f_store,f_val);
    });
    
     $(document).on( "click", "#zgpb-modal1 .zgpb-f-setoption-btn", function(e) {
        var f_store=$( this ).data('field-store');
        var f_val=$( this ).find('input').val();
        zgpb_core.updateModalFieldCoreAndPreview(f_store,f_val);
     });
    
        
   }
   
   
   this.fields_events_slider = function(tab){
        
       tab.find('.zgpb-custom-slider').bootstrapSlider();
       
       tab.find('.zgpb-custom-slider').on('slide', function(slideEvt) {
                var f_store=$( this ).data('field-store');
                var f_val=slideEvt.value;
                zgpb_core.updateModalFieldCoreAndPreview(f_store,f_val);
            });
   }
   
    this.fields_events_txts = function(tab){
        tab.find('.zgpb-field-col-event-txt').on('change keyup focus keypress', function(e) {
                var f_store=$( this ).data('field-store');
                var f_val=$( this ).val();
                zgpb_core.updateModalFieldCoreAndPreview(f_store,f_val);
            });
   }
   
   
   this.modal_editfield_col_bg_delimg = function(){
        $('#zgpb_fld_col_bg_srcimg_wrap').html('');
        $('#zgpb_fld_col_bg_imgsource').val('');
        var f_store=$('#zgpb_fld_col_bg_imgsourcebtnadd').data('field-store');
         var f_val='';
        zgpb_core.updateModalFieldCoreAndPreview(f_store,f_val);
         
   }
   
   this.fields_events_bgimages = function(tab){
       
       var formfield;
       tab.find("#zgpb_fld_col_bg_imgsourcebtnadd").on("click", function(e) {
           /*prevent double click*/
            e.preventDefault();
                  var element=$(this);
             //store old send to editor function
            window.restore_send_to_editor = window.send_to_editor;
            //overwrite send to editor function
            window.send_to_editor = function(html) {
                 
                //for newer versions, html throws just the image tag
                var imgurl = $('img',html).attr('src')||$(html).attr('src');
                $('#'+ formfield).val(imgurl);
                $('#zgpb_fld_col_bg_srcimg_wrap').html('<img class="img-thumbnail" src="' + imgurl + '" />');
                
                 var f_store=element.data('field-store');
                 var f_val=imgurl;
                 
                zgpb_core.updateModalFieldCoreAndPreview(f_store,f_val);
                 
                tb_remove();
                //restore old send to editor function
                window.send_to_editor = window.restore_send_to_editor;
                //refresh skin
                //rocketform.loadForm_tab_skin_updateBG();
            }
            
	    formfield = $('#zgpb_fld_col_bg_imgsource').attr('id');
	    tb_show('', zgpbld_vars.url_admin+'media-upload.php?type=image&amp;TB_iframe=true');
	    return false;
	});
   }
 
   
   this.updateModalFieldCoreAndPreview = function (f_store,f_val) {
       
       var f_id= $('#zgpb-field-selected').val();
                var f_type= $('#zgpb-field-selected-type').val();
                var addt=[];
                    switch(parseInt(f_type)){
                       case 1:
                       case 2:
                       case 3:
                       case 4:
                       case 5:
                       case 6:    
                           var block=$('#zgpb-field-selected-block').val();
                           addt['block']=block;
                           break;
                       case 7:
                           
                           break;
                    }
                     zgpb_core.setDataOptToCoreData(f_id,f_type,f_store,f_val,addt);
                     var obj_field= $('#'+f_id);
                    if(obj_field){
                        zgpb_core.setDataOptToPrevField(obj_field,f_type,f_store,f_val,addt);
                    }
   }
   
     
   
   
   /**
     * Set data to core
     *
     * @since 1
     * @access private
     * @method setDataOptToCoreData
     */
    this.setDataOptToCoreData = function (id,f_type,f_store,value,addt) {
        
        try {
            var f_obj= $('#'+id);
            var tmp_vars;
            var tmp_vars_split;
            switch(parseInt(f_type)) {
               case 1:
               case 2:
               case 3:
               case 4:
               case 5:
               case 6:
                   
                  tmp_vars=[];
                  tmp_vars_split=f_store.split('-');
                 tmp_vars['id']=id;
                 tmp_vars['block']=addt['block'];
                 tmp_vars['opt1']=tmp_vars_split[0];
                 tmp_vars['opt2']=tmp_vars_split[1];
                 tmp_vars['opt3']=tmp_vars_split[2];
                 tmp_vars['opt4']=value;
                 /*column*/
                    f_obj.data('zgpbld_gridsystem').setDataToCore(tmp_vars);
                break;
              case 7:
                  //text editor
                 tmp_vars=[];
                 tmp_vars_split=f_store.split('-');
                 tmp_vars['id']=id;
                 tmp_vars['opt1']=tmp_vars_split[0]||'';
                 tmp_vars['opt2']=tmp_vars_split[1]||'';
                 tmp_vars['opt3']=tmp_vars_split[2]||'';
                 tmp_vars['opt4']=value;
                 
                 f_obj.data('zgpbld_f_text').setDataToCore(tmp_vars);
                break;
               case 8:
                   //html
                 tmp_vars=[];
                 tmp_vars_split=f_store.split('-');
                 tmp_vars['id']=id;
                 tmp_vars['opt1']=tmp_vars_split[0];
                 tmp_vars['opt2']=tmp_vars_split[1];
                 tmp_vars['opt3']=tmp_vars_split[2];
                 tmp_vars['opt4']=value;
                 
                 f_obj.data('zgpbld_f_html').setDataToCore(tmp_vars);
                break;
                case 9:
                  //heading
                 tmp_vars=[];
                 tmp_vars_split=f_store.split('-');
                 tmp_vars['id']=id;
                 tmp_vars['opt1']=tmp_vars_split[0]||'';
                 tmp_vars['opt2']=tmp_vars_split[1]||'';
                 tmp_vars['opt3']=tmp_vars_split[2]||'';
                 tmp_vars['opt4']=value;
                 
                 f_obj.data('zgpbld_f_heading').setDataToCore(tmp_vars);
                break;
                case 10:
                  //button
                 tmp_vars=[];
                 tmp_vars_split=f_store.split('-');
                 tmp_vars['id']=id;
                 tmp_vars['opt1']=tmp_vars_split[0]||'';
                 tmp_vars['opt2']=tmp_vars_split[1]||'';
                 tmp_vars['opt3']=tmp_vars_split[2]||'';
                 tmp_vars['opt4']=value;
                 
                 f_obj.data('zgpbld_f_button').setDataToCore(tmp_vars);
                break;
                 case 11:
                  //image
                 tmp_vars=[];
                 tmp_vars_split=f_store.split('-');
                 tmp_vars['id']=id;
                 tmp_vars['opt1']=tmp_vars_split[0]||'';
                 tmp_vars['opt2']=tmp_vars_split[1]||'';
                 tmp_vars['opt3']=tmp_vars_split[2]||'';
                 tmp_vars['opt4']=value;
                 
                 f_obj.data('zgpbld_f_image').setDataToCore(tmp_vars);
                break;
               default: 
            } 
            
       
        }/* end try*/
            catch (ex) {
            console.error("error setDataOptToCoreData ", ex.message);
        }   
    };
    
    /**
     * reflect data to preview
     *
     * @since 1
     * @access private
     * @method setDataOptToPrevField
     */
    this.setDataOptToPrevField = function (f_obj,f_type,f_store,value,addt) {
        
        try {
           switch(parseInt(f_type)) {
               case 1:
               case 2:
               case 3:
               case 4:
               case 5:
               case 6:
                   
                 var tmp_vars=[];
                 var tmp_vars_split=f_store.split('-');
                 tmp_vars['block']=addt['block'];
                 tmp_vars['opt1']=tmp_vars_split[0];
                 tmp_vars['opt2']=tmp_vars_split[1];
                 tmp_vars['opt3']=tmp_vars_split[2];
                 tmp_vars['opt4']=value;
                 /*column*/
                    f_obj.data('zgpbld_gridsystem').setOptionsToPreview(tmp_vars);
                    
                break;
               case 7:
                 var tmp_vars=[];
                 var tmp_vars_split=f_store.split('-');
                 tmp_vars['opt1']=tmp_vars_split[0];
                 tmp_vars['opt2']=tmp_vars_split[1];
                 tmp_vars['opt3']=tmp_vars_split[2];
                 tmp_vars['opt4']=value;
                 
                    f_obj.data('zgpbld_f_text').setOptionsToPreview(tmp_vars);  
                break;
               case 8:
                   //html
                 var tmp_vars=[];
                 var tmp_vars_split=f_store.split('-');
                 tmp_vars['opt1']=tmp_vars_split[0];
                 tmp_vars['opt2']=tmp_vars_split[1];
                 tmp_vars['opt3']=tmp_vars_split[2];
                 tmp_vars['opt4']=value;
                 
                 f_obj.data('zgpbld_f_html').setOptionsToPreview(tmp_vars);  
                break;
               case 9:
                   //heading
                 var tmp_vars=[];
                 var tmp_vars_split=f_store.split('-');
                 tmp_vars['opt1']=tmp_vars_split[0];
                 tmp_vars['opt2']=tmp_vars_split[1];
                 tmp_vars['opt3']=tmp_vars_split[2];
                 tmp_vars['opt4']=value;
                 
                 f_obj.data('zgpbld_f_heading').setOptionsToPreview(tmp_vars);  
                break; 
                case 10:
                   //button
                 var tmp_vars=[];
                 var tmp_vars_split=f_store.split('-');
                 tmp_vars['opt1']=tmp_vars_split[0];
                 tmp_vars['opt2']=tmp_vars_split[1];
                 tmp_vars['opt3']=tmp_vars_split[2];
                 tmp_vars['opt4']=value;
                 
                 f_obj.data('zgpbld_f_button').setOptionsToPreview(tmp_vars);  
                break;
                case 11:
                   //image
                 var tmp_vars=[];
                 var tmp_vars_split=f_store.split('-');
                 tmp_vars['opt1']=tmp_vars_split[0];
                 tmp_vars['opt2']=tmp_vars_split[1];
                 tmp_vars['opt3']=tmp_vars_split[2];
                 tmp_vars['opt4']=value;
                 
                 f_obj.data('zgpbld_f_image').setOptionsToPreview(tmp_vars);  
                break;
            } 
       
        }/* end try*/
            catch (ex) {
            console.error("error setDataOptToPrevField ", ex.message);
        }   
    };
    
    /**
     * Capture event tinyMCE
     *
     * @since 1
     * @access private
     * @method captureEventTinyMCE
     */
    this.captureEventTinyMCE = function (ed,e) {
        
        
        var tab_opt= ed.id;
        var tmp_content=ed.getContent();
        zgpb_core.captureEventTinyMCE_process(tab_opt,tmp_content);
       
       
    }; 
    
    this.captureEventTinyMCE_process = function (tab_opt,f_content) {
         var store;
        switch (tab_opt) {
            case 'zgpb_fld_text_inp_txt':
                f_store = "input1-text";
                break;
            default: 
               
        }
        
        var f_store,f_val;
        /*load according to field or form*/
        switch (tab_opt) {      
            case 'zgpb_fld_text_inp_txt':
                // f_store=element.data('field-store');
                 f_val=f_content;
                 zgpb_core.updateModalFieldCoreAndPreview(f_store,f_val);
                 
            break;
      
            default: 
               
        }
     };
    
    this.tinyMCE_init = function (ed) {
         
        flag_tinymce_loaded=true;
 
    };
    
    
    
    
    this.test_showArray = function(){
        console.log('testing');
        console.log(JSON.stringify(mstorezgpb));
        
       //zgpb_core.dumpvar2(mstorezgpb);
    }
    
      this.generateUniqueID = function () {
                var number = Math.random() // 0.9394456857981651
                number.toString(36); // '0.xtis06h6'
                var id = number.toString(36).substr(2, 9); // 'xtis06h6'
                return id;
             };
   this.generateSuffixID = function (min,max) {
                return Math.floor(Math.random()*(max-min+1)+min);
             };   
    this.showLoader = function(type,is_loading,is_fading) {
        
              switch(parseInt(type)){
                    case 2:
                        /*processing*/
                        zgpb_core.alerts_msg(3,$('#alert_header_msg_processing').val());
                        break;
                    case 3:
                        /*saving*/
                        zgpb_core.alerts_msg(1,$('#alert_header_saving').val());
                        break;    
                    case 4:
                        /*removing*/
                        zgpb_core.alerts_msg(3,$('#alert_header_msg_removing').val());
                        break;
                    case 5:
                        /*Post saved*/
                        zgpb_core.alerts_msg(3,$('#alert_header_post_published').val());
                        break;
                    case 6:
                        /*Post saved as draft*/
                        zgpb_core.alerts_msg(3,$('#alert_header_post_draft').val());
                        break; 
                    case 7:
                        /*Post imported sucessfully*/
                        zgpb_core.alerts_msg(3,$('#alert_header_post_imported').val());
                        break;
                    case 1:
                    default:
                        /*loading*/
                        zgpb_core.alerts_msg(1,$('#alert_header_loading').val());
                        break;
                }
                
                //is loading
                if(is_loading){
                    $('#zgpb-loading-box').find('.sfdc-alert').append(' <span class="zgpb-loader-header-1"></span>');
                }
                
                //is fading
                if(is_fading){
                    $("#zgpb-loading-box").fadeTo(2000, 500).slideUp(500, function(){
                    $("#zgpb-loading-box").slideUp(500);
                     }); 
                }else{
                    $('#zgpb-loading-box').show();
                }
                
            };
    this.hideLoader = function() {
                $('#zgpb-loading-box').hide();
               $('#zgpb-loading-box').find('.sfdc-alert').attr('class','sfdc-alert').html('');
            };
            
    this.alerts_msg = function(type,txt_msg) {
            var rockfm_class;
                switch(parseInt(type)){
                    case 1:
                        /*success*/
                        rockfm_class='sfdc-alert-success';
                        break;
                    case 2:
                        /*info*/
                        rockfm_class='sfdc-alert-info';
                        break;
                    case 3:
                        /*warning*/
                        rockfm_class='sfdc-alert-warning';
                        break;
                    case 4:
                        /*danger*/
                        rockfm_class='sfdc-alert-danger';
                        break;
                }
              $('#zgpb-loading-box').find('.sfdc-alert').attr('class','sfdc-alert '+rockfm_class).html(txt_msg);    
            };
     
   this.setHighlightPicked = function(obj) {
                /*if($(document).find('.uifm-highlight-edited')){
                  $(document).find('.uifm-highlight-edited').removeClass('uifm-highlight-edited');
                }
                obj.addClass('uifm-highlight-edited');*/
            };
  
   
   this.setHighlightPicked = function(obj) {
                /*if($(document).find('.uifm-highlight-edited')){
                  $(document).find('.uifm-highlight-edited').removeClass('uifm-highlight-edited');
                }
                obj.addClass('uifm-highlight-edited');*/
            };
            
    /**
     * Makes items draggable
     *
     * @since 1
     * @access private
     * @method enableDraggableItems
     */
    
     this.enableDraggableItems = function () {
       
        $( "ul.sfdc-list-fields a" ).draggable({
        connectToSortable: "#zgpb-editor-container .zgpb-items-container",
       helper: "clone",
        revert: "invalid",
         distance: 0,
         cursorAt: { top: 20, left: 10 },
        cursor: 'move',
        handle: '.sfdc-btn1-icon-left',
        appendTo: '#zgpb-editor-container',
       
        drag: function( event, ui ) {
          
        }
        }).disableSelection();
    } 
    
     
    
    /**
     * Makes items sortable
     *
     * @since 1
     * @access private
     * @method enableSortableItems
     */ 
    this.enableSortableItems = function () {
       
     $("#zgpb-editor-container .zgpb-items-container").sortable({
            placeholder: 'zgpb-draggable-placeholder',
            connectWith: "#zgpb-editor-container .zgpb-items-container",
            revert: false,
            
            helper: function (event, item) 
		{
                        var field_type = $(item).attr('data-typefield');
                        var tmp_text=$('#zgpb-palette-cont').find('a[data-type="'+field_type+'"]').html();
                        return $('<div class="zgpb-draggable-helper" style="width: 130px; height: 35px;">'+tmp_text+'</div>');
		},
            handle: '.zgpb-field-move',
            sort: function(event, ui) {
               if(typeof ui.placeholder === 'undefined') {
			 return;
		 }
                 
                //ui.placeholder.html('testing ...'); 
            },
            receive: function(event, ui) {
               
              var field_type = ui.item.data('type');
               
              //verify if field was not created
               if(!ui.item.attr('id')){
               zgpb_is_dragging = false;
               zgpb_core.showLoader(1,true,false);
               zgpb_core.getFieldsAfterDraggable(this,field_type,false,'',true);    
               }  
               
               
               
               
            },
            stop: function (event, ui) {
                //check if only is dragged and moved
                
               
                /*remove helper when finish drag*/
                if($('#zgpb-editor-container').find('.zgpb-draggable-helper').length){
                   $('#zgpb-editor-container').find('.zgpb-draggable-helper').remove();
               }
                if($('#zgpb-editor-container').find('.zgpb-fl-gs-block-style-hover').length){
                   $('#zgpb-editor-container').find('.zgpb-fl-gs-block-style-hover').removeClass('zgpb-fl-gs-block-style-hover');
               
                }
               
               if(zgpb_is_dragging===true){
                  
                    //rocketform.hideLoader();
                    //verify if fields is inside grid
                    /*if(uiform_is_children===true){
                        $(window).trigger('resize');
                    }*/
                    /*if (parseInt($('#'+ui.item.attr('id')).parents('.uiform-grid-inner-col').length)!=0) {
                        $(window).trigger('resize');
                    }*/
                }
                
            },
            update: function (event, ui) {
                  //  var start_pos = ui.item.data('start_pos');
                    var end_pos = ui.item.index();
                    
                    //$('#sortable li').removeClass('highlights');
                },
            start: function (event, ui) {
              zgpb_is_dragging = true;
             // uiform_is_children=false;
              var field_id = ui.item.attr('id');
              var field_type = ui.item.attr('data-typefield');
              
              var start_pos = ui.item.index();
                ui.item.data('start_pos', start_pos);
           
			        
	    },
            cursorAt: { top: 10, left: 10 },
            tolerance: 'intersect',
            opacity: 0.5
        });
    }
    
    
      this.setMainContainer = function (){
         
         
        if(parseInt(zgpbld_vars.app_is_frontend)===1){
           /*  if(!$('body').find('#zgpb-editor-container').length){
                var tmp_tmpl= wp.template("zgpb-editor-main-container");
                $('body').find( '.entry-content' ).html('');
                $('body').find( '.entry-content' ).append(tmp_tmpl());
            }

             $('body').find('#zgpb-editor-container');
              
           */
             
        } else{
            //backend
            if(!$('body').find('#zgpb-editor-container').length){
                var tmp_tmpl= wp.template("zgpb-editor-main-container");
                $('body').find( '.zgpb-editor1-body-main-inner' ).html('');
                $('body').find( '.zgpb-editor1-body-main-inner' ).append(tmp_tmpl());
            }
            
            // $('body').find('#zgpb-editor-container');
 
        }
        
    };
    
    this.loader_one_show = function(show){
        if(parseInt(show)===1){
            $('#zgpb-panel-loadingst').show();
        }else{
            $('#zgpb-panel-loadingst').hide();
        }
        
    }
    
    this.getPostContent = function(tmp_vars) {
            try{
                
                //this is for backend purposes
                 zgpb_core.setInnerVariable('zgpb_postcont_is_loaded','1');
                 
                var tmp_editor_container=tmp_vars['editor_container'];
            
                //show loader
                zgpb_core.loader_one_show(1);
                zgpb_core.showLoader(1,true,false);
                
                //show modal
                // var My_New_Global_Settings =  tinyMCEPreInit.mceInit.content;
                //var $html_loading='<img src="'+zgpbld_vars.url_assets+'/common/imgs/ajax-loader-black.gif'+'"/>';
                //$('.entry-content').html($html_loading);
                
                $.ajax({
                                    type: 'POST',
                                    url: zgpbld_vars.url_ajax,
                                    data: {
                                        'action': 'zgpb_builder_get_postcontent',
                                        'page':'zgpb_page_builder',
                                        'zgpb_security':zgpbld_vars.ajax_nonce,
                                        'post_id':zgbdVariables.post_id,
                                        'post_type':zgbdVariables.post_type
                                        },
                                    success: function(msg) {
                                        if(parseInt(msg.post_getcont_success)===1){
                                              if(msg.post_content){
                                            zgpb_core.loadPostToEditPanel(msg,tmp_editor_container);
                                            
                                                if(parseInt(zgpbld_vars.app_is_frontend)===1){
                                                    
                                                }else{
                                                    //refresh panels
                                                    $('#zgpb-editor1-body').data('zgpbld_admin_panel').calculate();
                                                }
                                            

                                            }else{

                                                zgpb_core.setMainContainer();
                                            }
                                            
                                            
                                            
                                            
                                             // enable drag events
                                               zgpb_core.enableDraggableItems();
                                               zgpb_core.enableSortableItems();
                                        }else{
                                            alert(msg.post_error_log);
                                        }
                                      
                                         
                                       //hide loader
                                       zgpb_core.loader_one_show(0);
                                       zgpb_core.hideLoader();
                                       
                                       
                                    }
                                });
  
            }/* end try*/
            catch (ex) {
                console.error(" error getPostContent", ex.message);
            }
    }; 
    
    this.update_main_core = function(post_data){
        var mstorezgpb_tmp = {
                    app_ver:'1',
                    main:post_data.data['main'],
                    fields_design:post_data.data['fields_design'],
                    fields_src:post_data.data['fields_src']
        };
       
        for( var i in mstorezgpb['fields_src'] ) {
           
            if($.isArray(mstorezgpb['fields_src'][i]) || $.isPlainObject(mstorezgpb['fields_src'][i])  ){
                
                for( var i2 in mstorezgpb['fields_src'][i] ) {
                    if($.isArray(mstorezgpb['fields_src'][i][i2]) || $.isPlainObject(mstorezgpb['fields_src'][i][i2])){
                        
                        for( var i3 in mstorezgpb['fields_src'][i][i2] ) {
                            if($.isArray(mstorezgpb['fields_src'][i][i2][i3]) || $.isPlainObject(mstorezgpb['fields_src'][i][i2][i3])){
                                
                            }else{
                                mstorezgpb['fields_src'][i][i2][i3] = mstorezgpb_tmp['fields_src'][i][i2][i3];
                            }
                        }
                    }else{
                        mstorezgpb['fields_src'][i][i2] = mstorezgpb_tmp['fields_src'][i][i2];
                    }
                }
                
            }else{
                mstorezgpb['fields_src'][i] = mstorezgpb_tmp['fields_src'][i];
            }
                    
         }
        
    };
    
    this.loadPostToEditPanel = function(post_data,editor_container){
        try {
            /* set variables*/
        //catch core data and refresh to current
       
        var mstorezgpb_tmp = {
                    app_ver:'1',
                    main:post_data.data['main'],
                    fields_design:post_data.data['fields_design'],
                    fields_src:post_data.data['fields_src']
        }
      
      mstorezgpb = $.extend( true,{}, mstorezgpb, mstorezgpb_tmp);
       
       //clean again
         this.savepost_clean2();
       
       
        //put content into editor
        if(parseInt(zgpbld_vars.app_is_frontend)===1){
            if($("#zgpb-editor-container")){
                 var $tmp_parent_obj=$("#zgpb-editor-container").parent();
                 
                 $("#zgpb-editor-container").remove();
                 $tmp_parent_obj.append(post_data.post_content)
            }
           
            
            /* $("#zgpb-editor-container").parent().find("#zgpb-editor-container").html(post_data.post_content);
             if($("#zgpb-editor-container").parent().find("#zgpb-editor-container")){
                 $("#zgpb-editor-container").parent().find("#zgpb-editor-container").remove();
             }*/
            /*overring padding on body*/
            $( 'body' ).each(function () {
                try {
                    this.style.setProperty( 'padding', '0', 'important' );
                    this.style.setProperty( 'margin', '0', 'important' );
                }
                catch(err) {}
            });
            
        }else{
            $(editor_container).html(post_data.post_content);
        }
        
       
        
          
        //enabling plugins
         $.each(mstorezgpb['fields_src'], function(index, value) {
           
                zgpb_core.enableFieldPlugin(value.id,value.type,value); 
             
           /* $.each(value, function(index2, value2) {
                
            });*/
         });
         
         
         
        }/* end try*/
        catch (ex) {
            console.error(" load post error : ", ex.message);
        }
        
    }
    
    
    this.validateFieldOptions = function (data_field) {
        var data_return = {};
       // data_return= {data:{}};
       data_return= {data:data_field};
        $.each(data_field, function(index, value) {
            if($.isPlainObject(value)) {
                $.each(value, function(index2, value2) {
                 data_return['data'][index][index2]=zgpb_core.validateValueFieldOptions(index,index2,value2);
                });
            } else {
                 data_return['data'][index]=zgpb_core.validateValueFieldOptions(index,value,false);
            }
        });
        
        return data_return;
    }
    
    
    this.validateValueFieldOptions = function (section,option,value) {
        
        var value_return;
        value_return=value;
         //setting data to section
        switch(String(section)) {
            case 'id':
            case 'type':
            case 'type_n':     
                value_return=option;
            break;
            
            default:
                value_return=value;
                break;
                
        }
        
        return value_return;
    }
   
    
    this.enableFieldPlugin = function (id,field_type,data_field) {
      
      try{
      var set_option
        ,field_instance;
         
        switch (parseInt(field_type)) {
                        case 7:
                        /*TEXTEDITOR*/
                        case 8:
                        /*HTMLEDITOR*/
                        case 9:
                        //heading
                        case 10:
                        //button
                        case 11:
                        //image   
                            //enable field
                           // set_option=zgpb_core.validateFieldOptions(data_field);
                            
                            set_option=data_field;
                             
                            switch (parseInt(field_type)) {
                                case 7:
                                    $('#'+id).zgpbld_f_text(set_option);
                                    field_instance = $('#'+id).data('zgpbld_f_text');
                                  break;
                                case 8:
                                    $('#'+id).zgpbld_f_html(set_option);
                                    field_instance = $('#'+id).data('zgpbld_f_html');
                                  break;    
                                case 9:
                                    //heading
                                    $('#'+id).zgpbld_f_heading(set_option);
                                    field_instance = $('#'+id).data('zgpbld_f_heading');
                                  break;
                                case 10:
                                    //button
                                    $('#'+id).zgpbld_f_button(set_option);
                                    field_instance = $('#'+id).data('zgpbld_f_button');
                                  break;
                                case 11:
                                    //image
                                    $('#'+id).zgpbld_f_image(set_option);
                                    field_instance = $('#'+id).data('zgpbld_f_image');
                                  break;  
                            }
                            
                            
                            field_instance.updateVarData(id);
                            
                            //init events
                            field_instance.init_events();
                            
                            //assign data to object
                            field_instance.setToDatalvl1('id',id);
                            //assign data to data core
                            field_instance.setDataToCoreStore(id);
                            //update preview field
                            field_instance.update_previewfield(id);
                            
                            break;   
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:    
                             
                            //columns
                           // set_option=zgpb_core.validateFieldOptions(data_field);
                            set_option=data_field;
                            
                            $('#'+id).zgpbld_gridsystem();
                           
                            
                            field_instance =$('#'+id).data('zgpbld_gridsystem');
                            
                            //assign data to object
                            field_instance.setToDatalvl1('id',id);
                            
                            switch (parseInt(field_type)) {
                                    case 1:
                                        field_instance.setToDatalvl1('type',1);
                                        field_instance.setToDatalvl1('type_n','column1');
                                        break;
                                    case 2:
                                        field_instance.setToDatalvl1('type',2);
                                        field_instance.setToDatalvl1('type_n','column2');
                                        break;
                                    case 3:
                                        field_instance.setToDatalvl1('type',3);
                                        field_instance.setToDatalvl1('type_n','column3');
                                        break;    
                                    case 4:
                                        field_instance.setToDatalvl1('type',4);
                                        field_instance.setToDatalvl1('type_n','column4');
                                        break;
                                    case 5:
                                        //six columns
                                        field_instance.setToDatalvl1('type',5);
                                        field_instance.setToDatalvl1('type_n','column5');
                                        break;
                                    case 6:
                                        //twelce columns
                                        field_instance.setToDatalvl1('type',6);
                                        field_instance.setToDatalvl1('type_n','column6');
                                        break;
                                }
                               
                            
                    
                            //delete this because when enabling, you dont neet to create again the blocks    
                            //generate block attributes
                            //field_instance.createBlockAttributes();
                            
                            //assign settings data
                            field_instance.update_settingsData(set_option);  
                            
                            field_instance.updateVarData(id);
                            
                            //assign data to data core
                            field_instance.setDataToCoreStore(id);
                            
                            //update preview field
                            field_instance.update_previewfield(id);
                            
                            //assign effecto col resizable
                            $('#'+id).zgpbld_grid();
                            //$('#'+id).zgpbld_grid();
                           
                            break; 
                        
        }
        
        
        //refresh sortable
        zgpb_core.enableDraggableItems();
         zgpb_core.enableSortableItems();
        
        }/* end try*/
        catch (ex) {
          console.error(" enableFieldPlugin error : ", ex.message+' - type: '+field_type+' - id : '+id+' - options : '+this.dumpvar2(set_option));
      }
        
    }
    
    this.fieldQuickOptions_deleteField = function(id){
        
        
          var box_title=$('#zgpb_fld_del_box_title').val(),
            box_msg=$('#zgpb_fld_del_box_msg').val(),
            btn1_title=$('#zgpb_fld_del_box_bt1_title').val(),
            btn2_title=$('#zgpb_fld_del_box_bt2_title').val();
            
                bootbox.dialog({
                    message: box_msg,
                    title: box_title,
                    buttons: {
                        fld_del_opt1: {
                            label: btn1_title,
                            className: "sfdc-btn-default",
                            callback: function() {
                                
                            }
                        },
                        fld_del_opt2: {
                            label: btn2_title,
                            className: "sfdc-btn-primary",
                            callback: function() {
                             
                                 zgpb_core.fieldsetting_deleteField(id); 
                             
                            }
                        }
                    }
                    });
    }
    
    this.fieldsetting_deleteField = function (idselected) {
                
                //delete from DOM
                $('#'+idselected).remove();
                 
                //delete from core data
                zgpb_core.delUiData2('fields_src',idselected);
                
                //cleaning any empty array
                var tmp_arr=mstorezgpb['fields_src'];
                    var tmp_len = tmp_arr.length, tmp_i;
                    for(tmp_i = 0; tmp_i < tmp_len; tmp_i++ )
                            tmp_arr[tmp_i] && tmp_arr.push(tmp_arr[tmp_i]);
                    if($.isArray(tmp_arr)){
                        tmp_arr.splice(0 ,tmp_len);
                        mstorezgpb['fields_src']=tmp_arr;
                    }
             };
             
    this.savepost_clean2 = function () {
            
            
            /*clean and fix wizard array issue*/
            var tmp_arr;
            var tmp_len;
            var tmp_i;   
            var tmp_new_arr ;
             
               tmp_arr=mstorezgpb['fields_src'];
               
                tmp_new_arr={}; 
                tmp_len = tmp_arr.length;
                
                if(parseInt(tmp_len)===0){
                   mstorezgpb['fields_src']=tmp_new_arr; 
                   return;
                }
                
            
                
       };
       
     this.fieldQuickOptions_DuplicateField = function (id){
         
                //get obj
                var pickfield = $('#'+id);
                //get type of main parent
                var pickfield_type =pickfield.attr('data-typefield');
                
                var values_tmp
                    ,el_container
                    ,el_id
                     
                    ,el_children_count
                    ,el_children
                    ,children_tmp_a
                    ,children_tmp_ob
                    ,child_id
                    ,check_field;
                    
                 
                  
                 values_tmp= {};
                 //verify is container
                         el_container=(pickfield.data('iscontainer'))?pickfield.data('iscontainer'):0;
                         values_tmp.iscontainer=parseInt(el_container);
                         
                 values_tmp.num_tab=0;
                 values_tmp.type=pickfield_type;
                 
                 values_tmp.id=id;
                 
                 if(el_container===1){
                     
                     zgpb_core.setInnerVariable('fields_flag_stored',[]);
                     
                           //values_tmp.children={};
                 
                            /*children count*/
                            el_children_count=pickfield.find('.zgpb-field-template').length;
                            values_tmp.count_children=parseInt(el_children_count);
                            /*children elements*/
                           el_children=pickfield.find('.zgpb-field-template')|| null;
                           if(parseInt(el_children_count)>0){
                               children_tmp_a =[];
                               $(el_children).each( function( index2, element2 ){
                                       child_id=($( this ).attr('id'))?$( this ).attr('id'):0;
                                       children_tmp_a.push(child_id);
                                       //children_tmp_ob[child_id]={};
                                   });
                               values_tmp.children_str=children_tmp_a.join(',');

                           }   

                           //values_tmp.children_arr=children_tmp_ob;
                            values_tmp.inner=zgpb_core.getLayoutFormByStep_checkChildren(id,el_children,pickfield_type,pickfield,0);
                            
                            zgpb_core.setInnerVariable('fields_duplication_stored',values_tmp);
                           
                           
                           //console.log(JSON.stringify(values_tmp));
             
                            //generate on preview
                            zgpb_core.fieldQuickOptions_Duplicate_process(pickfield,pickfield_type);
                            
                           
                           // console.log('tree copy');               
                           // console.log(JSON.stringify(values_tmp));

                           
                     
                     
                 } else {
                    var sel_element=$('.sfdc-enable-fieldset').find('a[data-type="'+pickfield_type+'"]');
                    var el=$(sel_element).clone();
                    el.insertAfter(pickfield);

                    /*show loader box and message*/

                    var new_parent_id=zgpb_core.getFieldsAfterDraggable(el,pickfield_type,true,pickfield.attr('id'),true);
                    
                     
                 }
                 
                  
             
                 
                
                
     };
     
     this.fieldQuickOptions_Duplicate_process = function (el_parent,type){
         var tmp_vars= zgpb_core.getInnerVariable('fields_duplication_stored');
       
         var sel_element=$('.sfdc-enable-fieldset').find('a[data-type="'+type+'"]');
        var el=$(sel_element).clone();
        el.insertAfter(el_parent);

        /*show loader box and message*/
        var new_parent_id=zgpb_core.getFieldsAfterDraggable(el,type,true,el_parent.attr('id'),false);
       
         zgpb_core.enableFieldPlugin(new_parent_id,type,zgpb_core.getUiData2('fields_src',new_parent_id));
         
         
         var tmp_f_id,tmp_f_type,tmp_sel_el,tmp_new_el,tmp_new_parent,tmp_new_parent_f,tmp_new_id,len_children;
         
         var uifm_afterdrag_timer;
           uifm_afterdrag_timer = setInterval(function(){
               
               if($('#'+new_parent_id).find('.sfdc-container-fluid').length){
                    
                  
                    
                    if(parseInt(tmp_vars['inner'].length)!=0){
                       $.each(tmp_vars['inner'], function(index2, value2) {
                                  
                                  
                                  
                                  tmp_new_parent=$('#'+new_parent_id).find('> .sfdc-container-fluid .zgpb-fl-gs-block-style:eq('+index2+')');
                                  tmp_new_parent_f = tmp_new_parent.find('> .zgpb-fl-gs-block-inner');
                               
                                  len_children = $.map(value2['children'], function(n, i) { return i; }).length;
                                   
                                  if(parseInt(len_children)>0){
                                     $.each(value2['children'], function(index3, value3) {
                                         //get id
                                         tmp_f_id=value3['id'];
                                         tmp_f_type=value3['type'];
                                          
                                         //store data to use later
                                         zgpb_core.setInnerVariable('fun_dupli_cur_field',value3);
                                     
                                         zgpb_core.fieldQuickOptions_Duplicate_checkChildren(tmp_f_type,tmp_f_id,tmp_new_parent_f);
                                         
                                          
                                     });
                                 }   
                       });
                     } 
                    
                    //remove check function
                     clearInterval(uifm_afterdrag_timer);
                     uifm_afterdrag_timer=null;
                    
                }
               
          },1000);
          
     };
     
     this.fieldQuickOptions_Duplicate_checkChildren = function (tmp_f_type,tmp_f_id,tmp_new_parent_f){
         
          var tmp_new_id,tmp_sel_el,tmp_new_el,tmp_vars,tmp_new_parent,tmp_new_parent_f2,len_children,tmp_f_id2,tmp_f_type2;
         
         tmp_vars =  zgpb_core.getInnerVariable('fun_dupli_cur_field');
                 
         tmp_sel_el = $('.sfdc-enable-fieldset').find('a[data-type="'+tmp_f_type+'"]');

            tmp_new_el = $(tmp_sel_el).clone();

            tmp_new_parent_f.append(tmp_new_el);

            //create field
            tmp_new_id=zgpb_core.getFieldsAfterDraggable(tmp_new_el,tmp_f_type,true,tmp_f_id,false);
            //refresh preview
            zgpb_core.enableFieldPlugin(tmp_new_id,tmp_f_type,zgpb_core.getUiData2('fields_src',tmp_new_id));
            
            
         var uifm_afterdrag_timer;
          switch (parseInt(tmp_f_type)) {
                case 1:
                case 2: 
                case 3:
                case 4:
                case 5:
                case 6:     
                    //column 4
                        
                    uifm_afterdrag_timer = setInterval(function(){
                        if($('#'+tmp_new_id).find('.sfdc-container-fluid').length){
                             
                            if(parseInt(tmp_vars['inner'].length)!=0){
                                $.each(tmp_vars['inner'], function(index2, value2) {



                                           tmp_new_parent=$('#'+tmp_new_id).find('> .sfdc-container-fluid .zgpb-fl-gs-block-style:eq('+index2+')');
                                           tmp_new_parent_f2 = tmp_new_parent.find('> .zgpb-fl-gs-block-inner');

                                           len_children = $.map(value2['children'], function(n, i) { return i; }).length;

                                           if(parseInt(len_children)>0){
                                              $.each(value2['children'], function(index3, value3) {
                                                  //get id
                                                  tmp_f_id2=value3['id'];
                                                  tmp_f_type2=value3['type'];


                                                  //store data to use later
                                                  zgpb_core.setInnerVariable('fun_dupli_cur_field',value3);

                                                  zgpb_core.fieldQuickOptions_Duplicate_checkChildren(tmp_f_type2,tmp_f_id2,tmp_new_parent_f2);






                                              });
                                          }   
                                });
                              } 
                             
                            
                             //remove check function
                            clearInterval(uifm_afterdrag_timer);
                            uifm_afterdrag_timer=null;
                            
                            
                        }
                     },1000);
                    break;
                default: 
                    


                    break;
            }
     };
     
      
     
     this.templates_blank = function (id){
          //clean preview
          $('#zgpb-editor-container > .zgpb-items-container').html('');
          
          //clean main core array
          var tmp_mstorezgpb = {
                                app_ver:'1',
                                main:{
                                    add_css:'',
                                    add_js:''
                                },
                                fields_design:{},
                                fields_src:{}
                }; 
                
           mstorezgpb =  tmp_mstorezgpb;    
           
     };
    
    this.mainfields_addFieldToPost = function (element,field_type) {
                //get current tab actived
                try{
                  
                    var el=$(element).clone();
                   
                    $('#zgpb-editor-container .zgpb-items-container:first').append(el);
                     
                    zgpb_core.getFieldsAfterDraggable(el,field_type,true,'',true);
                    
                    //zgpb_core.setInnerVariable('field_focus_on_creating',false);
               }/* end try*/
                catch (ex) {
                console.error("mainfields_addFieldToPost error : ", ex.message);
               }
             };
    
    this.redirect_tourl = function (redirect) {
              if(window.event ) {/*IE 6*/
                    window.event.returnValue = false;
                    window.location =redirect;
                    //return false;
                }else {/*firefox*/
                    location.href =redirect;
                }
             };
    this.utils_isScrolledIntoView = function(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top||null;
        var elemBottom = elemTop + $(elem).height();
        
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    } 
    
    this.loading_boxField = function(id,st) {
               if(parseInt(st)===1){
                   $('<div class="uiform-field-loadingst"><div class="zgpb-loader-header-1"></div></div>').appendTo($("#"+id).css("position", "relative"));
               }else{
                   $("#"+id).find('.uiform-field-loadingst').remove();
               }
            };
    this.modal_fieldsetting_close = function() {
        
         if(($("#zgpb-modal1").data('bs.modal') || {}).isShown){
               $('#zgpb-modal1').modal('hide');
            } 
           
    };        
    this.test_tongo = function() {
                 var te_html2 = document.getElementById("zgpb_fld_ctmaddt");
                             CodeMirror.fromTextArea(te_html2, {
                                 mode : "css",
                                 htmlMode: true,
                                 lineNumbers: true,
                                 lineWrapping: true,
                                 extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
                                 foldGutter: true,
                                 gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],

                               });
            };   
    this.menuoptions_closePalette = function(){
        
        
         if(parseInt(zgpbld_vars.app_is_frontend)===1){
                 //hide float palette
                 zgpb_front.elements_container_chStatus();
            }else{
                //update palette variable
                zgpb_back.setInnerVariable('palette_show_st',0);

                 //update palette switcher
                 var tmp_obj=$('#zgpb-menuoption-palette-switcher');
                 tmp_obj.attr('data-zgpb-status',1);
                 tmp_obj.html(tmp_obj.attr('data-lbl-show'));

                 //hide float palette
                 zgpb_back.menuoptions_paletteBox(0);

                 //hide left panel
                 zgpb_back.editor1_palette().hideLeft();
            }
    }
    
    this.modal_field_loader = function(status){
        var mod_body = $('#zgpb-modal1').find('.sfdc-modal-dialog .sfdc-modal-body');
        if(parseInt(status)===1){
            if(parseInt(mod_body.find('#zgpb-modal-field-loader').length)===0){
                var tmp_tmpl= wp.template("zgpb-modal-field-loader");
                mod_body.append(tmp_tmpl());
            }
        }else{
            if(mod_body.find('#zgpb-modal-field-loader')){
                 mod_body.find('#zgpb-modal-field-loader').remove();
            }
        }
        
    }
    
    this.templates_getContent = function(type){
        var tmp_vars;
        tmp_vars=[];
        tmp_vars['editor_container']='.zgpb-editor1-body-main-inner';
        var tmp_editor_container=tmp_vars['editor_container'];
        
        //show loader
        // zgpb_core.loader_one_show(1);
         //  zgpb_core.showLoader(1,true,false);
        
        
        $.ajax({
                                    type: 'POST',
                                    url: zgpbld_vars.url_ajax,
                                    data: {
                                        'action': 'zgpb_builder_get_template',
                                        'page':'zgpb_page_builder',
                                        'zgpb_security':zgpbld_vars.ajax_nonce,
                                        'template_type':type,
                                        'post_id':zgbdVariables.post_id,
                                        'post_type':zgbdVariables.post_type
                                        },
                                    success: function(msg) {
                                        
                                        
                                        
                                        if(parseInt(msg.post_getcont_success)===1){
                                              if(msg.post_content){
                                                
                                                /*cleaning main core data*/
                                                mstorezgpb = {};
                                                
                                                zgpb_core.loadPostToEditPanel(msg,tmp_editor_container);
                                                
                                                if(parseInt(zgpbld_vars.app_is_frontend)===1){
                                                    
                                                }else{
                                                    //refresh panels
                                                    $('#zgpb-editor1-body').data('zgpbld_admin_panel').calculate();
                                                }
                                                
                                                
                                                
                                            }else{

                                                zgpb_core.setMainContainer();
                                            }
                                             // enable drag events
                                               zgpb_core.enableDraggableItems();
                                               zgpb_core.enableSortableItems();
                                        }else{
                                            alert(msg.post_error_log);
                                        }
                                      
                                         
                                       //hide loader
                                       zgpb_core.loader_one_show(0);
                                       zgpb_core.hideLoader();
                                       
                                       
                                    }
                                });
    }
    
             
};
window.zgpb_core = zgpb_core = $.zgpb_core = new zgpb_fn_core();


})($zgpb,window);
} 