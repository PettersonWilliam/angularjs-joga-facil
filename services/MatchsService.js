myApp.service("MatchsService", function($http) {
    const list = () => {
        return $http.get('http://localhost:3000/match');
    }
    const deleteMatch = id => {
        return $http.delete(`http://localhost:3000/match/${id}`);
    }
    const edit = ({ data, id }) => {
        return $http.put(`http://localhost:3000/match/${id}`, data);
    }
    const find = (id) => {
        return $http.get(`http://localhost:3000/match/${id}`);
    }
    const updateStatus = ({ data, id }) => {
        return $http.put(`http://localhost:3000/match/status/${id}`, data);
    }
    return {
        list,
        deleteMatch,
        edit,
        find,
        updateStatus

    }
});