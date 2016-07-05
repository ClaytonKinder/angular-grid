app.controller('mainCtrl', function($scope, $rootScope, $state) {

  console.log($state);

  $rootScope.isActive = function(name) {
    if (name == $state.current.name) {
      return true;
    }
    return false;
  }

  $scope.products = ["Milk", "Bread", "Cheese", "Butter", "Ham", "Eggs", "Bacon", "Ice Cream"];
});
