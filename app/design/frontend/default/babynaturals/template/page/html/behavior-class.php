<?php $pie_class[0] = $this->getSkinUrl()."PIE/PIE.php"; ?>
<style>
.pager .pages .current, .pager .pages li a, .top-link-cart span, .cart .discount .discount-form .buttons-set button.cancel-btn span, .data-table tbody tr td a.link-cart{ behavior: url('<?php echo $pie_class[0]; ?>'); position:relative; }
</style>