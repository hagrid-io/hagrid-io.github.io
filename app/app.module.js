(function(){
	'use strict';

	angular.module('hagrid', [
		'ui.router',
		//'ngMessages',
    'hagrid.knowledge'
		//'hagrid.tracking'
	]);
	angular.module('hagrid');

	angular.module('hagrid').run(['$rootScope', '$state', function ($rootScope, $state) {
    $rootScope.$state = $state;
    $rootScope.$on('$stateChangeSuccess', function() {
      debugger;
      document.body.scrollTop = document.documentElement.scrollTop = document.getElementById("main-content").scrollTop = 0;
      $rootScope.sidebarHelpShow = false;
    });
  }]);



})();
