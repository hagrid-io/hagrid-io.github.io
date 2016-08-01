/*
 * hagrid-knowledge - Web Documentation.
 * @version v1.0.0
 * @link https://github.com/rokk3rlabs/hagrid-knowledge#readme
 * @license MIT
 */
(function () {
  'use strict';

  angular.module('hagrid.knowledge', []);
  angular.module('hagrid.knowledge')

})();

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
(function(){
  'use strict';


})();

(function(){
  'use strict';

angular.module('hagrid.knowledge')
  .config( config )

  config.$inject = ['$stateProvider', '$urlRouterProvider'];


  function config($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('main.views.knowledge', {
        url: "/knowledge",
        abstract: true,
        controller: 'KnowledgeMainCtrl',
        template: '<div ui-view="" style="padding-bottom: 3em"></div>'
      })
      .state('main.views.knowledge.main', {
        url: "",
        templateUrl: "partials/knowledge.main.html",
      })
      .state('main.views.knowledge.base', {
        url: "/base",
        templateUrl: "partials/knowledge.base.html",
      })
      .state('main.views.knowledge.grid-system', {
        url: "/grid-system",
        controller: 'KnowledgeGridSystemCtrl',
        templateUrl: "partials/knowledge.grid-system.html",
      })
      .state('main.views.knowledge.typography', {
        url: "/typography",
        templateUrl: "partials/knowledge.typography.html",
      })
      .state('main.views.knowledge.glyphicons', {
        url: "/glyphicons",
        templateUrl: "partials/knowledge.glyphicons.html",
      })
      .state('main.views.knowledge.buttons', {
        url: "/buttons",
        templateUrl: "partials/knowledge.buttons.html",
      })
      .state('main.views.knowledge.dropdows', {
        url: "/dropdows",
        templateUrl: "partials/knowledge.dropdows.html",
      })
      .state('main.views.knowledge.navbars', {
        url: "/navbars",
        templateUrl: "partials/knowledge.navbars.html",
      })
      .state('main.views.knowledge.input-forms', {
        url: "/input-forms",
        templateUrl: "partials/knowledge.input-forms.html",
      })
      .state('main.views.knowledge.labels', {
        url: "/labels",
        templateUrl: "partials/knowledge.labels.html",
      })
      .state('main.views.knowledge.tables', {
        url: "/tables",
        templateUrl: "partials/knowledge.tables.html",
      })
      .state('main.views.knowledge.lists', {
        url: "/lists",
        templateUrl: "partials/knowledge.lists.html",
      })
      .state('main.views.knowledge.breadcrumbs', {
        url: "/breadcrumbs",
        templateUrl: "partials/knowledge.breadcrumbs.html",
      })
      .state('main.views.knowledge.alerts', {
        url: "/alerts",
        templateUrl: "partials/knowledge.alerts.html",
      })
      .state('main.views.knowledge.progressbar', {
        url: "/progressbar",
        templateUrl: "partials/knowledge.progressbar.html",
      })
      .state('main.views.knowledge.paginations', {
        url: "/paginations",
        templateUrl: "partials/knowledge.paginations.html",
      })
      .state('main.views.knowledge.tooltips', {
        url: "/tooltips",
        templateUrl: "partials/knowledge.tooltips.html",
      })
      .state('main.views.knowledge.scrolls', {
        url: "/scrolls",
        templateUrl: "partials/knowledge.scrolls.html",
      })
      .state('main.views.knowledge.modals', {
        url: "/modals",
        templateUrl: "partials/knowledge.modals.html",
      })
      .state('main.views.knowledge.sliders', {
        url: "/sliders",
        templateUrl: "partials/knowledge.sliders.html",
      });

  };

})();

(function(){
  'use strict';

  var moduleConfig = {
    trackingCode:'UA-75172839-1'
  };

  
  //Add more like ['facebook','twitter','linkedin'];

  angular.module('cobuild.tracking')
    .constant('moduleConfig', moduleConfig)


})();
(function(){
	'use strict';

	angular.module('hagrid', [
    'ui.router',
		'ngSanitize',
    'ngPrism',
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

angular.module('hagrid')
  .filter('capitalize', function() {
  return function(input, all) {
    var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
    return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
  }
});

/*
*
* ng-prism v0.0.1
*
* (c) 2013-2014 Sercan Eraslan http://sercaneraslan.com
* License: MIT
*
*/
angular.module('ngPrism', []).
    directive('prism', [function() {
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {

                element.ready(function() {
                    Prism.highlightElement(element[0]);
                });
            }
        }
    }]
);

(function(){
  'use strict';

  angular
    .module('hagrid')
    .config( function ($stateProvider, $urlRouterProvider, $locationProvider){
      $urlRouterProvider
        .otherwise("/");

      $stateProvider
        .state('main', {
          abstract: true,
          templateUrl: "partials/main.html",
          data: {
            pageTitle: 'Hagrid Default Title',
            pageDescription: 'Front end angular stack - SEO friendly'
          }
        })
        .state('main.views', {
          views: {
            content: {
              template: '<div ui-view=""></div>'
            },
            sidebar: {
              templateUrl:'partials/sidebar.main.html',
            },
            header:{
              templateUrl:'partials/shared.header.html',
              //controller: 'NavbarCtrl',
              controllerAs: 'navbar'
            },
            footer:{
              templateUrl:'partials/shared.footer.html'
            }
          }
        })
        .state('main.views.home', {
          url: "/",
          templateUrl: "partials/home.index.html",
        })
        .state('main.views.about', {
          url: "/about",
          templateUrl: "partials/about.index.html",
        });

      $locationProvider.html5Mode(true);

    })

})();

(function(){
  'use strict';

  angular.module('hagrid.knowledge')
    .controller('KnowledgeGridSystemCtrl', KnowledgeGridSystemCtrl);

  KnowledgeGridSystemCtrl.$inject = ['$scope'];

  function KnowledgeGridSystemCtrl($scope){

    $scope.myHTML = '<!DOCTYPE html>'+
    '<title>Title</title>'+
    '<style>body {width: 500px;}</style>'+
    '<script type="application/javascript">'+
      'function $init() {return true;}'+
    '</script>';

    $scope.myJS = "console.log('Hello World');"
  }

})();

(function(){
  'use strict';

  angular.module('hagrid.knowledge')
    .controller('KnowledgeMainCtrl', KnowledgeMainCtrl);

  KnowledgeMainCtrl.$inject = ['$scope'];

  function KnowledgeMainCtrl($scope){

  }

})();

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
(function(){
  'use strict';

  angular.module('cobuild.tracking')
    .service('TrackingService', TrackingService);

  TrackingService.$inject = ['$window','ga'];

  function TrackingService($window, ga){

    /**
     * Track a page view on Google Analytics
     * @param  {Object} eventParams [description]
    
     */
    var pageView = function (page, params) {

        if(!params){
          params = {};
        }      

        for(var key in params){     
          if(typeof params[key] === 'string'){   
            params[key] =  standarize(params[key]);
          }
        }

        //console.log("TRACK ", eventName, eventParams);

        //Google Analythics -- Remember to set up the key at ga_service!
        if($window._gaq){
          console.log('send', 'pageview', page, params)
          $window._gaq('send', 'pageview', page, params);
        }else{
          console.error('No _gaq set!!')
        }

        //Mixpanel tracking
        //mixpanel.track(eventName, eventParams);

    };


    var event = function (eventCategory, eventAction, eventParams) {

        if(!eventParams){
          eventParams = {};
        }      

        for(var key in eventParams){     
          if(typeof eventParams[key] === 'string'){   
            eventParams[key] =  standarize(eventParams[key]);
          }
        }

        eventParams.hitType = 'event';
        eventParams.eventCategory = eventCategory;
        eventParams.eventAction = eventAction;

        //console.log("TRACK ", eventName, eventParams);

        //Google Analythics -- Remember to set up the key at ga_service!
        if($window._gaq){
          console.log('event', eventParams)
          $window._gaq('send', eventParams);
        }else{
          console.error('No _gaq set!!')
        }

        //Mixpanel tracking
        //mixpanel.track(eventName, eventParams);

    };

    /*
    * @name setUser
    * @description Set user for tracking events
    * @param {object} user Object with user data
    */
    var setUser = function (user){

      //Mixpanel Set User
      // user = AuthService.currentUser();
      if(user){

        mixpanel.people.set({
          "$first_name": user.firstName,
          "$last_name": user.lastName,
          "$email": user.email
        });
        eventParams.email = user.email;

      }

    };

    //Implement here custom standarization of string inputs.
    function standarize(value){
      return value.toLowerCase();
    }

    return  {
      pageView: pageView,
      event: event, 
      setUser: setUser
    };

  }

})();