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
  <button data-dismiss="modal" class="sfdc-btn sfdc-btn-primary" type="button"><?php echo __('Close','zgpbd_admin')?></button>
  <button onclick="javascript:zgpb_core.load_modal_import_process();return false;"
          class="sfdc-btn sfdc-btn-warning" 
          type="button"><?php echo __('Import post','zgpbd_admin')?></button>
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