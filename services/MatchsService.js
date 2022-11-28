myApp.service("MatchsService", function($http) {
    const list = () => {
        return $http.get('http://localhost:3000/match');
    }
    const deleteMatch = id => {
        return $http.delete(`http://localhost:3000/match/${id}`);
    }

    return {
        list,
        deleteMatch
    }
});