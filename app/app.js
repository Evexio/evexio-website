'use strict';

// Declare app level module which depends on views, and components
angular.module('evexio', [
  'ngRoute',
  'evexio.home',
  'evexio.work',
  'evexio.about',
  'evexio.blog',
  'evexio.contact',
  'evexio.post'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]).
run(function($rootScope) {
  document.addEventListener("click", function(e) {
      $rootScope.$broadcast("documentClicked", e.target);
  });
})
.controller('EvexioCtrl', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
                           
  $scope.isActive = function (viewLocation) {
      var active = (viewLocation === $location.path());
      return active;
  };

  $rootScope.$on("documentClicked", closeMenu);

  function closeMenu() {
      var menu = document.querySelector('#slide-menu-right');
      menu.classList.remove('is-active');
    
      var mask = document.querySelector('#mask');
      mask.classList.remove('is-active');
      
      document.body.classList.remove('has-active-menu');
   }
                    
  $scope.showMenu = function(e) {
      e.stopPropagation();
    
      var menu = document.querySelector('#slide-menu-right');
      menu.classList.add('is-active');
      
      var mask = document.querySelector('#mask');
      mask.classList.add('is-active');
      
      document.body.classList.add('has-active-menu');
  };

}]);
