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
