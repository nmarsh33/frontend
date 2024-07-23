
<?php
    $label = $args['label'];
    $content = $args['content'];
?>

<div class="accordion">
    <button class="accordion__trigger" type="button">
        <span class="accordion__label"><?php echo $label; ?></span>
        <div class="accordion__svg">
            <?php echo getSVG('plus'); ?>
        </div>
    </button>
    <div class="accordion__content"><?php echo $content; ?></div>
</div>