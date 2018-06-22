(function (Drupal,$) {
  $(document).ready(function() {

    // Variables.

    var backToTop = $('.back-to-top'),
        windowHeight = $(window).height(),
        count = 0;

    // Events.

    $(window).on('scroll', function(){
      if ($(window).scrollTop() > windowHeight) {
        backToTop.addClass('show');
      } else {
        backToTop.removeClass('show');
      }
    });

    backToTop.click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 'slow');
    })
  });
})(Drupal, jQuery);