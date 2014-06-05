var app = angular.module('myApp', [])

app.directive('myRating', function () {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      console.log("Recognized the my-rating directive usage");
    }
  }
});
