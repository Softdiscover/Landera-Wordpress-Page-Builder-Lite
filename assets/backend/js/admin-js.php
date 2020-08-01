<?php
set_time_limit ( 300 );
defined('HTDOCS_PATH')
        || define('HTDOCS_PATH', realpath(dirname(__FILE__) . '/../'));
require 'jsmin.php';
$js= file_get_contents(HTDOCS_PATH . '/../common/js/zgpbld-init.js');
$js.= file_get_contents(HTDOCS_PATH . '/../common/js/zgpbld-core.js');
$js.= file_get_contents(HTDOCS_PATH . '/../common/js/zgpbld-tools.js');
$js.= file_get_contents(HTDOCS_PATH . '/../backend/js/zgpbld-back.js');
 //tab plugin
$js.= file_get_contents(HTDOCS_PATH . '/../common/js/zgpbld-tab.js');
/*global*/
$js.= file_get_contents(HTDOCS_PATH . '/js/zgpbld-back-global.js');
$js.= file_get_contents(HTDOCS_PATH . '/../common/js/zgpbld-common.js');
/*fields*/
$js.= file_get_contents(HTDOCS_PATH . '/../common/js/zgpbld-f-gridsystem.js');
$js.= file_get_contents(HTDOCS_PATH . '/../common/js/zgpbld-f-text.js');
$js.= file_get_contents(HTDOCS_PATH . '/../common/js/zgpbld-f-html.js');
//image
$js.= file_get_contents(HTDOCS_PATH . '/../common/js/zgpbld-f-image.js');
$js.= file_get_contents(HTDOCS_PATH . '/../common/js/zgpbld-opt-picture.js');

$js.= file_get_contents(HTDOCS_PATH . '/../common/js/zgpbld-f-heading.js');
$js.= file_get_contents(HTDOCS_PATH . '/../common/js/zgpbld-f-button.js');
$js.= file_get_contents(HTDOCS_PATH . '/../common/js/zgpbld-grid.js');

$js.= file_get_contents(HTDOCS_PATH . '/../backend/js/zgpbld-admin-panel.js');

//helper
$js.= file_get_contents(HTDOCS_PATH . '/../backend/js/zgpbld-back-helper.js');


$js1 = JSMin::minify($js);


$files = glob("*.js");
$files = array_combine($files, array_map("filemtime", $files));
arsort($files);

$latest_file = key($files);
//generate js
            ob_start();
            $pathCssFile = HTDOCS_PATH . '/../backend/js/admin-js.js';
            $f = fopen($pathCssFile, "w");
            fwrite($f, $js1);
            fclose($f);
            ob_end_clean();
header('Content-Type:application/x-javascript');
$expires = 60 * 60 * 24 * 7;
header("Last-Modified: ".gmdate("D, d M Y H:i:s", $files[$latest_file])." GMT"); 
header("Expires: " . gmdate("D, d M Y H:i:s", time() + $expires) . " GMT");
header("Cache-Control: max-age=$expires, must-revalidate");
echo $js;
?>