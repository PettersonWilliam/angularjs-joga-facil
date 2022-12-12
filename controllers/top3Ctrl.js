myApp.controller("top3Ctrl", ['$scope', 'ParticipantsService', function ($scope, ParticipantsService ) {
   const list = () => {
        ParticipantsService.listGols().then(response => {
            $scope.top3 = response.data.top3;
        }).catch(error => {
            alert('Erro ao listar top 3');
        })
    }

    const listRate = () => {
        ParticipantsService.listRate().then(response => {
            $scope.top3Rate = response.data.top3rate;
        }).catch(error => {
            alert('Erro ao listar top 3');
        })

    }

    list();
    listRate();
}]);