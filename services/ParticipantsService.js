myApp.service("ParticipantsService", function($http) {
    const list = () => {
        return $http.get('http://localhost:3000/participant');
    };
    const deleteParticipant = id => {
        return $http.delete(`http://localhost:3000/participant/${id}`);
    };
    const editParticipant = ({ data, id }) => {
        return $http.put(`http://localhost:3000/participant/${id}`, data);
    };
    const find = id => {
        return $http.get(`http://localhost:3000/participant/${id}`);
    };
    const createParticipant = data => {
        return $http.post(`http://localhost:3000/participant`, data);
    }
    const listGols = () => {
        return $http.get('http://localhost:3000/participant/top-3-gol');
    }
    const listRate = () => {
        return $http.get('http://localhost:3000/participant/top-3-rate');
    }
    return {
        list,
        deleteParticipant,
        editParticipant,
        find,
        createParticipant,
        listGols,
        listRate
    }
});