myApp.controller('HomeCtrl', ['$scope', 'MatchsService', '$state', function ($scope, MatchsService ,$state) {
    const tableList = () => {
        MatchsService.list().then(response => {
            const matches = response.data.matchs.map(match => {
                if (match.status === 'OPEN') {
                    match.display_status = 'ABERTA'
                }

                if (match.status === 'PROGRESS') {
                    match.display_status = 'EM ANDAMENTO'
                }

                if (match.status === 'FINISHED') {
                    match.display_status = 'FINALIZADA'
                };

                return match;
            });

            $scope.matchs = matches;
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
    };

    const updateStatus = (status, id) => {
        const options = {
            data: {
                status
            },
            id
        };

        MatchsService.updateStatus(options).then(response => {
            $state.go('home');
        }).catch(error => {
            alert('Erro ao Atualizar o status');
        });
    }

    tableList();
    $scope.deleteMatch = deleteMatch;
    $scope.updateStatus = updateStatus;
}]);

