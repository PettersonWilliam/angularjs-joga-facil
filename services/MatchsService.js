myApp.service("MatchsService", function($http) {
    const list = () => {
        return $http.get('http://localhost:3000/match');
    }

    return {
        list
    }
});