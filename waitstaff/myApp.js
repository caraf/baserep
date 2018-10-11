angular.module('myApp', ['ngMessages'])
    .controller('MyCtrl', function($scope) {

    $scope.data = [];

    $scope.submit = function() {
        console.log($scope.myForm);

        if ($scope.myForm.$valid)
	{

            $scope.data.subTotal = (parseInt($scope.data.baseMealPrice) + (parseInt($scope.data.baseMealPrice) * parseInt($scope.data.taxRate) / 100)).toFixed(2);
            $scope.data.tip = parseInt($scope.data.subTotal * $scope.data.tipPercentage / 100).toFixed(2);
            $scope.data.total = (parseInt($scope.data.subTotal) + parseInt($scope.data.tip)).toFixed(2);

	    $scope.data.tipTotal = (parseInt($scope.data.tipTotal) + parseInt($scope.data.tip)).toFixed(2);
	    $scope.data.mealCount++; 
	    $scope.data.avgTipPerMeal = ($scope.data.tipTotal / $scope.data.mealCount).toFixed(2);

	}
      
    };

    $scope.initInputValues = function()
    {
        $scope.data.baseMealPrice = "0.00";
        $scope.data.taxRate = "";
        $scope.data.tipPercentage = "";
    };

    $scope.initValues = function() {
        $scope.initInputValues();
	$scope.data.subTotal = "0.00";
	$scope.data.tip = "0.00";
	$scope.data.total = "0.00";
	$scope.data.tipTotal = "0.00";
	$scope.data.mealCount = 0;
	$scope.data.avgTipPerMeal = "0.00";


    };

    $scope.initValues();

    $scope.cancel = function() {
        $scope.initInputValues();     
        $scope.myForm.$setPristine();
        console.log($scope.myForm);

    };

    $scope.reset = function() {
        $scope.initValues();     
        $scope.myForm.$setPristine();

    };


});

