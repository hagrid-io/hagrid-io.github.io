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
        template: '<div ui-view=""></div>'
      })
      .state('main.views.knowledge.main', {
        url: "",
        templateUrl: "partials/knowledge.main.html",
      })
      .state('main.views.knowledge.grid-system', {
        url: "/grid-system",
        templateUrl: "partials/knowledge.grid-system.html",
      })
      .state('main.views.knowledge.typography', {
        url: "/typography",
        templateUrl: "partials/knowledge.typography.html",
      })
      .state('main.views.knowledge.buttons', {
        url: "/buttons",
        templateUrl: "partials/knowledge.buttons.html",
      })
      .state('main.views.knowledge.input-forms', {
        url: "/input-forms",
        templateUrl: "partials/knowledge.input-forms.html",
      });

  };

})();
