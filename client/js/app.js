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
});
    


  $locationProvider.html5Mode(true);

  }]);

//you can specify base href 

