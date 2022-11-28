myApp.service("LoginService", function($http) {
    const sign = (data) => {
        return $http.post('http://localhost:3000/user/login', data);
    };

    return {
        sign
    }
});