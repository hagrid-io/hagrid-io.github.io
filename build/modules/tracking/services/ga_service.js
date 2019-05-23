(function(window, angular, undefined) {
  'use strict';

  angular.module('cobuild.tracking')
         .factory('ga', ['$window','moduleConfig', function ($window, moduleConfig) {

    var googleAnalyticsUA = moduleConfig.trackingCode;

    (function(i,s,o,g,r,a,m){
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function(){
        (i[r].q = i[r].q || []).push(arguments)
      }, 
      i[r].l = 1 * new Date();
      a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a,m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', '_gaq');

    $window._gaq = _gaq;

    $window._gaq('create', googleAnalyticsUA, 'auto');

    return $window._gaq;

  }]);


}(window, window.angular));