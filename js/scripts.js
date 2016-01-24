(function(){

// Where my data is coming from
var apiurl = 'wp-json/wp/v2/posts';

// Where my data is coming from
var pagesurl = 'wp-json/wp/v2/pages';

// Where my data is coming from => categories
var catsurl = 'wp-json/wp/v2/categories';

// Where my data is coming from => tags
var tagsurl = 'wp-json/wp/v2/tags';

// My App! And it's dependencies.
var myApp = angular.module('app', ['ngRoute', 'ngSanitize', 'ngAnimate']);


// 	Routers
//_________________________________________________
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/', {
		templateUrl: myLocalized.partials + 'main.html',
		controller: 'Main'
	})
	.when('/blog/:slug', {
		templateUrl: myLocalized.partials + 'single.html',
		controller: 'SingleContent'
	})
	.when('/category/:category', {
		templateUrl: myLocalized.partials + 'main.html',
		controller: 'Category'
	})
	.when('/page/:slug', {
		templateUrl: myLocalized.partials + 'page.html',
		controller: 'Paged'
	})
	.otherwise({
		templateUrl: myLocalized.partials + '404.html',
		controller: '404'
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
	$http.get(pagesurl).success(function(data){
		$scope.page = data;
	});
}]);
myApp.controller('SingleContent', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get(apiurl + '/?filter[name]=' + $routeParams.slug).success(function(data){
		$scope.post = data[0];
	});
}]);
myApp.controller('Paged', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get(pagesurl + '/?filter[name]=' + $routeParams.slug).success(function(data){
		$scope.page = data[0];
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


//404 controller
myApp.controller('404', function() {
	document.querySelector('title').innerHTML = 'Page not found';
});

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
						//$scope.pages = response;
					});
				}
			};
		}]
	};
});


myApp.animation('.slide', [function() {
  return {
    // make note that other events (like addClass/removeClass)
    // have different function input parameters
    enter: function(element, doneFn) {
      jQuery(element).fadeIn(1000, doneFn);

      // remember to call doneFn so that angular
      // knows that the animation has concluded
    },

    move: function(element, doneFn) {
      jQuery(element).fadeIn(1000, doneFn);
    },

    leave: function(element, doneFn) {
      jQuery(element).fadeOut(1000, doneFn);
    }
  }
}]);



})();