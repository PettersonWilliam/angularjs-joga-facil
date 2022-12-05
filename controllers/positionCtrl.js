myApp.controller("positionCtrl", ['$scope', 'PositionsService', function($scope, PositionsService) {
    const listAll = () => {
        PositionsService.listAll().then(response => {
            $scope.positionsName = response.data.position;
        }).catch(error => {
            alert('Error ao listar posições');
        });
    };

    const deletePosition = id => {
        PositionsService.deletePosition(id).then(response => {
            listAll();
        }).catch(error => {
            alert('Erro ao deletar posição');
        })
    };

    $scope.deletePosition = deletePosition;

    listAll();
}]);