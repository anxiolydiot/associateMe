var associateMe = angular.module('associateMe',['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
  // $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'partials/home.html', 
    controller: 'homecontroller',
})
  .state('chatrooms', {
    url: '/chatrooms',
    templateUrl: 'partials/chatroom.html',
    controller: 'chatroomcontroller'
})
  .state('profile', {
    url: '/profile',
    templateUrl: 'partials/profile.html',
    controller: 'profilecontroller'
});
    

  $locationProvider.html5Mode(true);

  }]);



