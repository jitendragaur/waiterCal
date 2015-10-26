angular.module('app', ['ngRoute'])
    .value('mealDetail', {
        subtotal: 0,
        tip: 0,
        total: 0,
        tipTotal: 0,
        count: 0,
        tipAvg: 0
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: 'home.html',
                controller: 'HomeController as vm'
            })
            .when('/meal/new', {
                templateUrl: 'meal.html',
                controller: 'MealController as vm'
            })
            .when('/earnings', {
                templateUrl: 'earning.html',
                controller: 'EarningController as vm'
            })
            .otherwise('/')
    }])
    .controller('HomeController', ['$rootScope', function($rootScope) {
        $rootScope.nav = 'home'; //set active class on menu
    }])
    .controller('MealController', ['$rootScope', 'mealDetail', function($rootScope, mealDetail) {
        vm = this;
        vm.meal = {};

        $rootScope.nav = 'meal'; //set active class on menu

        updateView();

        function updateView() {
            vm.meal_subtotal = mealDetail.subtotal; //assing value in view
            vm.meal_tip = mealDetail.tip; //assing value in view
            vm.meal_total = mealDetail.total; //assing value in view
        };

        vm.submitForm = function() {
            //subTotal = (basemeal*tax/100)+basemeal
            mealDetail.subtotal = (vm.meal.price * vm.meal.tax / 100) + vm.meal.price;
            //tip = basemeal*tip/100
            mealDetail.tip = vm.meal.price * vm.meal.tip / 100;
            //total = subTotal + tip
            mealDetail.total = mealDetail.subtotal + mealDetail.tip;


            //tipTotal = mealTip + totalTip
            mealDetail.tipTotal = mealDetail.tipTotal + mealDetail.tip;
            //mealCount = mealCount++
            mealDetail.count = mealDetail.count + 1;
            //avgTip = totalTip/mealCount
            mealDetail.tipAvg = mealDetail.tipTotal / mealDetail.count;

            //update the view
            updateView();

            //reset the form
            vm.resetForm();
        };

        vm.resetForm = function() {
            vm.meal = {};
            vm.theForm.$setPristine();
        };

    }])
    .controller('EarningController', ['$rootScope', 'mealDetail', function($rootScope, mealDetail) {
        var vm = this;

        $rootScope.nav = 'earning'; //set active class on menu

        updateView();

        //reset whole app
        vm.resetApp = function() {
            mealDetail.subtotal = 0,
                mealDetail.subtotal = 0,
                mealDetail.tip = 0,
                mealDetail.total = 0,
                mealDetail.tipTotal = 0,
                mealDetail.count = 0,
                mealDetail.tipAvg = 0;
            updateView();
        };

        function updateView() {
            vm.meal_tipTotal = mealDetail.tipTotal;
            vm.meal_count = mealDetail.count;
            vm.meal_tipAvg = mealDetail.tipAvg;
        };
    }])
