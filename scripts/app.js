// create our angular module
var colorPicker = angular.module('colorPicker', []);

// make our unique selections for each svg div
colorPicker.controller('redController', function($scope) {

  angular.element('#red').on('click', function(event) {
    var redY = event.pageY;
    console.log(redY);
    $scope.redVal = redY;
  })
});