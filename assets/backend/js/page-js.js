;var $zgpb=jQuery.noConflict();if(typeof($zgpb)==='undefined'){$zgpb=jQuery;}
var zgpb_page=zgpb_page||null;if(!$zgpb.isFunction(zgpb_page)){(function($,window){"use strict";var zgpb_fn_page=function(){var zgpbvariable=[];zgpbvariable.innerVars={};zgpbvariable.externalVars={};this.initialize=function(){};this.setExternalVars=function(){zgpbvariable.externalVars["class_main_content"]='.zgpb-main-content-';zgpbvariable.externalVars["palettebox_is_shown"]=false;};this.getExternalVars=function(name){if(zgpbvariable.externalVars[name]){return zgpbvariable.externalVars[name];}else{return'';}};this.setInnerVariable=function(name,value){zgpbvariable.innerVars[name]=value;};this.getInnerVariable=function(name){if(zgpbvariable.innerVars[name]){return zgpbvariable.innerVars[name];}else{return'';}};this.dumpvar3=function(object){return JSON.stringify(object,null,2);};this.dumpvar2=function(object){return JSON.stringify(object);};this.dumpvar=function(object){var seen=[]
var json=JSON.stringify(object,function(key,val){if(val!=null&&typeof val=="object"){if(seen.indexOf(val)>=0)
return
seen.push(val)}
return val});return seen;};this.redirect_tourl=function(redirect){if(window.event){window.event.returnValue=false;window.location=redirect;}else{location.href=redirect;}};this.globalsettings_saveOptions=function(){var data=$('#zgpb-page-settings').serialize();$.ajax({type:'POST',url:zgpbld_vars.url_ajax,data:data+'&action=zgpb_builder_setting_saveopts&page=zgpb_page_builder'+'&zgpb_security='+zgpbld_vars.ajax_nonce,success:function(msg){zgpb_page.redirect_tourl(zgpbld_vars.url_admin+'?page=zgpb_page_builder');}});};};window.zgpb_page=zgpb_page=$.zgpb_page=new zgpb_fn_page();})($zgpb,window);}$zgpb(document).ready(function($){zgpb_page.initialize();});