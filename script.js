angular.module('myApp', [])
    .controller('MyCtrl', ['$scope', function ($scope) {
        //default select to male option for gender
        $scope.gender = 'he';
    }]);