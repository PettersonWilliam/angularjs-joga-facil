myApp.factory('BearerTokenInterceptor', function ($window, $q, $state, $rootScope) {
    return {
        request: function(config) {
            config.headers = config.headers || {};

            if ($window.localStorage.getItem('token')) {
                config.headers.Authorization = 'Bearer ' + $window.localStorage.getItem('token');
            }

            return config || $q.when(config);
        },
        response: function(response) {
            return response || $q.when(response);
        },
        responseError: function(response) {
            if (response.status === 401) {
                $state.go('login')
                $rootScope.isLogged = false;
            }
        }
    };
});