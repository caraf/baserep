angular.module('myApp', ['ngMessages'])
    .controller('MyCtrl', ['$scope', '$timeout', '$q', '$http', function($scope, $timeout, $q, $http) {

    $scope.searchTag = "Enter a tag to search";

    $scope.submit = function() {

        console.log($scope.myForm);

	if ($scope.myForm.searchTag.$dirty)
	{
	    var httpParams = {
	        callback: 'JSON_CALLBACK',
	        client_id: 'eefabc64d3414a1d9009cccb1ea6a59a',
		redirect_uri: 'http://nosite',
		response_type: 'token'

	    };
        
	    $http({
	        url: 'https://api.instagram.com/v1/tags/' + $scope.searchTag + '/media/recent',
	        method: 'GET',
		params: httpParams
	    })
	    .then(function(response) {
	        console.log("I'm here!!");
	    })
	}

    };

}]);
