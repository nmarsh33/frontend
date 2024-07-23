jQuery(document).ready(function ($) {
    var Accordions = (function () {
        var $accordions = $('.accordion');
        if (!$accordions.length) { return; }

        $accordions.each(function () {
            if ($(this).hasClass('active')) {
                $(this).find('.accordion__content').show();
            }
        });

        $accordions.find('.accordion__trigger').click(function (e) {
            var $this = $(this);
            var $accordion = $this.parent();
            var $content = $accordion.find('.accordion__content');
            var $siblings = $accordion.siblings();

            if ($accordion.hasClass('active')) {
                $accordion.removeClass('active');
                $content.slideUp('fast');
            } else {
                $accordion.addClass('active');
                $siblings.removeClass('active').find('.accordion__content').slideUp('fast');
                $content.slideDown('fast');
            }
        })

    }());
});