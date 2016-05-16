(function () {
  'use strict';

    angular.module('cobuild.tracking', []);

    angular.module('cobuild.tracking').run(['$rootScope','TrackingService' ,function ($rootScope,TrackingService){

      //Default tracking event - Change of state : 'Page View'
      $rootScope.$on('$stateChangeSuccess',function (event, toState, toParams, fromState, fromParams){

        var params =  toParams;
        params.page = toState.url;
        params.version = 1;
        params.title = toState.name;
        //console.log("Sending Event:", params);
        TrackingService.pageView(toState.url,params); 

      });

    }]);  

})();