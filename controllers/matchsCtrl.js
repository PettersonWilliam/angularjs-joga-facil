myApp.controller('MatchsCtrl', ['$scope',  '$stateParams', '$state', '$timeout', 'MatchsService', function($scope, $stateParams, $state, $timeout, MatchsService) {
    $scope.match = {};
    
    const updateMatch = () => {
        const options = {
            data : {
                date: $scope.match.date,
                started_at: $scope.match.started_at,
                end_at: $scope.match.end_at,
                status: $scope.match.status
            },
            id: $stateParams.matchId
        };

        MatchsService.edit(options).then(response => {
            $state.go('home');
        }).catch(error => {
            alert('Erro ao atualizar partida.');
        });
    };

    const createMatch = () => {

        const data = {
            date: $scope.match.date,
            started_at: $scope.match.started_at,
            end_at: $scope.match.end_at,
            team_amount: $scope.match.team_amount
        };

        MatchsService.createMatch(data).then(response => {
            $state.go('home');
        }).catch(error => {
            alert('Erro ao Criar Partida');
        })
    }

    const getDateHour = date => {
        const today = new Date(date);
        return new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), 0);
    };

    const init = () => {
        const id = $stateParams.matchId;
        console.log($stateParams);
        if (id) {
            $scope.loading = true;

            MatchsService.find(id).then(response => {
                $timeout(() => {
                    $scope.match.date = new Date(response.data.match.date);
                    $scope.match.started_at = getDateHour(response.data.match.started_at);
                    $scope.match.end_at = getDateHour(response.data.match.end_at);
                })

            }).catch(error => {
                alert('Algo de Errado Aconteceu');
            }).finally(() => {
                $scope.loading = false;
            });
        }
    }

    const submit = () => {
        const matchId = $stateParams.matchId;

        if (matchId) {
            updateMatch();
        } else {
            createMatch();
        }
     }
    
    init();
    $scope.submit = submit;
}]);