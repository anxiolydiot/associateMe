associateMe.controller ('registerController', function($scope){
  $scope.submitForm = function(isValid) {
    if (isValid) {
      alert('our form is amazing');
    }
  };
});