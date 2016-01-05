(function(){

// Where my data is coming from
var apiurl = 'wp-json/wp/v2/posts';

// Where my data is coming from => categories
var catsurl = 'wp-json/wp/v2/categories';

// Where my data is coming from => tags
var tagsurl = 'wp-json/wp/v2/tags';

// My App! And it's dependencies.
var myApp = angular.module('app', ['ngRoute', 'ngSanitize']);


// 	Routers
//_________________________________________________
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/', {
		templateUrl: myLocalized.partials + 'main.html',
		controller: 'Main'
	})
	.when('/:slug', {
		templateUrl: myLocalized.partials + 'single.html',
		controller: 'SingleContent'
	})
	.when('/category/:category', {
		templateUrl: myLocalized.partials + 'main.html',
		controller: 'Category'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);

// 	Controllers
//_________________________________________________
myApp.controller('Main', ['$scope', '$http', function($scope, $http) {
	$http.get(apiurl).success(function(data){
		$scope.posts = data;
	});
	$http.get(catsurl).success(function(response){
		$scope.categories = response;
	});
}]);
myApp.controller('SingleContent', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get(apiurl + '/?filter[name]=' + $routeParams.slug).success(function(data){
		$scope.post = data[0];
	});
}]);
//Category controller
myApp.controller('Category', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	$http.get(catsurl).success(function(response){
		$scope.categories = response;
	});

	$http.get(catsurl + '/?filter[slug]=' + $routeParams.category).success(function(response){
		$scope.current_category_id = response[0].id;
		$scope.pageTitle = 'Posts in ' + response[0].name + ':';
		document.querySelector('title').innerHTML = 'Category: ' + response[0].name + ' | AngularJS Demo Theme';

		$http.get(apiurl + '/?filter[category_name]=' + response[0].name).success(function(response){
			$scope.posts = response;
		});
	});
}]);

// 	Custom Directive Search Form
//_________________________________________________
myApp.directive('searchForm', function() {
	return {
		restrict: 'EA',
		template: 'Search Keyword: <input type="text" name="s" ng-model="filter.s" ng-change="search()">',
		
		// Add the Controller property to the Directive
		controller: ['$scope', '$http', function ( $scope, $http ) {
			$scope.filter = {
				s: ''
			};
			$scope.search = function() {
				// Only trigger the Search Response if greater or = than 3 characters long
				if ( $scope.filter.s.length >= 3 ) {
					$http.get(apiurl + '/?filter[s]=' + $scope.filter.s).success(function(response){
						$scope.posts = response;
					});
				}
			};
		}]
	};
});






})();