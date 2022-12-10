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
    // const list = id => {
    //     return $http.get(`http://localhost:3000/participant/${id}`);
    // };    
    const createParticipant = data => {
        return $http.post(`http://localhost:3000/participant`, data);
    }
    return {
        list,
        deleteParticipant,
        editParticipant,
        find,
        createParticipant
    }
});