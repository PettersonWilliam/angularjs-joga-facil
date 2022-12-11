myApp.service("MatchParticipantsService", function($http) {
    const listAll = () => {
        return $http.get('http://localhost:3000/matchs-participants');
    };

    const deleteMatchParticipant = id  => {
        return $http.delete(`http://localhost:3000/matchs-participants/${id}`);
    };

    const edit = ({ data, id }) => {
        return $http.put(`http://localhost:3000/matchs-participants/${id}`, data);
    };

    const find = id  => {
        return $http.get(`http://localhost:3000/matchs-participants/${id}`);
    };
    const store = data => {
        return $http.post('http://localhost:3000/matchs-participants', data);
    }
    return {
        listAll,
        deleteMatchParticipant,
        edit,
        find,
        store
    }
});