$(document).ready(function () {
    var $window = $(window);
    $window.scroll(function () {
        var $sections = $('.section');
        var $document = $(document);
        var scrollTop = $document.scrollTop();
        $sections.each(function () {
            var $section = $(this);
            var $sectionImg = $section.find('.img-block__image');
            if (scrollTop >= $section.offset().top) {
                $sectionImg.addClass('img-block__image--fixed');
            } else {
                $sectionImg.removeClass('img-block__image--fixed');
            }
        });
    });
});