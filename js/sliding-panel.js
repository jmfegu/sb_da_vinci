/**
 * @file
 * Sliding panel.
 */

'use strict';

(function (Drupal, $) {
  $(document).ready(function () {

    // Fade into menu.
    $('#menu-svg').on('click touchstart', function (e) {
      buttonChange();
      $('.sliding-panel-content').toggleClass('is-visible');
      $('body').toggleClass('frozen-body');
      e.preventDefault();
    });

    $(window).resize(function () {
      if ($(this).width() > 1024) {
        if ($('.sliding-panel-content').hasClass('is-visible')) {
          $('.sliding-panel-content').removeClass('is-visible');
          $('body').removeClass('frozen-body');
          buttonChange();
        }
      }
    });

    // Burguer Menu.
    var menu_svg = document.getElementById('menu-svg');
    var menu_settings = {
      container: menu_svg,
      renderer: 'svg',
      loop: false,
      prerender: false,
      autoplay: false,
      autoloadSegments: false,
      path: '/themes/contrib/da_vinci/js/utils/menu-svg.json'
    };
    var menu_svg_init;
    var menu_svg_x = false;
    menu_svg_init = bodymovin.loadAnimation(menu_settings);

    function throwComplete() {
      isThrowing = false;
      menu_svg_init.removeEventListener('loopComplete', throwComplete);
    }

    function buttonChange() {
      if (menu_svg_x) {
        menu_svg_init.playSegments([26, 39], true);
        menu_svg_x = false
      } else {
        menu_svg_x = true;
        menu_svg_init.playSegments([0, 14], true)
      }
    }

  });
})(Drupal, jQuery);
