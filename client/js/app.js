var associateMe = angular.module('associateMe',[
  'ngRoute']).
config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homecontroller'});
  $routeProvider.when('/chatrooms', {templateUrl: 'partials/chatroom.html', controller: 'chatroomcontroller'});
  $routeProvider.otherwise({redirectTo:'/home'});


  $locationProvider.html5Mode({enabled:true, requireBase:false });

  }]);