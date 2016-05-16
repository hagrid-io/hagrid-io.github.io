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
  }]);



})();
