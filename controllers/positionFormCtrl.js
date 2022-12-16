myApp.controller("positionFormCtrl", ['$scope', '$stateParams', 'PositionsService', '$state', function($scope, $stateParams, PositionsService, $state) {
const editPosition = () => {
    const options = {
        data: {
            name: $scope.positionName
        },
        id: $stateParams.positionId
    }

    PositionsService.edit(options).then(response => {
        $state.go('position');
    }).catch(error => {
        alert('Erro ao Editar Posição');
    })
};

const init = () => {
    const id = $stateParams.positionId;

    if (id) {
        PositionsService.find(id).then(response => {
            $scope.positionName = response.data.position.name;
        }).catch(error => {
            alert('Não é possível listar a posição');
        });
    }
};

const createPosition = () => {
    const data = {
        name: $scope.positionName
    }
    
    PositionsService.store(data).then(response => {
        $state.go('position');
    }).catch(error => {
        alert(error.data.message);
    });
};

const submit = () => {

    const data = {
        name: $scope.positionName
    }
    if(!data.name) {
        alert('Por favor preencher o campo abaixo');
        return;
    }

    const positionId = $stateParams.positionId;

    if (positionId) {
        editPosition();
    } else {
        createPosition();
    }
};
    init();

    $scope.submit = submit;


}]);