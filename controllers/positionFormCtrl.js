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
    });
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

const submit = () => {
    const positionId = $stateParams.positionId;

    if (positionId) {
        editPosition();
    }
};
    init();

    $scope.submit = submit;


}]);