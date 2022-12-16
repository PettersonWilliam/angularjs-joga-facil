myApp.controller("LoginCtrl", ['$window', '$scope', '$state', '$rootScope', 'LoginService', function($window, $scope, $state, $rootScope, LoginService) {
    const signIn = () => {
        const data = {
            email: $scope.email,
            password: $scope.password
        };

        if(!data.email) {
            alert('Por favor inserir o email');
            return;
        }
        
        if(!data.password) {
            alert('Por favor inserira sua senha');
            return;
        }
        if(data.password.length < 6) {
            alert('A senha deve conter no mínimo 6 caracteres');
            return;
        }


        LoginService.sign(data).then(response => {
            const token = response.data.token;

            $window.localStorage.setItem('token', token);
            $state.go('home')

            $rootScope.isLogged = true;
        }).catch(error => {
            alert('Credenciais Inválidas');
        });
    }
    
    $scope.signIn = signIn;
}]);