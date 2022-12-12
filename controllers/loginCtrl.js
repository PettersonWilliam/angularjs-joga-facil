myApp.controller("LoginCtrl", ['$window', '$scope', '$state', '$rootScope', 'LoginService', function($window, $scope, $state, $rootScope, LoginService) {
    const signIn = () => {
        const data = {
            email: $scope.email,
            password: $scope.password
        };

        LoginService.sign(data).then(response => {
            const token = response.data.token;

            $window.localStorage.setItem('token', token);
            $state.go('home')

            $rootScope.isLogged = true;
        }).catch(error => {
            alert('Erro! Credenciais Inválidas');
        });
    }
    
    $scope.signIn = signIn;
}]);