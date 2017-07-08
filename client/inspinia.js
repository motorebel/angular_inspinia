/**
 * INSPINIA - Responsive Admin Theme
 * 2.6
 *
 * Custom scripts
 */
import angular from 'angular';
var inspinia = angular.element(document).ready(($timeout) => {


  // Full height of sidebar
  function fix_height() {
    var heightWithoutNavbar = angular.element("body > #wrapper").height() - 61;
    angular.element(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");

    var navbarHeigh = angular.element('nav.navbar-default').height();
    var wrapperHeigh = angular.element('#page-wrapper').height();

    if(navbarHeigh > wrapperHeigh){
      angular.element('#page-wrapper').css("min-height", navbarHeigh + "px");
    }

    if(navbarHeigh < wrapperHeigh){
      angular.element('#page-wrapper').css("min-height", angular.element(window).height()  + "px");
    }

    if (angular.element('body').hasClass('fixed-nav')) {
      if (navbarHeigh > wrapperHeigh) {
        angular.element('#page-wrapper').css("min-height", navbarHeigh - 60 + "px");
      } else {
        angular.element('#page-wrapper').css("min-height", angular.element(window).height() - 60 + "px");
      }
    }

  }

  angular.element(window).bind("load resize scroll", () => {
    if(!angular.element("body").hasClass('body-small')) {
      fix_height();
    }
  });

  // Move right sidebar top after scroll
  angular.element(window).scroll(() => {
    if (angular.element(window).scrollTop() > 0 && !angular.element('body').hasClass('fixed-nav') ) {
      angular.element('#right-sidebar').addClass('sidebar-top');
    } else {
      angular.element('#right-sidebar').removeClass('sidebar-top');
    }
  });

  $timeout(() => {
    fix_height();
  });

  // Minimalize menu when screen is less than 768px
  angular.element(window).bind("load resize", () => {
    if (angular.element(document).width() < 769) {
      angular.element('body').addClass('body-small')
    } else {
      angular.element('body').removeClass('body-small')
    }
  })

});