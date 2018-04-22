/**
 * @file
 * Your custom code into javascript behaviour.
 */

(function ($) {
  Drupal.behaviors.search = {
    attach: function (context) {

      // Search Button
      $('.ico-search').on('click', function () {
        $('.search-block-form').toggleClass('active');
      });
    }
  };
})(jQuery);
