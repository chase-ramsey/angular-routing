angular.module('app', ['ngRoute', 'angular.filter'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: "app/partials/home.html"
      })
      .when('/hello', {
        templateUrl: "app/partials/hello.html",
        controller: 'HelloCtrl'
      })
      .when('/hello/:name', {
        templateUrl: "app/partials/hello-person.html",
        controller: 'HelloPersonCtrl'
      })
      .otherwise('/')
  })
  .controller('HelloCtrl', function ($scope, $location) {
    $scope.hello = () => $location.path(`/hello/${$scope.name}`)
  })
  .controller('HelloPersonCtrl', function ($scope, $routeParams) {
    $scope.header = `Hello ${$routeParams.name}`
  })
  .filter('camelcase', () => (
      string => {
        const upperCamelCase = string
          .toLowerCase()
          .split(' ')
          .map(word => word[0].toUpperCase() + word.slice(1))
          .join('')

        return upperCamelCase[0].toLowerCase() + upperCamelCase.slice(1)
      }
    )
  )
