<?php
/**
 * Intranet
 *
 * PHP version 5
 *
 * @category  PHP
 * @package   Zigapage_wp
 * @author    Softdiscover <info@softdiscover.com>
 * @copyright 2015 Softdiscover
 * @license   http://www.php.net/license/3_01.txt  PHP License 3.01
 * @link      https://landera.softdiscover.com
 */
if (!defined('ABSPATH')) {
    exit('No direct script access allowed');
}
ob_start();
?>
    <div class="sfdc-row">
                <h2><?php echo __('Import your post','zgpbd_admin'); ?></h2>
            </div>
            <div class="sfdc-row">
                <div class="sfdc-alert sfdc-alert-success"><?php echo __('Import your post here, just paste the export code and that is all.','zgpbd_admin'); ?></div>
            </div>
            <div class="sfdc-row">
                <textarea id="zpbd_import_textarea_code" 
                               
                               rows="10" 
                               
                               style="width: 100%; padding: 5px; min-height: 92px;"></textarea> 
            </div>
            <div class="space10"></div>
<?php
$cntACmp = ob_get_contents();
$cntACmp = str_replace("\n", '', $cntACmp);
$cntACmp = str_replace("\t", '', $cntACmp);
$cntACmp = str_replace("\r", '', $cntACmp);
$cntACmp = str_replace("//-->", ' ', $cntACmp);
$cntACmp = str_replace("//<!--", ' ', $cntACmp);
$cntACmp = preg_replace("/\s+/"," ", $cntACmp);
ob_end_clean();
echo $cntACmp;
?>