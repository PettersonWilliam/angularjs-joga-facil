myApp.service("PositionsService", function($http) {
    const listAll = () => {
        return $http.get('http://localhost:3000/position');
    };

    const deletePosition = id  => {
        return $http.delete(`http://localhost:3000/position/${id}`);
    };

    const edit = ({ data, id }) => {
        return $http.put(`http://localhost:3000/position/${id}`, data);
    };

    const find = id  => {
        return $http.get(`http://localhost:3000/position/${id}`);
    };

    return {
        listAll,
        deletePosition,
        edit,
        find
    }
});