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
      var mainContent = document.getElementById("main-content");
      if(mainContent){
        document.body.scrollTop = document.documentElement.scrollTop = mainContent.scrollTop = 0;
      }
    });
  }]);
})();
