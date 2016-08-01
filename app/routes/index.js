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
            pageTitle: 'Hagrid Web Framework',
            pageDescription: "Let’s build awesome web applications together."
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
