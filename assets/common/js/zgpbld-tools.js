if(typeof($uifm) === 'undefined') {
	$uifm = jQuery;
}
var zgpb_tools = zgpb_tools || null;
if(!$uifm.isFunction(zgpb_tools)){
(function($, window) {
 "use strict";  
    
var zgpb_tools = function(){
    var zgpb_variable = [];
    zgpb_variable.innerVars = {};
    zgpb_variable.externalVars = {};
    
    this.initialize = function() {
        
    }
    
   
   this.replaceurl_to_local = function(){
        zgpb_core.loader_one_show(1);
        zgpb_core.showLoader(1,true,false);
        
        zgpb_core.fields_showModalOptions();
        $("#zgpb-modal1").find('.sfdc-modal-dialog').css({'top': 10, 'left' : "0",'width':'1000px'});
        $.ajax({
                                type: 'POST',
                                url: zgpbld_vars.url_ajax,
                                data: {
                                    'action': 'zgpb_tool_replaceurl',
                                    'page':'zgpb_page_builder',
                                    'zgpb_security':zgpbld_vars.ajax_nonce
                                    },
                                success: function(msg) {
                                    $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.zgpb-modal-header-inner').html(msg.modal_header);
                                    $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.sfdc-modal-body').html(msg.modal_body);
                                    $("#zgpb-modal1").find('.sfdc-modal-dialog').find('.zgpb-modal-footer-wrap').html(msg.modal_footer);
                                   
                                    //enable tooltip
                                    $('[data-toggle="tooltip"]').tooltip();
                                 //hide loader
                                  zgpb_core.loader_one_show(0);
                                    zgpb_core.hideLoader();
                                }
                            });
    };
    
    this.replaceurl_process = function(){
        
        var data2=$('#zgpb-modal1-body-container').find('select, textarea, input').serialize();
        var tmp_mstorezgpb = zgpb_core.get_main_Data();
        
       var tmp_core_data=JSON.stringify(tmp_mstorezgpb);
        
      //show loader
      $('.sfdc-modal .zgpb-modal-box-loader-bg').show();
      
      //get option
      var tmp_option=$('#lnda_tools_replaceurl_option input:checked').val();;
      
        $.ajax({
                            type: 'POST',
                            url: zgpbld_vars.url_ajax,
                            data: {
                              'extra':data2,
                       'action': 'zgpb_tool_replaceurl_process',
                       'page':'zgpb_page_builder',
                       'zgpb_security':zgpbld_vars.ajax_nonce,
                       'lnd_data':encodeURIComponent(tmp_core_data),
                       'post_id':zgbdVariables.post_id,
                       'post_type':zgbdVariables.post_type,
                       'option':tmp_option

                        },
                            success: function(msg) {
                                //rocketform.hideLoader();
                               $('#lnda_tools_replaceurl_result').show();
                               $('#lndr_importimg_showurlsmod').html(msg.urls_modified);
                               $('#lndr_importimg_showurlsleft').html(msg.urls_left);
                               
                               //show loader
                                $('.sfdc-modal .zgpb-modal-box-loader-bg').hide();
                               
                                //enable tooltip
                                $('[data-toggle="tooltip"]').tooltip();

                                if(parseInt(msg.success)===1){
                                    //update core data
                                    
                                    //zgpb_core.set_main_Data({});
                                    zgpb_core.update_main_core(msg.urls_core);
                                    //zgpb_core.loadPostToEditPanel(msg.urls_core,'.zgpb-editor1-body-main-inner');
                                    
                                }else{
                                    alert(msg.error);
                                }
                                
                            }
                        }); 
    };
 
    
    
};
window.zgpb_tools = zgpb_tools = $.zgpb_tools = new zgpb_tools();


})($uifm,window);
} 