angular.module('app', [])
    .controller('mealController', function () {
        vm = this;
        vm.meal = {};

        vm.mealInit = function () {
            vm.meal_subtotal = 0,
                vm.meal_tip = 0;
            vm.meal_total = 0;

            vm.meal_tipTotal = 0,
                vm.meal_count = 0,
                vm.meal_tipAvg = 0;
        };

        vm.mealInit();

        vm.submitForm = function () {
            //subTotal = (basemeal*tax/100)+basemeal
            vm.meal_subtotal = (vm.meal.price * vm.meal.tax / 100) + vm.meal.price;
            //tip = basemeal*tip/100
            vm.meal_tip = vm.meal.price * vm.meal.tip / 100;
            //total = subTotal + tip
            vm.meal_total = vm.meal_subtotal + vm.meal_tip;

            //tipTotal = mealTip + totalTip
            vm.meal_tipTotal = vm.meal_tipTotal + vm.meal_tip;
            //mealCount = mealCount++
            vm.meal_count = vm.meal_count + 1;
            //avgTip = totalTip/mealCount
            vm.meal_tipAvg = vm.meal_tipTotal / vm.meal_count;

            //reset the form
            vm.resetForm();
        };

        vm.resetForm = function () {
            vm.meal = {};
            vm.theForm.$setPristine();
        };

        //reset whole app
        vm.resetApp = function () {
            vm.meal = {};
            vm.theForm.$setPristine();
            vm.mealInit();
        }
    });