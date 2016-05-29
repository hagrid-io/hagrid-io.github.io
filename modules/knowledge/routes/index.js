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
      .state('main.views.knowledge.modals', {
        url: "/modals",
        templateUrl: "partials/knowledge.modals.html",
      })
      .state('main.views.knowledge.sliders', {
        url: "/sliders",
        templateUrl: "partials/knowledge.sliders.html",
      })
      .state('main.views.knowledge.dropdows', {
        url: "/dropdows",
        templateUrl: "partials/knowledge.dropdows.html",
      })
      .state('main.views.knowledge.navbars', {
        url: "/navbars",
        templateUrl: "partials/knowledge.navbars.html",
      });

  };

})();
