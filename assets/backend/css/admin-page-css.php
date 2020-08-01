<?php
ob_start();
defined('HTDOCS_PATH')
        || define('HTDOCS_PATH', realpath(dirname(dirname(__FILE__))));

include(HTDOCS_PATH.'/../common/bootstrap/3.3.7/css/bootstrap-sfdc.css');
include(HTDOCS_PATH.'/../common/bootstrap/3.3.7/css/bootstrap-theme-sfdc.css');
include(HTDOCS_PATH.'/../common/bootstrap/3.3.7/css/dropdown-sfdc.css');
include(HTDOCS_PATH.'/../common/bootstrap/3.3.7/css/modals-sfdc.css');
include(HTDOCS_PATH.'/../common/bootstrap/3.3.7/css/popovers-sfdc.css');
include(HTDOCS_PATH.'/../common/bootstrap/3.3.7/css/tooltip-sfdc.css');

include(HTDOCS_PATH.'/css/shortcuts.css');
include(HTDOCS_PATH.'/css/shortcuts_intranet.css');
 include(HTDOCS_PATH.'/css/style-3.css');
 
 //for help, about, debug, go pro page
include(HTDOCS_PATH.'/css/extra.css');
$cntACmp = ob_get_contents();
 /* remove comments */
$cntACmp = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $cntACmp);
 /* remove tabs, spaces, newlines, etc. */
$cntACmp = str_replace(array("\r\n", "\r", "\n", "\t", '  ', '    ', '    '), '', $cntACmp);
ob_end_clean();

//generate css
            ob_start();
            $pathCssFile = HTDOCS_PATH . '/../backend/css/admin-page-css.css';
            $f = fopen($pathCssFile, "w");
            fwrite($f, $cntACmp);
            fclose($f);
            ob_end_clean();
$expires = 60 * 60 * 24 * 7;
header('Expires: ' . gmdate('D, d M Y H:i:s', time() + $expires) . ' GMT');
header("Cache-Control: maxage=" . $expires);
header('Content-type: text/css');
echo $cntACmp;

?>