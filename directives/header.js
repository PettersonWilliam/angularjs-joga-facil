myApp.directive('header', function() {
    return {
        restrict: 'E',
        templateUrl: '../views/header.html',
        controller: function($scope, $rootScope, $state) {
            const exit = () => {
                localStorage.removeItem('token');
                $state.go('login');

                $rootScope.isLogged = false;
            }

            $scope.exit = exit;
        }
    };
});