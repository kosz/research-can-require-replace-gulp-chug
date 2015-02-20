angular.module('childproject').config([ '$routeProvider', 
function ($routeProvider) {
  
  $routeProvider.when('/exampleRoute', {
    templateUrl: 'routes/exampleRoute/exampleRoute.html',
    controller: 'exampleRoute',
    controllerAs: 'exampleRoute' 
  });

}]);
