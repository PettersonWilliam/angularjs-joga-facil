myApp.controller('HomeCtrl', ['$scope', 'MatchsService', '$rootScope', '$state', function($scope, MatchsService, $rootScope ,$state) {
    const tableList = () => {
        MatchsService.list().then(response => {
            $scope.matchs = response.data.matchs;
        }).catch(error => {
            alert('Algo de Eraado aconteceu');
        }); 
    }

    const deleteMatch = id => {
        MatchsService.deleteMatch(id).then(response => {
            if ($scope.match.status === FINISHED) {
                alert('Não é possível deletar, Partida Finalizada!');
            }
            tableList();
        }).catch(error => {
            alert('Algo de errado aconteceu');
        });
    }

    tableList();
    $scope.deleteMatch = deleteMatch;
}]);

