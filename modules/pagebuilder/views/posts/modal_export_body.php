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
                <h2><?php echo __('Post to export','zgpbd_admin'); ?></h2>
            </div>
            <div class="sfdc-row">
                <div class="sfdc-alert sfdc-alert-warning"><?php echo __('the exporting code is used for backuping your custom post, just copy the text and import it using "import" menu','zgpbd_admin'); ?></div>
            </div>
            <div class="sfdc-row">
                <textarea id="zpbd_export_textarea_code" 
                               onclick="this.select();"
                               rows="10" 
                               readonly="readonly"
                               style="width: 100%; padding: 5px; min-height: 92px;"><?php echo $code;?></textarea> 
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