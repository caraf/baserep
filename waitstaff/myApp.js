angular.module('myApp', ['ngMessages'])
    .controller('MyCtrl', function($scope) {

    $scope.data = [];

    $scope.submit = function() {
        console.log($scope.myForm);

        if ($scope.myForm.$valid)
	{

            $scope.data.subTotal = (Number($scope.data.baseMealPrice) + (Number($scope.data.baseMealPrice) * Number($scope.data.taxRate) / 100)).toFixed(2);
            $scope.data.tip = Number($scope.data.subTotal * $scope.data.tipPercentage / 100).toFixed(2);
            $scope.data.total = (Number($scope.data.subTotal) + Number($scope.data.tip)).toFixed(2);

	    $scope.data.tipTotal = (Number($scope.data.tipTotal) + Number($scope.data.tip)).toFixed(2);
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
        $scope.myForm.$submitted = false;
        console.log($scope.myForm);

    };

    $scope.reset = function() {
        $scope.initValues();     
        $scope.myForm.$submitted = false;

    };



});

