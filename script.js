angular.module('myApp', [])
    .controller('MyCtrl', ['$scope', function ($scope) {

        $scope.showForm = true;
        $scope.showResult = false;

        $scope.submit = function(){
            // show result and hide form
            $scope.showResult = true;
            $scope.showForm = false;
        }

        $scope.startOver = function(){
            //reste the form
            $scope.data = {};
            //$scope.myFrm.setPristine();
            $scope.myFrm.$setPristine();
            //hide result and show form
            $scope.showResult = false;
            $scope.showForm = true;
        };
    }]);