var app = angular.module('mainApp',[]);

app.controller('fun',function($scope,$http){
	$http.get('file:///home/harshali/searchBox/project2/database.json')
	.success(function(response)
	{
		$scope.list=response.records;
	});

});
